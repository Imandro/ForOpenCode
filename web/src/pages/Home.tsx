import { useEffect, useState, useMemo } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SkillCard from "../components/SkillCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import { Skill, CATEGORIES, SKILL_CATEGORIES, Category } from "../types";

interface SkillWithMeta extends Skill {
  description: string;
  category: Category;
}

// Mapeo de skill-id a descripción (resumida de los archivos SKILL.md)
const SKILL_DESCRIPTIONS: Record<string, string> = {
  pony_tail: "Estilo de código limpio y ordenado: formato, nombres y presentación",
  better_ui: "Mejora de interfaces de usuario: usabilidad, diseño visual y accesibilidad",
  code_review: "Revisión de código: seguridad, estilo, pruebas y documentación",
  git_release: "Prepara release notes, version bumps y changelogs",
  commit_msg: "Mensajes de commit siguiendo Convencional Commits",
  api_docs: "Genera documentación de API desde código fuente",
  debug: "Depuración y análisis de errores y stack traces",
  refactor: "Refactorización de código sin cambiar el comportamiento",
  test_writer: "Escritura de pruebas unitarias e integración",
  security_review: "Revisión de seguridad de código fuente",
  boilerplate: "Generación de código base y esqueletos de proyecto",
  snippets: "Snippets de código reutilizables por lenguaje",
  lint_fix: "Corrección automática de problemas de lint",
  performance: "Optimización de rendimiento CPU, memoria y consultas",
  dependency_audit: "Auditoría de dependencias: vulnerabilidades y licencias",
  migration: "Migración de código entre versiones y frameworks",
  code_explain: "Explicación de código complejo paso a paso",
  type_check: "Verificación de tipos y tipado estático",
  error_handling: "Manejo de errores y excepciones",
  dry_principle: "Principio DRY: elimina duplicación de código",
  solid_principles: "Principios SOLID de diseño orientado a objetos",
  design_patterns: "Patrones de diseño de software",
  clean_code: "Código limpio y mantenible",
  functional_programming: "Programación funcional: inmutabilidad y composición",
  prompt_engineer: "Diseño y optimización de prompts para LLMs",
  llm_eval: "Evaluación y benchmarking de modelos LLM",
  rag_setup: "Configuración de pipelines RAG",
  fine_tune: "Fine-tuning de modelos de lenguaje",
  agent_design: "Diseño de agentes autónomos con herramientas",
  ml_pipeline: "Pipelines de entrenamiento e inferencia ML",
  model_card: "Tarjetas de modelo y documentación IA",
  ai_safety: "Seguridad y alineación de IA",
  token_count: "Conteo y optimización de tokens de contexto",
  embedding: "Generación y uso de embeddings vectores",
  vector_db: "Bases de datos vectoriales",
  langchain: "Desarrollo con LangChain",
  autogen: "Agentes conversacionales con AutoGen",
  crew_ai: "Equipos de agentes colaborativos con CrewAI",
  semantic_kernel: "Desarrollo con Semantic Kernel",
  react_component: "Componentes React funcionales y hooks",
  vue_component: "Componentes Vue 3 Composition API",
  html_css: "Maquetación semántica HTML y CSS",
  accessibility: "Accesibilidad web WCAG y a11y",
  responsive: "Diseño responsive y mobile-first",
  frontend_test: "Pruebas frontend unitarias y E2E",
  pwa: "Progressive Web Apps y service workers",
  web_performance: "Rendimiento web Core Web Vitals",
  seo: "Optimización SEO técnica y de contenidos",
  tailwind: "Estilizado con Tailwind CSS",
  svelte_component: "Componentes Svelte con reactividad",
  angular_component: "Componentes Angular con DI",
  nextjs: "Desarrollo con Next.js",
  nuxt: "Desarrollo con Nuxt.js",
  typescript_frontend: "TypeScript en frontend",
  rest_api: "Diseño e implementación de APIs REST",
  graphql: "Schemas y resolvers GraphQL",
  websocket: "Comunicación en tiempo real con WebSockets",
  auth: "Autenticación OAuth2, JWT y sesiones",
  rate_limiting: "Limitación de tasa y protección contra abusos",
  webhook: "Recepción y firma de webhooks",
  api_gateway: "API Gateway y enrutamiento",
  rpc: "Llamadas a procedimiento remoto gRPC",
  soap: "Servicios SOAP y WSDL",
  openapi_spec: "Especificaciones OpenAPI/Swagger",
  backend_test: "Pruebas de backend e integración",
  microservices: "Arquitectura de microservicios",
  sql_schema: "Diseño de esquemas SQL relacionales",
  sql_query: "Consultas SQL optimizadas",
  migration_db: "Migraciones de base de datos",
  nosql: "Modelado en bases de datos NoSQL",
  redis: "Caché y estructuras con Redis",
  db_backup: "Copias de seguridad de bases de datos",
  postgres: "PostgreSQL administración y optimización",
  mongodb: "MongoDB documentos y consultas",
  mysql: "MySQL/MariaDB administración",
  sqlite: "SQLite bases de datos embebidas",
  prisma: "ORM Prisma schema y consultas",
  typeorm: "ORM TypeORM entidades y relaciones",
  security_scan: "Escaneo estático SAST de vulnerabilidades",
  owasp: "Revisión contra OWASP Top 10",
  secrets: "Detección de secretos hardcodeados",
  encryption: "Cifrado de datos en reposo y tránsito",
  jwt: "Emisión y validación de tokens JWT",
  ssl_tls: "Certificados SSL/TLS y HTTPS",
  sast: "Análisis estático de seguridad",
  dast: "Análisis dinámico de seguridad DAST",
  penetration_test: "Pruebas de penetración y evaluación",
  compliance: "Cumplimiento normativo GDPR, HIPAA, PCI-DSS",
  docker: "Imágenes Docker y Docker Compose",
  kubernetes: "Manifiestos y despliegues en Kubernetes",
  terraform: "Infraestructura como código con Terraform",
  ci_cd: "Pipelines CI/CD build, test y deploy",
  github_actions: "Workflows de GitHub Actions",
  ansible: "Automatización con Ansible playbooks",
  monitoring: "Monitoreo y observabilidad",
  logging: "Logging centralizado y trazabilidad",
  aws: "Servicios Amazon Web Services",
  azure: "Servicios Microsoft Azure",
  gcp: "Servicios Google Cloud Platform",
  k8s_manifest: "Manifiestos YAML de Kubernetes",
  helm: "Charts de Helm para Kubernetes",
  packer: "Imágenes de máquina con Packer",
  vagrant: "Entornos de desarrollo con Vagrant",
  etl: "Pipelines ETL extraer, transformar, cargar",
  data_cleaning: "Limpieza y normalización de datos",
  data_viz: "Visualización de datos y dashboards",
  data_warehouse: "Modelado de data warehouse",
  analytics: "Analítica de datos y métricas de negocio",
  bigquery: "Google BigQuery consultas SQL",
  snowflake: "Snowflake almacén de datos",
  spark: "Apache Spark procesamiento distribuido",
  hadoop: "Apache Hadoop HDFS y MapReduce",
  kafka: "Apache Kafka streaming de datos",
  react_native: "Apps móviles con React Native",
  flutter: "Apps móviles con Flutter/Dart",
  swift_ios: "Desarrollo iOS nativo con Swift",
  kotlin_android: "Desarrollo Android nativo con Kotlin",
  xamarin: "Desarrollo multiplataforma con Xamarin",
  ionic: "Apps híbridas con Ionic",
  capacitor: "Apps Capacitor APIs nativas",
  readme: "Escritura de README de proyectos",
  changelog: "Redacción de changelogs Keep a Changelog",
  tech_docs: "Documentación técnica para desarrolladores",
  api_spec: "Especificaciones de API OpenAPI",
  wiki: "Documentación de wiki",
  docstring: "Docstrings de código embebido",
  cli_tool: "Herramientas de línea de comandos",
  scripting: "Scripts de automatización bash y PowerShell",
  automation: "Automatización de tareas y flujos",
  cron: "Tareas programadas con expresiones cron",
  backup: "Copias de seguridad y restauración",
  sync: "Sincronización de datos y replicación",
  deploy: "Despliegue de aplicaciones y entornos",
  rollback: "Reversión de despliegues",
  health_check: "Health checks de servicios",
  status_page: "Páginas de estado e incidentes",
};

const SKILLS_LIST: Skill[] = [
  { name: "pony-tail", version: "1", files: ["SKILL.md"] },
  { name: "better-ui", version: "1", files: ["SKILL.md"] },
  { name: "code-review", version: "1", files: ["SKILL.md", "scripts/review-checklist.md"] },
  { name: "git-release", version: "1", files: ["SKILL.md", "references/release-policy.md", "scripts/changelog.ts"] },
  { name: "commit-msg", version: "1", files: ["SKILL.md"] },
  { name: "api-docs", version: "1", files: ["SKILL.md"] },
  { name: "debug", version: "1", files: ["SKILL.md"] },
  { name: "refactor", version: "1", files: ["SKILL.md"] },
  { name: "test-writer", version: "1", files: ["SKILL.md"] },
  { name: "security-review", version: "1", files: ["SKILL.md"] },
  { name: "boilerplate", version: "1", files: ["SKILL.md"] },
  { name: "snippets", version: "1", files: ["SKILL.md"] },
  { name: "lint-fix", version: "1", files: ["SKILL.md"] },
  { name: "performance", version: "1", files: ["SKILL.md"] },
  { name: "dependency-audit", version: "1", files: ["SKILL.md"] },
  { name: "migration", version: "1", files: ["SKILL.md"] },
  { name: "code-explain", version: "1", files: ["SKILL.md"] },
  { name: "type-check", version: "1", files: ["SKILL.md"] },
  { name: "error-handling", version: "1", files: ["SKILL.md"] },
  { name: "dry-principle", version: "1", files: ["SKILL.md"] },
  { name: "solid-principles", version: "1", files: ["SKILL.md"] },
  { name: "design-patterns", version: "1", files: ["SKILL.md"] },
  { name: "clean-code", version: "1", files: ["SKILL.md"] },
  { name: "functional-programming", version: "1", files: ["SKILL.md"] },
  { name: "prompt-engineer", version: "1", files: ["SKILL.md"] },
  { name: "llm-eval", version: "1", files: ["SKILL.md"] },
  { name: "rag-setup", version: "1", files: ["SKILL.md"] },
  { name: "fine-tune", version: "1", files: ["SKILL.md"] },
  { name: "agent-design", version: "1", files: ["SKILL.md"] },
  { name: "ml-pipeline", version: "1", files: ["SKILL.md"] },
  { name: "model-card", version: "1", files: ["SKILL.md"] },
  { name: "ai-safety", version: "1", files: ["SKILL.md"] },
  { name: "token-count", version: "1", files: ["SKILL.md"] },
  { name: "embedding", version: "1", files: ["SKILL.md"] },
  { name: "vector-db", version: "1", files: ["SKILL.md"] },
  { name: "langchain", version: "1", files: ["SKILL.md"] },
  { name: "autogen", version: "1", files: ["SKILL.md"] },
  { name: "crew-ai", version: "1", files: ["SKILL.md"] },
  { name: "semantic-kernel", version: "1", files: ["SKILL.md"] },
  { name: "react-component", version: "1", files: ["SKILL.md"] },
  { name: "vue-component", version: "1", files: ["SKILL.md"] },
  { name: "html-css", version: "1", files: ["SKILL.md"] },
  { name: "accessibility", version: "1", files: ["SKILL.md"] },
  { name: "responsive", version: "1", files: ["SKILL.md"] },
  { name: "frontend-test", version: "1", files: ["SKILL.md"] },
  { name: "pwa", version: "1", files: ["SKILL.md"] },
  { name: "web-performance", version: "1", files: ["SKILL.md"] },
  { name: "seo", version: "1", files: ["SKILL.md"] },
  { name: "tailwind", version: "1", files: ["SKILL.md"] },
  { name: "svelte-component", version: "1", files: ["SKILL.md"] },
  { name: "angular-component", version: "1", files: ["SKILL.md"] },
  { name: "nextjs", version: "1", files: ["SKILL.md"] },
  { name: "nuxt", version: "1", files: ["SKILL.md"] },
  { name: "typescript-frontend", version: "1", files: ["SKILL.md"] },
  { name: "rest-api", version: "1", files: ["SKILL.md"] },
  { name: "graphql", version: "1", files: ["SKILL.md"] },
  { name: "websocket", version: "1", files: ["SKILL.md"] },
  { name: "auth", version: "1", files: ["SKILL.md"] },
  { name: "rate-limiting", version: "1", files: ["SKILL.md"] },
  { name: "webhook", version: "1", files: ["SKILL.md"] },
  { name: "api-gateway", version: "1", files: ["SKILL.md"] },
  { name: "rpc", version: "1", files: ["SKILL.md"] },
  { name: "soap", version: "1", files: ["SKILL.md"] },
  { name: "openapi-spec", version: "1", files: ["SKILL.md"] },
  { name: "backend-test", version: "1", files: ["SKILL.md"] },
  { name: "microservices", version: "1", files: ["SKILL.md"] },
  { name: "sql-schema", version: "1", files: ["SKILL.md"] },
  { name: "sql-query", version: "1", files: ["SKILL.md"] },
  { name: "migration-db", version: "1", files: ["SKILL.md"] },
  { name: "nosql", version: "1", files: ["SKILL.md"] },
  { name: "redis", version: "1", files: ["SKILL.md"] },
  { name: "db-backup", version: "1", files: ["SKILL.md"] },
  { name: "postgres", version: "1", files: ["SKILL.md"] },
  { name: "mongodb", version: "1", files: ["SKILL.md"] },
  { name: "mysql", version: "1", files: ["SKILL.md"] },
  { name: "sqlite", version: "1", files: ["SKILL.md"] },
  { name: "prisma", version: "1", files: ["SKILL.md"] },
  { name: "typeorm", version: "1", files: ["SKILL.md"] },
  { name: "security-scan", version: "1", files: ["SKILL.md"] },
  { name: "owasp", version: "1", files: ["SKILL.md"] },
  { name: "secrets", version: "1", files: ["SKILL.md"] },
  { name: "encryption", version: "1", files: ["SKILL.md"] },
  { name: "jwt", version: "1", files: ["SKILL.md"] },
  { name: "ssl-tls", version: "1", files: ["SKILL.md"] },
  { name: "sast", version: "1", files: ["SKILL.md"] },
  { name: "dast", version: "1", files: ["SKILL.md"] },
  { name: "penetration-test", version: "1", files: ["SKILL.md"] },
  { name: "compliance", version: "1", files: ["SKILL.md"] },
  { name: "docker", version: "1", files: ["SKILL.md"] },
  { name: "kubernetes", version: "1", files: ["SKILL.md"] },
  { name: "terraform", version: "1", files: ["SKILL.md"] },
  { name: "ci-cd", version: "1", files: ["SKILL.md"] },
  { name: "github-actions", version: "1", files: ["SKILL.md"] },
  { name: "ansible", version: "1", files: ["SKILL.md"] },
  { name: "monitoring", version: "1", files: ["SKILL.md"] },
  { name: "logging", version: "1", files: ["SKILL.md"] },
  { name: "aws", version: "1", files: ["SKILL.md"] },
  { name: "azure", version: "1", files: ["SKILL.md"] },
  { name: "gcp", version: "1", files: ["SKILL.md"] },
  { name: "k8s-manifest", version: "1", files: ["SKILL.md"] },
  { name: "helm", version: "1", files: ["SKILL.md"] },
  { name: "packer", version: "1", files: ["SKILL.md"] },
  { name: "vagrant", version: "1", files: ["SKILL.md"] },
  { name: "etl", version: "1", files: ["SKILL.md"] },
  { name: "data-cleaning", version: "1", files: ["SKILL.md"] },
  { name: "data-viz", version: "1", files: ["SKILL.md"] },
  { name: "data-warehouse", version: "1", files: ["SKILL.md"] },
  { name: "analytics", version: "1", files: ["SKILL.md"] },
  { name: "bigquery", version: "1", files: ["SKILL.md"] },
  { name: "snowflake", version: "1", files: ["SKILL.md"] },
  { name: "spark", version: "1", files: ["SKILL.md"] },
  { name: "hadoop", version: "1", files: ["SKILL.md"] },
  { name: "kafka", version: "1", files: ["SKILL.md"] },
  { name: "react-native", version: "1", files: ["SKILL.md"] },
  { name: "flutter", version: "1", files: ["SKILL.md"] },
  { name: "swift-ios", version: "1", files: ["SKILL.md"] },
  { name: "kotlin-android", version: "1", files: ["SKILL.md"] },
  { name: "xamarin", version: "1", files: ["SKILL.md"] },
  { name: "ionic", version: "1", files: ["SKILL.md"] },
  { name: "capacitor", version: "1", files: ["SKILL.md"] },
  { name: "readme", version: "1", files: ["SKILL.md"] },
  { name: "changelog", version: "1", files: ["SKILL.md"] },
  { name: "tech-docs", version: "1", files: ["SKILL.md"] },
  { name: "api-spec", version: "1", files: ["SKILL.md"] },
  { name: "wiki", version: "1", files: ["SKILL.md"] },
  { name: "docstring", version: "1", files: ["SKILL.md"] },
  { name: "cli-tool", version: "1", files: ["SKILL.md"] },
  { name: "scripting", version: "1", files: ["SKILL.md"] },
  { name: "automation", version: "1", files: ["SKILL.md"] },
  { name: "cron", version: "1", files: ["SKILL.md"] },
  { name: "backup", version: "1", files: ["SKILL.md"] },
  { name: "sync", version: "1", files: ["SKILL.md"] },
  { name: "deploy", version: "1", files: ["SKILL.md"] },
  { name: "rollback", version: "1", files: ["SKILL.md"] },
  { name: "health-check", version: "1", files: ["SKILL.md"] },
  { name: "status-page", version: "1", files: ["SKILL.md"] },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSkills() {
      try {
        const res = await fetch("/ForOpenCode/index.json");
        const data = await res.json();
        setSkills(data.skills || SKILLS_LIST);
      } catch {
        setSkills(SKILLS_LIST);
      } finally {
        setLoading(false);
      }
    }
    loadSkills();
  }, []);

  const filtered = useMemo(() => {
    return skills.filter((s) => {
      const idKey = s.name.replace(/-/g, "_");
      const matchesSearch =
        !search ||
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        SKILL_DESCRIPTIONS[idKey]?.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        !activeCategory || SKILL_CATEGORIES[idKey] === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [skills, search, activeCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    skills.forEach((s) => {
      const idKey = s.name.replace(/-/g, "_");
      const cat = SKILL_CATEGORIES[idKey];
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, [skills]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-500 mb-4" />
        <p className="text-slate-400">Cargando skills...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white mb-4">
          ForOpenCode
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Catálogo de <span className="text-brand-400 font-semibold">{skills.length}</span> skills para OpenCode V2.
          Instala, busca y usa skills reutilizables en tus proyectos.
        </p>
      </div>

      {/* Search + Filters */}
      <div className="bg-dark-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
        <div className="grid md:grid-cols-3 gap-4 items-end">
          <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
          <div>
            <label className="block text-xs text-slate-500 mb-2 uppercase font-medium">Categoría</label>
            <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
          </div>
          <div className="flex items-end">
            <span className="text-slate-500 text-sm mr-2">{filtered.length} skills</span>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
            <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-3">
              <Search className="w-6 h-6 text-slate-500" />
            </div>
            <h3 className="text-lg font-medium text-slate-200 mb-2">No se encontraron skills</h3>
            <p className="text-slate-500 max-w-xs">Intenta cambiar los términos de búsqueda o la categoría seleccionada.</p>
          </div>
        ) : (
          filtered.map((skill) => {
            const idKey = skill.name.replace(/-/g, "_");
            const category = SKILL_CATEGORIES[idKey] || "comunidad";
            const catInfo = CATEGORIES[category];
            return (
              <SkillCard
                key={skill.name}
                skill={skill}
                description={SKILL_DESCRIPTIONS[idKey] || "Descripción no disponible"}
                category={catInfo.label}
              />
            );
          })
        )}
      </div>

      {/* Category legend */}
      <div className="bg-dark-900/50 border border-slate-800/50 rounded-xl p-4 mt-8">
        <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">Categorías disponibles</h3>
        <div className="flex flex-wrap gap-3">
          {Object.entries(CATEGORIES).map(([key, cat]) => {
            const idKey = key as Category;
            const count = categoryCounts[idKey] || 0;
            return (
              <div
                key={key}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-800 text-xs text-slate-400"
              >
                {cat.icon} {cat.label} <span className="text-slate-600">({count})</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
