/**
 * Parser de frontmatter YAML para archivos SKILL.md
 * Versión profesional: maneja comillas, multilínea, booleanos, números y valores especiales
 */

export interface SkillFrontmatter {
  name: string;
  description: string;
  metadata?: Record<string, unknown>;
}

const FRONTMATTER_REGEX = /^---\n([\s\S]*?)\n---\n/;

function parseYamlValue(raw: string): unknown {
  const trimmed = raw.trim();

  // Valores vacíos
  if (trimmed === "") return "";

  // Booleanos
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (trimmed === "null" || trimmed === "~") return null;

  // Números
  const num = Number(trimmed);
  if (!isNaN(num) && trimmed.match(/^-?\d+(\.\d+)?$/)) {
    return num;
  }

  // Strings entre comillas dobles
  if (trimmed.startsWith('"') && trimmed.endsWith('"') && trimmed.length >= 2) {
    return trimmed.slice(1, -1).replace(/\\n/g, "\n").replace(/\\"/g, '"');
  }

  // Strings entre comillas simples
  if (trimmed.startsWith("'") && trimmed.endsWith("'") && trimmed.length >= 2) {
    return trimmed.slice(1, -1);
  }

  return trimmed;
}

export function parseFrontmatter(content: string): SkillFrontmatter {
  const result: SkillFrontmatter = {
    name: "",
    description: "",
    metadata: {},
  };

  const fmMatch = content.match(FRONTMATTER_REGEX);
  if (!fmMatch) {
    return result;
  }

  const frontmatterBlock = fmMatch[1];
  const lines = frontmatterBlock.split("\n");

  let currentKey: string | null = null;
  let currentValueLines: string[] = [];

  function flushCurrentKey(): void {
    if (currentKey === null) return;

    const rawValue = currentValueLines.join("\n").trim();
    const parsed = parseYamlValue(rawValue);

    if (currentKey === "name") {
      result.name = String(parsed);
    } else if (currentKey === "description") {
      result.description = String(parsed);
    } else {
      if (!result.metadata) result.metadata = {};
      result.metadata[currentKey] = parsed;
    }

    currentKey = null;
    currentValueLines = [];
  }

  for (const line of lines) {
    // Línea de clave-valor: key: value
    const keyMatch = line.match(/^([\w][\w/-]*):\s*(.*)$/);
    if (keyMatch) {
      flushCurrentKey();
      currentKey = keyMatch[1];
      currentValueLines = [keyMatch[2]];
      continue;
    }

    // Línea de continuación (indentada bajo una clave anterior) - estilo YAML multilínea o lista
    if (currentKey !== null && (line.startsWith("  ") || line.startsWith("\t"))) {
      currentValueLines.push(line.trim());
      continue;
    }

    // Nueva clave sin indentación - finalizar anterior
    if (currentKey !== null) {
      flushCurrentKey();
    }

    // Si la línea no coincide con nada, ignorar (comentarios, líneas vacías)
  }

  // Flush última clave
  flushCurrentKey();

  return result;
}

export function extractBody(content: string): string {
  return content.replace(FRONTMATTER_REGEX, "").trim();
}

export function hasFrontmatter(content: string): boolean {
  return FRONTMATTER_REGEX.test(content);
}
