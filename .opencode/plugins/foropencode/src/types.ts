/**
 * Tipos TypeScript para el plugin ForOpenCode Skills (OpenCode V2)
 */

export interface SkillFrontmatter {
  name: string;
  description: string;
  metadata?: Record<string, unknown>;
}

export interface SkillInfo {
  id: string;
  name: string;
  description: string;
  version: string;
  files: string[];
  category: string;
  source: "local" | "global" | "custom" | "http";
  path?: string;
}

export interface CatalogEntry {
  name: string;
  version: string;
  files: string[];
}

export interface Catalog {
  skills: CatalogEntry[];
}

export interface CategoryInfo {
  id: string;
  label: string;
  icon: string;
}

export interface PluginConfig {
  skillSources: string[];          // Rutas a directorios de skills
  cacheTTL: number;                // TTL en milisegundos
  enableHttpCatalog: boolean;      // Si leer catálogo HTTP
  httpCatalogUrls: string[];       // URLs de catálogos HTTP
  logLevel: "debug" | "info" | "warn" | "error";
}

export interface ListSkillsResult {
  total: number;
  category: string | null;
  skills: Array<{
    id: string;
    name: string;
    description: string;
    version: string;
    category: string;
    category_label: string;
    category_icon: string;
    files: string[];
    source: string;
  }>;
}

export interface GetSkillResult {
  id: string;
  frontmatter: SkillFrontmatter;
  content: string;
  files: string[];
  category: string;
  category_info: CategoryInfo;
  install_commands: string[];
}

export interface SearchSkillsResult {
  query: string;
  total: number;
  skills: Array<{
    id: string;
    name: string;
    description: string;
    category: string;
    category_label: string;
  }>;
}

export interface CategoriesResult {
  total_categories: number;
  total_skills: number;
  categories: Array<{
    id: string;
    label: string;
    icon: string;
    skill_count: number;
  }>;
}

export interface InstallSkillResult {
  skill_id: string;
  target: string;
  success: boolean;
  message: string;
}

export interface ValidateSkillResult {
  skill_id: string;
  valid: boolean;
  errors: string[];
  warnings: string[];
}

export interface RefreshCacheResult {
  refreshed: boolean;
  skills_count: number;
  sources: string[];
}

export interface ExportCatalogResult {
  catalog_path: string;
  skills_count: number;
  success: boolean;
}

export const DEFAULT_CONFIG: PluginConfig = {
  skillSources: [".opencode/skills", "~/.config/opencode/skills"],
  cacheTTL: 300000, // 5 minutos
  enableHttpCatalog: false,
  httpCatalogUrls: [],
  logLevel: "info",
};

export const CATEGORIES: Record<string, CategoryInfo> = {
  comunidad: { id: "comunidad", label: "Comunidad", icon: "🌟" },
  programacion: { id: "programacion", label: "Programación", icon: "💻" },
  ia: { id: "ia", label: "IA / ML / LLM", icon: "🤖" },
  frontend: { id: "frontend", label: "Frontend / Web", icon: "🎨" },
  backend: { id: "backend", label: "Backend / APIs", icon: "⚙️" },
  "base-datos": { id: "base-datos", label: "Bases de Datos", icon: "🗄️" },
  seguridad: { id: "seguridad", label: "Seguridad", icon: "🔐" },
  devops: { id: "devops", label: "DevOps / Cloud", icon: "☁️" },
  datos: { id: "datos", label: "Datos / Analítica", icon: "📊" },
  movil: { id: "movil", label: "Móvil", icon: "📱" },
  documentacion: { id: "documentacion", label: "Documentación", icon: "📚" },
  utilidades: { id: "utilidades", label: "Utilidades", icon: "🛠️" },
};

export const SKILL_CATEGORIES: Record<string, string> = {
  pony_tail: "comunidad",
  better_ui: "comunidad",
  code_review: "comunidad",
  git_release: "comunidad",
  commit_msg: "comunidad",
  api_docs: "comunidad",
  debug: "programacion",
  refactor: "programacion",
  test_writer: "programacion",
  security_review: "programacion",
  boilerplate: "programacion",
  snippets: "programacion",
  lint_fix: "programacion",
  performance: "programacion",
  dependency_audit: "programacion",
  migration: "programacion",
  code_explain: "programacion",
  type_check: "programacion",
  error_handling: "programacion",
  dry_principle: "programacion",
  solid_principles: "programacion",
  design_patterns: "programacion",
  clean_code: "programacion",
  functional_programming: "programacion",
  prompt_engineer: "ia",
  llm_eval: "ia",
  rag_setup: "ia",
  fine_tune: "ia",
  agent_design: "ia",
  ml_pipeline: "ia",
  model_card: "ia",
  ai_safety: "ia",
  token_count: "ia",
  embedding: "ia",
  vector_db: "ia",
  langchain: "ia",
  autogen: "ia",
  crew_ai: "ia",
  semantic_kernel: "ia",
  react_component: "frontend",
  vue_component: "frontend",
  html_css: "frontend",
  accessibility: "frontend",
  responsive: "frontend",
  frontend_test: "frontend",
  pwa: "frontend",
  web_performance: "frontend",
  seo: "frontend",
  tailwind: "frontend",
  svelte_component: "frontend",
  angular_component: "frontend",
  nextjs: "frontend",
  nuxt: "frontend",
  typescript_frontend: "frontend",
  rest_api: "backend",
  graphql: "backend",
  websocket: "backend",
  auth: "backend",
  rate_limiting: "backend",
  webhook: "backend",
  api_gateway: "backend",
  rpc: "backend",
  soap: "backend",
  openapi_spec: "backend",
  backend_test: "backend",
  microservices: "backend",
  sql_schema: "base-datos",
  sql_query: "base-datos",
  migration_db: "base-datos",
  nosql: "base-datos",
  redis: "base-datos",
  db_backup: "base-datos",
  postgres: "base-datos",
  mongodb: "base-datos",
  mysql: "base-datos",
  sqlite: "base-datos",
  prisma: "base-datos",
  typeorm: "base-datos",
  security_scan: "seguridad",
  owasp: "seguridad",
  secrets: "seguridad",
  encryption: "seguridad",
  jwt: "seguridad",
  ssl_tls: "seguridad",
  sast: "seguridad",
  dast: "seguridad",
  penetration_test: "seguridad",
  compliance: "seguridad",
  docker: "devops",
  kubernetes: "devops",
  terraform: "devops",
  ci_cd: "devops",
  github_actions: "devops",
  ansible: "devops",
  monitoring: "devops",
  logging: "devops",
  aws: "devops",
  azure: "devops",
  gcp: "devops",
  k8s_manifest: "devops",
  helm: "devops",
  packer: "devops",
  vagrant: "devops",
  etl: "datos",
  data_cleaning: "datos",
  data_viz: "datos",
  data_warehouse: "datos",
  analytics: "datos",
  bigquery: "datos",
  snowflake: "datos",
  spark: "datos",
  hadoop: "datos",
  kafka: "datos",
  react_native: "movil",
  flutter: "movil",
  swift_ios: "movil",
  kotlin_android: "movil",
  xamarin: "movil",
  ionic: "movil",
  capacitor: "movil",
  readme: "documentacion",
  changelog: "documentacion",
  tech_docs: "documentacion",
  api_spec: "documentacion",
  wiki: "documentacion",
  docstring: "documentacion",
  cli_tool: "utilidades",
  scripting: "utilidades",
  automation: "utilidades",
  cron: "utilidades",
  backup: "utilidades",
  sync: "utilidades",
  deploy: "utilidades",
  rollback: "utilidades",
  health_check: "utilidades",
  status_page: "utilidades",
};

export function getCategory(id: string): string {
  const key = id.replace(/-/g, "_");
  return SKILL_CATEGORIES[key] || "comunidad";
}

export function getCategoryInfo(category: string): CategoryInfo {
  return CATEGORIES[category] || CATEGORIES["comunidad"];
}

/**
 * Contexto de plugin OpenCode V2 (proporcionado por el host)
 */
export interface PluginContext {
  registerTool?: (definition: {
    name: string;
    description: string;
    parameters: Record<string, unknown>;
    execute: (args: any) => any;
  }) => void;
  registerHook?: (hookName: string, handler: any) => void;
  registerTransform?: (transformName: string, handler: any) => void;
  [key: string]: unknown;
}
