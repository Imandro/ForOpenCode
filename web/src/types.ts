export interface Skill {
  name: string;
  version: string;
  files: string[];
}

export interface SkillWithContent extends Skill {
  content: string;
}

export type Category =
  | "comunidad"
  | "programacion"
  | "ia"
  | "frontend"
  | "backend"
  | "base-datos"
  | "seguridad"
  | "devops"
  | "datos"
  | "movil"
  | "documentacion"
  | "utilidades";

export interface CategoryInfo {
  id: Category;
  label: string;
  icon: string;
  color: string;
}

export const CATEGORIES: Record<Category, CategoryInfo> = {
  comunidad: {
    id: "comunidad",
    label: "Comunidad",
    icon: "🌟",
    color: "brand",
  },
  programacion: {
    id: "programacion",
    label: "Programación",
    icon: "💻",
    color: "brand",
  },
  ia: {
    id: "ia",
    label: "IA / ML / LLM",
    icon: "🤖",
    color: "brand",
  },
  frontend: {
    id: "frontend",
    label: "Frontend / Web",
    icon: "🎨",
    color: "brand",
  },
  backend: {
    id: "backend",
    label: "Backend / APIs",
    icon: "⚙️",
    color: "brand",
  },
  "base-datos": {
    id: "base-datos",
    label: "Bases de Datos",
    icon: "🗄️",
    color: "brand",
  },
  seguridad: {
    id: "seguridad",
    label: "Seguridad",
    icon: "🔐",
    color: "brand",
  },
  devops: {
    id: "devops",
    label: "DevOps / Cloud",
    icon: "☁️",
    color: "brand",
  },
  datos: {
    id: "datos",
    label: "Datos / Analítica",
    icon: "📊",
    color: "brand",
  },
  movil: {
    id: "movil",
    label: "Móvil",
    icon: "📱",
    color: "brand",
  },
  documentacion: {
    id: "documentacion",
    label: "Documentación",
    icon: "📚",
    color: "brand",
  },
  utilidades: {
    id: "utilidades",
    label: "Utilidades",
    icon: "🛠️",
    color: "brand",
  },
};

export const SKILL_CATEGORIES: Record<string, Category> = {
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
