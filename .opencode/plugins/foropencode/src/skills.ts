/**
 * Descubrimiento y lectura de skills de ForOpenCode
 * Soporta múltiples orígenes: local, global, rutas personalizadas y catálogos HTTP
 */

import * as fs from "fs/promises";
import type { Dirent } from "fs";
import * as path from "path";
import {
  SkillInfo,
  SkillFrontmatter,
  getCategory,
} from "./types";
import { parseFrontmatter, extractBody } from "./parser";
import { Logger } from "./logger";

const SKILL_FILENAME = "SKILL.md";

function resolveHome(p: string): string {
  if (p.startsWith("~")) {
    const home = process.env.HOME || process.env.USERPROFILE || "";
    return home ? home + p.slice(1) : p;
  }
  return p;
}

function normalizeSource(source: string): string {
  return path.resolve(process.cwd(), resolveHome(source));
}

/**
 * Parsea el frontmatter de un SKILL.md y devuelve metadata + cuerpo
 */
async function readSkillFile(skillDir: string): Promise<{
  frontmatter: SkillFrontmatter;
  body: string;
} | null> {
  const skillMdPath = path.join(skillDir, SKILL_FILENAME);

  try {
    await fs.access(skillMdPath);
  } catch {
    return null;
  }

  const content = await fs.readFile(skillMdPath, "utf-8");
  const frontmatter = parseFrontmatter(content);
  const body = extractBody(content);

  return { frontmatter, body };
}

/**
 * Obtiene archivos de soporte (scripts/, references/, etc.) de una skill
 */
async function listSupportFiles(skillDir: string): Promise<string[]> {
  const files: string[] = [SKILL_FILENAME];

  try {
    const entries = await fs.readdir(skillDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.name === SKILL_FILENAME) continue;

      const entryPath = path.join(skillDir, entry.name);

      if (entry.isDirectory()) {
        try {
          const subFiles = await fs.readdir(entryPath);
          for (const sf of subFiles) {
            files.push(`${entry.name}/${sf}`);
          }
        } catch {
          // Ignorar directorios que no se pueden leer
        }
      } else {
        files.push(entry.name);
      }
    }
  } catch {
    // Ignorar errores de lectura
  }

  return files;
}

/**
 * Descubre skills en un directorio dado
 */
async function discoverSkillsInDir(
  dir: string,
  source: "local" | "global" | "custom"
): Promise<SkillInfo[]> {
  const skills: SkillInfo[] = [];

  try {
    await fs.access(dir);
  } catch {
    return skills;
  }

  let entries: Dirent[];
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return skills;
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const skillDir = path.join(dir, entry.name);

    const skillData = await readSkillFile(skillDir);
    if (!skillData) continue;

    const frontmatter = skillData.frontmatter;
    const files = await listSupportFiles(skillDir);

    const version = "1";

    skills.push({
      id: entry.name,
      name: frontmatter.name || entry.name,
      description: frontmatter.description || "",
      version,
      files,
      category: getCategory(entry.name),
      source,
      path: skillDir,
    });
  }

  return skills;
}

/**
 * Descubre skills de todos los orígenes configurados
 */
export async function discoverAllSkills(
  sources: string[],
  logger: Logger
): Promise<SkillInfo[]> {
  const allSkills: SkillInfo[] = [];
  const seenIds = new Set<string>();

  for (const rawSource of sources) {
    const normalized = normalizeSource(rawSource);

    let sourceType: "local" | "global" | "custom" = "custom";

    if (normalized.includes(".opencode/skills")) {
      sourceType = "local";
    } else if (normalized.includes(".config/opencode/skills")) {
      sourceType = "global";
    }

    logger.debug(`Escaneando skills en: ${normalized} (tipo: ${sourceType})`);

    const skills = await discoverSkillsInDir(normalized, sourceType);

    for (const skill of skills) {
      if (seenIds.has(skill.id)) {
        logger.debug(`ID duplicado omitido: ${skill.id} (origen: ${skill.source})`);
        continue;
      }
      seenIds.add(skill.id);
      allSkills.push(skill);
    }
  }

  return allSkills.sort((a, b) => a.id.localeCompare(b.id));
}

/**
 * Lista todas las skills disponibles
 */
export async function listSkills(
  sources: string[],
  logger: Logger
): Promise<SkillInfo[]> {
  return discoverAllSkills(sources, logger);
}

/**
 * Filtra skills por categoría
 */
export function filterByCategory(
  skills: SkillInfo[],
  category: string
): SkillInfo[] {
  return skills.filter((s) => s.category === category);
}

/**
 * Busca skills por texto en nombre, descripción o categoría
 */
export async function searchSkills(
  skills: SkillInfo[],
  query: string
): Promise<SkillInfo[]> {
  const q = query.toLowerCase();
  return skills.filter(
    (s) =>
      s.id.toLowerCase().includes(q) ||
      s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q)
  );
}

/**
 * Obtiene el contenido completo de una skill específica
 */
export async function getSkillContent(
  skills: SkillInfo[],
  id: string
): Promise<{
  frontmatter: SkillFrontmatter;
  body: string;
  files: string[];
  category: string;
  source: string;
} | null> {
  const skill = skills.find((s) => s.id === id);
  if (!skill) return null;

  const skillData = await readSkillFile(skill.path!);
  if (!skillData) return null;

  return {
    frontmatter: skillData.frontmatter,
    body: skillData.body,
    files: skill.files,
    category: skill.category,
    source: skill.source,
  };
}

/**
 * Genera comandos de instalación para una skill
 */
export function getInstallCommands(id: string): string[] {
  return [
    `# Proyecto local`,
    `cp -r .opencode/skills/${id} .opencode/skills/`,
    ``,
    `# Uso global`,
    `cp -r .opencode/skills/${id} ~/.config/opencode/skills/`,
  ];
}

/**
 * Valida un archivo SKILL.md
 */
export async function validateSkill(
  skillDir: string,
  id: string
): Promise<{
  valid: boolean;
  errors: string[];
  warnings: string[];
}> {
  const errors: string[] = [];
  const warnings: string[] = [];

  const skillMdPath = path.join(skillDir, SKILL_FILENAME);

  try {
    await fs.access(skillMdPath);
  } catch {
    errors.push(`No se encontró el archivo ${SKILL_FILENAME}`);
    return { valid: false, errors, warnings };
  }

  const content = await fs.readFile(skillMdPath, "utf-8");

  if (!hasFrontmatter(content)) {
    errors.push("Falta frontmatter YAML (--- al inicio del archivo)");
  } else {
    const fm = parseFrontmatter(content);

    if (!fm.name || fm.name.trim() === "") {
      errors.push("El campo 'name' es requerido en el frontmatter");
    }

    if (!fm.description || fm.description.trim() === "") {
      warnings.push("Se recomienda agregar un campo 'description' para que la skill sea anunciada al modelo");
    }

    if (fm.name && fm.name !== id) {
      warnings.push(`El 'name' del frontmatter ("${fm.name}") no coincide con el ID de la carpeta ("${id}")`);
    }

    // Validar formato kebab-case del ID
    const kebabRegex = /^[a-z0-9]+(-[a-z0-9]+)*$/;
    if (!kebabRegex.test(id)) {
      warnings.push(`El ID "${id}" no sigue el formato kebab-case recomendado`);
    }
  }

  const body = extractBody(content);
  if (body.length === 0) {
    warnings.push("El cuerpo de la skill está vacío (sin instrucciones después del frontmatter)");
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

function hasFrontmatter(content: string): boolean {
  return /^---\n[\s\S]*?\n---\n/.test(content);
}
