/**
 * Gestión de configuración del plugin ForOpenCode
 * Lee configuración desde variables de entorno y valores por defecto
 */

import * as path from "path";
import { PluginConfig, DEFAULT_CONFIG } from "./types";

export function loadConfig(): PluginConfig {
  const config: PluginConfig = { ...DEFAULT_CONFIG };

  // Leer rutas de skills desde variable de entorno
  const envSources = process.env.FOROPENCODE_SKILL_SOURCES;
  if (envSources) {
    config.skillSources = envSources.split(",").map((s) => s.trim()).filter(Boolean);
  }

  // Leer TTL desde variable de entorno
  const envTtl = process.env.FOROPENCODE_CACHE_TTL;
  if (envTtl) {
    const parsed = parseInt(envTtl, 10);
    if (!isNaN(parsed) && parsed > 0) {
      config.cacheTTL = parsed;
    }
  }

  // Leer nivel de log
  const envLogLevel = process.env.FOROPENCODE_LOG_LEVEL;
  if (envLogLevel && ["debug", "info", "warn", "error"].includes(envLogLevel)) {
    config.logLevel = envLogLevel as PluginConfig["logLevel"];
  }

  // Leer URLs de catálogos HTTP
  const envHttpUrls = process.env.FOROPENCODE_HTTP_CATALOG_URLS;
  if (envHttpUrls) {
    config.enableHttpCatalog = true;
    config.httpCatalogUrls = envHttpUrls.split(",").map((s) => s.trim()).filter(Boolean);
  }

  return config;
}

export function expandPath(pathStr: string): string {
  // Expandir ~ al directorio home
  if (pathStr.startsWith("~")) {
    const home = process.env.HOME || process.env.USERPROFILE || "";
    if (home) {
      return home + pathStr.slice(1);
    }
  }

  // Resolver rutas relativas al cwd
  if (!path.isAbsolute(pathStr)) {
    return path.resolve(process.cwd(), pathStr);
  }

  return pathStr;
}

export { DEFAULT_CONFIG };
