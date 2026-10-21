/**
 * ForOpenCode Skills Plugin — OpenCode V2
 * ========================================
 * Plugin profesional que expone las 136 skills de ForOpenCode como herramientas
 * nativas dentro de OpenCode, sin servidor MCP externo.
 *
 * Arquitectura:
 * - types.ts: Interfaces y constantes
 * - config.ts: Carga de configuración (env vars + defaults)
 * - logger.ts: Sistema de logging con niveles
 * - cache.ts: Caché en memoria con TTL
 * - parser.ts: Parser de frontmatter YAML
 * - skills.ts: Descubrimiento y lectura de skills (multi-origen)
 * - tools.ts: Implementación de herramientas
 * - index.ts: Registro del plugin en OpenCode
 */

import { ForOpenCodeTools } from "./tools";
import { Logger } from "./logger";
import { loadConfig } from "./config";
import type { PluginContext } from "./types";

/**
 * Instancia global de las herramientas (se crea una vez en setup)
 */
let toolsInstance: ForOpenCodeTools | null = null;

/**
 * Registro del plugin V2
 * OpenCode llama a setup(ctx) al cargar el plugin
 */
export default {
  id: "foropencode",
  name: "ForOpenCode Skills",
  version: "2.0.0",
  description:
    "Catálogo profesional de 136 skills para OpenCode V2 (programación, IA, frontend, backend, seguridad, DevOps y más)",

  setup(ctx: PluginContext) {
    // --- Inicializar logger y configuración ---
    const config = loadConfig();
    const logger = new Logger(config.logLevel, "[foropencode-plugin]");

    logger.info("Iniciando plugin ForOpenCode Skills v2.0.0", {
      sources: config.skillSources,
      cacheTTL: config.cacheTTL,
    });

    // --- Crear instancia de herramientas ---
    toolsInstance = new ForOpenCodeTools(logger);

    // ========================================================================
    // Herramienta: foropencode_list_skills
    // ========================================================================
    ctx.registerTool?.({
      name: "foropencode_list_skills",
      description:
        "Lista las skills disponibles en ForOpenCode para OpenCode V2. Filtra opcionalmente por categoría y límite.",
      parameters: {
        type: "object",
        properties: {
          category: {
            type: "string",
            description:
              "Categoría: comunidad, programacion, ia, frontend, backend, base-datos, seguridad, devops, datos, movil, documentacion, utilidades",
          },
          limit: {
            type: "number",
            description: "Número máximo de skills a devolver",
            minimum: 1,
          },
        },
        additionalProperties: false,
      },
      execute: async (args: any) => {
        logger.debug("Ejecutando foropencode_list_skills", args);

        const result = await toolsInstance!.listSkills({
          category: args.category,
          limit: args.limit,
        });

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      },
    });

    // ========================================================================
    // Herramienta: foropencode_get_skill
    // ========================================================================
    ctx.registerTool?.({
      name: "foropencode_get_skill",
      description:
        "Obtiene el contenido completo de una skill específica de ForOpenCode, incluyendo instrucciones, archivos y comandos de instalación.",
      parameters: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description:
              'ID de la skill (ej. "code-review", "pony-tail", "git-release")',
          },
        },
        required: ["id"],
        additionalProperties: false,
      },
      execute: async (args: any) => {
        logger.debug("Ejecutando foropencode_get_skill", { id: args.id });

        const result = await toolsInstance!.getSkill(args.id);

        if (!result) {
          return {
            content: [
              {
                type: "text",
                text: JSON.stringify(
                  {
                    error: `Skill "${args.id}" no encontrada`,
                    suggestion: "Usa foropencode_list_skills para ver las disponibles",
                  },
                  null,
                  2
                ),
              },
            ],
            isError: true,
          };
        }

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      },
    });

    // ========================================================================
    // Herramienta: foropencode_search_skills
    // ========================================================================
    ctx.registerTool?.({
      name: "foropencode_search_skills",
      description:
        "Busca skills por texto en nombre, descripción o categoría.",
      parameters: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: "Texto a buscar",
            minLength: 1,
          },
          limit: {
            type: "number",
            description: "Número máximo de resultados",
            minimum: 1,
          },
        },
        required: ["query"],
        additionalProperties: false,
      },
      execute: async (args: any) => {
        logger.debug("Ejecutando foropencode_search_skills", args);

        const result = await toolsInstance!.searchSkills({
          query: args.query,
          limit: args.limit,
        });

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      },
    });

    // ========================================================================
    // Herramienta: foropencode_categories
    // ========================================================================
    ctx.registerTool?.({
      name: "foropencode_categories",
      description:
        "Lista todas las categorías disponibles en ForOpenCode con el conteo de skills por categoría.",
      parameters: {
        type: "object",
        properties: {},
        additionalProperties: false,
      },
      execute: async () => {
        logger.debug("Ejecutando foropencode_categories");

        const result = await toolsInstance!.getCategories();

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      },
    });

    // ========================================================================
    // Herramienta: foropencode_install_skill
    // ========================================================================
    ctx.registerTool?.({
      name: "foropencode_install_skill",
      description:
        "Instala una skill de ForOpenCode en el proyecto actual (.opencode/skills/) o globalmente (~/.config/opencode/skills/).",
      parameters: {
        type: "object",
        properties: {
          skill_id: {
            type: "string",
            description: "ID de la skill a instalar",
          },
          target: {
            type: "string",
            description: 'Destino: "local" (proyecto) o "global" (usuario)',
            enum: ["local", "global"],
          },
        },
        required: ["skill_id"],
        additionalProperties: false,
      },
      execute: async (args: any) => {
        logger.info("Ejecutando foropencode_install_skill", args);

        const result = await toolsInstance!.installSkill({
          skill_id: args.skill_id,
          target: args.target,
        });

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
          isError: !result.success,
        };
      },
    });

    // ========================================================================
    // Herramienta: foropencode_validate_skill
    // ========================================================================
    ctx.registerTool?.({
      name: "foropencode_validate_skill",
      description:
        "Valida que un archivo SKILL.md tenga frontmatter correcto y descripción.",
      parameters: {
        type: "object",
        properties: {
          skill_id: {
            type: "string",
            description: "ID de la skill a validar",
          },
        },
        required: ["skill_id"],
        additionalProperties: false,
      },
      execute: async (args: any) => {
        logger.debug("Ejecutando foropencode_validate_skill", {
          skill_id: args.skill_id,
        });

        const result = await toolsInstance!.validateSkill({
          skill_id: args.skill_id,
        });

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      },
    });

    // ========================================================================
    // Herramienta: foropencode_refresh_cache
    // ========================================================================
    ctx.registerTool?.({
      name: "foropencode_refresh_cache",
      description:
        "Invalida el caché de skills y las vuelve a cargar desde disco.",
      parameters: {
        type: "object",
        properties: {},
        additionalProperties: false,
      },
      execute: async () => {
        logger.info("Ejecutando foropencode_refresh_cache");

        const result = await toolsInstance!.refreshCache();

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      },
    });

    // ========================================================================
    // Herramienta: foropencode_export_catalog
    // ========================================================================
    ctx.registerTool?.({
      name: "foropencode_export_catalog",
      description:
        "Genera un index.json válido para catálogo HTTP a partir de las skills locales descubiertas.",
      parameters: {
        type: "object",
        properties: {
          output_path: {
            type: "string",
            description: "Ruta de salida del archivo index.json",
          },
        },
        additionalProperties: false,
      },
      execute: async (args: any) => {
        logger.info("Ejecutando foropencode_export_catalog", args);

        const result = await toolsInstance!.exportCatalog({
          output_path: args.output_path,
        });

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
          isError: !result.success,
        };
      },
    });

    logger.info("Plugin ForOpenCode Skills cargado correctamente", {
      tools_registered: 8,
      skills_available: toolsInstance.getAllSkills().length,
    });
  },
} as const;

/**
 * Exportación nombrada para uso programático
 */
export { ForOpenCodeTools, Logger, loadConfig };
export type { DEFAULT_CONFIG } from "./types";
export type { PluginContext };
