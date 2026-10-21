/**
 * Implementación de herramientas del plugin ForOpenCode
 * Cada herramienta expone funcionalidad para listar, buscar, obtener, instalar y validar skills
 */

import * as fs from "fs/promises";
import * as path from "path";
import {
  SkillInfo,
  ListSkillsResult,
  GetSkillResult,
  SearchSkillsResult,
  CategoriesResult,
  InstallSkillResult,
  ValidateSkillResult,
  RefreshCacheResult,
  ExportCatalogResult,
  CATEGORIES,
} from "./types";
import {
  filterByCategory,
  searchSkills,
  getSkillContent,
  getInstallCommands,
  validateSkill,
  discoverAllSkills,
} from "./skills";
import { SkillCache } from "./cache";
import { loadConfig, expandPath } from "./config";
import { Logger } from "./logger";

export class ForOpenCodeTools {
  private logger: Logger;
  private config: ReturnType<typeof loadConfig>;
  private cache: SkillCache<SkillInfo[]>;
  private skillsCache: SkillInfo[] | null = null;

  constructor(logger: Logger) {
    this.logger = logger;
    this.config = loadConfig();
    this.cache = new SkillCache<SkillInfo[]>(this.config.cacheTTL);

    this.logger.info("ForOpenCode Tools inicializado", {
      sources: this.config.skillSources,
      cacheTTL: this.config.cacheTTL,
      logLevel: this.config.logLevel,
    });
  }

  // ========================================================================
  // Carga y caché de skills
  // ========================================================================

  private async loadSkillsFromDisk(): Promise<SkillInfo[]> {
    const cacheKey = "all_skills";

    const cached = this.cache.get(cacheKey);
    if (cached) {
      this.logger.debug(`Caché hit: ${cached.length} skills`);
      this.skillsCache = cached;
      return cached;
    }

    this.logger.debug("Caché miss, cargando skills desde disco...");
    const skills = await discoverAllSkills(this.config.skillSources, this.logger);
    this.cache.set(cacheKey, skills);
    this.skillsCache = skills;

    this.logger.info(`Skills cargadas: ${skills.length} total`);
    return skills;
  }

  invalidateCache(): void {
    this.cache.clear();
    this.skillsCache = null;
    this.logger.info("Caché invalidado");
  }

  // ========================================================================
  // Herramienta: list_skills
  // ========================================================================

  async listSkills(args: {
    category?: string;
    limit?: number;
  }): Promise<ListSkillsResult> {
    const skills = await this.loadSkillsFromDisk();

    let filtered = skills;

    if (args.category) {
      filtered = filterByCategory(filtered, args.category);
    }

    if (args.limit) {
      filtered = filtered.slice(0, args.limit);
    }

    return {
      total: filtered.length,
      category: args.category || null,
      skills: filtered.map((s) => {
        const catInfo = CATEGORIES[s.category] || CATEGORIES["comunidad"];
        return {
          id: s.id,
          name: s.name,
          description: s.description,
          version: s.version,
          category: s.category,
          category_label: catInfo.label,
          category_icon: catInfo.icon,
          files: s.files,
          source: s.source,
        };
      }),
    };
  }

  // ========================================================================
  // Herramienta: get_skill
  // ========================================================================

  async getSkill(id: string): Promise<GetSkillResult | null> {
    const skills = await this.loadSkillsFromDisk();

    const skill = await getSkillContent(skills, id);
    if (!skill) return null;

    const catInfo = CATEGORIES[skill.category] || CATEGORIES["comunidad"];

    return {
      id,
      frontmatter: skill.frontmatter,
      content: skill.body,
      files: skill.files,
      category: skill.category,
      category_info: catInfo,
      install_commands: getInstallCommands(id),
    };
  }

  // ========================================================================
  // Herramienta: search_skills
  // ========================================================================

  async searchSkills(args: {
    query: string;
    limit?: number;
  }): Promise<SearchSkillsResult> {
    const skills = await this.loadSkillsFromDisk();

    const results = await searchSkills(skills, args.query);
    const limited = args.limit ? results.slice(0, args.limit) : results;

    return {
      query: args.query,
      total: limited.length,
      skills: limited.map((s) => {
        const catInfo = CATEGORIES[s.category] || CATEGORIES["comunidad"];
        return {
          id: s.id,
          name: s.name,
          description: s.description,
          category: s.category,
          category_label: catInfo.label,
        };
      }),
    };
  }

  // ========================================================================
  // Herramienta: categories
  // ========================================================================

  async getCategories(): Promise<CategoriesResult> {
    const skills = await this.loadSkillsFromDisk();

    const counts: Record<string, number> = {};
    for (const skill of skills) {
      counts[skill.category] = (counts[skill.category] || 0) + 1;
    }

    const categories = Object.entries(CATEGORIES).map(([key, info]) => ({
      id: key,
      label: info.label,
      icon: info.icon,
      skill_count: counts[key] || 0,
    }));

    return {
      total_categories: categories.length,
      total_skills: skills.length,
      categories,
    };
  }

  // ========================================================================
  // Herramienta: install_skill
  // ========================================================================

  async installSkill(args: {
    skill_id: string;
    target?: "local" | "global";
  }): Promise<InstallSkillResult> {
    const skills = await this.loadSkillsFromDisk();

    const target = args.target || "local";
    const skill = skills.find((s) => s.id === args.skill_id);

    if (!skill) {
      return {
        skill_id: args.skill_id,
        target,
        success: false,
        message: `Skill "${args.skill_id}" no encontrada`,
      };
    }

    const sourceDir = skill.path;
    if (!sourceDir) {
      return {
        skill_id: args.skill_id,
        target,
        success: false,
        message: `No se pudo determinar la ruta de la skill "${args.skill_id}"`,
      };
    }

    let destDir: string;

    if (target === "global") {
      const home = process.env.HOME || process.env.USERPROFILE || "";
      if (!home) {
        return {
          skill_id: args.skill_id,
          target,
          success: false,
          message: "No se pudo determinar el directorio home del usuario",
        };
      }
      destDir = path.join(home, ".config", "opencode", "skills", args.skill_id);
    } else {
      destDir = path.join(process.cwd(), ".opencode", "skills", args.skill_id);
    }

    try {
      await fs.mkdir(path.dirname(destDir), { recursive: true });

      // Verificar si ya existe
      try {
        await fs.access(destDir);
        return {
          skill_id: args.skill_id,
          target,
          success: false,
          message: `La skill ya existe en ${destDir}`,
        };
      } catch {
        // No existe, continuar
      }

      await fs.cp(sourceDir, destDir, { recursive: true });

      this.logger.info(`Skill instalada: ${args.skill_id} -> ${destDir}`);

      return {
        skill_id: args.skill_id,
        target,
        success: true,
        message: `Skill "${args.skill_id}" instalada en ${destDir}`,
      };
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      this.logger.error(`Error instalando skill ${args.skill_id}: ${errorMsg}`);

      return {
        skill_id: args.skill_id,
        target,
        success: false,
        message: `Error al instalar: ${errorMsg}`,
      };
    }
  }

  // ========================================================================
  // Herramienta: validate_skill
  // ========================================================================

  async validateSkill(args: {
    skill_id: string;
  }): Promise<ValidateSkillResult> {
    const skills = await this.loadSkillsFromDisk();

    const skill = skills.find((s) => s.id === args.skill_id);

    if (!skill || !skill.path) {
      return {
        skill_id: args.skill_id,
        valid: false,
        errors: [`Skill "${args.skill_id}" no encontrada`],
        warnings: [],
      };
    }

    const validation = await validateSkill(skill.path, args.skill_id);
    return {
      skill_id: args.skill_id,
      ...validation,
    };
  }

  // ========================================================================
  // Herramienta: refresh_cache
  // ========================================================================

  async refreshCache(): Promise<RefreshCacheResult> {
    this.invalidateCache();
    await this.loadSkillsFromDisk();

    const sources = this.config.skillSources.map((s) => expandPath(s));

    return {
      refreshed: true,
      skills_count: this.skillsCache ? this.skillsCache.length : 0,
      sources,
    };
  }

  // ========================================================================
  // Herramienta: export_catalog
  // ========================================================================

  async exportCatalog(args: {
    output_path?: string;
  }): Promise<ExportCatalogResult> {
    const skills = await this.loadSkillsFromDisk();

    const outputPath = args.output_path || path.join(process.cwd(), "index.json");

    const catalog = {
      skills: skills.map((s) => ({
        name: s.id,
        version: s.version,
        files: s.files,
      })),
    };

    try {
      await fs.mkdir(path.dirname(outputPath), { recursive: true });
      await fs.writeFile(outputPath, JSON.stringify(catalog, null, 2), "utf-8");

      this.logger.info(`Catálogo exportado: ${outputPath} (${catalog.skills.length} skills)`);

      return {
        catalog_path: outputPath,
        skills_count: catalog.skills.length,
        success: true,
      };
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      this.logger.error(`Error exportando catálogo: ${errorMsg}`);

      return {
        catalog_path: outputPath,
        skills_count: 0,
        success: false,
      };
    }
  }

  // ========================================================================
  // Getter para acceso directo a skills
  // ========================================================================

  getAllSkills(): SkillInfo[] {
    return this.skillsCache ?? [];
  }

  getConfig() {
    return this.config;
  }
}
