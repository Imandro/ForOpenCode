import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Copy, FileText, Code, Code2, Folder, CheckCircle2 } from "lucide-react";
import { CATEGORIES, SKILL_CATEGORIES, type Category } from "../types";

const SKILL_DESCRIPTIONS: Record<string, string> = {
  pony_tail: "Estilo de código limpio y ordenado: formato, nombres y presentación tipo cola de caballo",
  better_ui: "Mejora de interfaces de usuario: usabilidad, diseño visual, accesibilidad y experiencia de usuario",
  code_review: "Revisión de código: seguridad, estilo, pruebas y documentación antes de commitear",
  git_release: "Prepara release notes, version bumps y changelogs para releases de GitHub",
  commit_msg: "Mensajes de commit siguiendo Convencional Commits (feat, fix, docs, refactor, test, chore)",
  api_docs: "Genera documentación de API a partir del código fuente (endpoints, parámetros, respuestas)",
  debug: "Depuración y análisis de errores: stack traces, logs y diagnóstico de fallos",
  refactor: "Refactorización de código: mejora la estructura sin cambiar el comportamiento",
  test_writer: "Escritura de pruebas unitarias e integración para validar el comportamiento del código",
  security_review: "Revisión de seguridad de código fuente: vulnerabilidades, inyecciones y secretos expuestos",
  boilerplate: "Generación de código base y esqueletos de proyecto para iniciar rápidamente",
  snippets: "Snippets de código reutilizables por lenguaje y patrón común",
  lint_fix: "Corrección automática de problemas de lint y estilo de código",
  performance: "Optimización de rendimiento: CPU, memoria, consultas y tiempos de respuesta",
  dependency_audit: "Auditoría de dependencias: vulnerabilidades, versiones y licencias",
  migration: "Migración de código entre versiones, frameworks o lenguajes",
  code_explain: "Explicación de código complejo en lenguaje natural y paso a paso",
  type_check: "Verificación de tipos y tipado estático en el código",
  error_handling: "Manejo de errores y excepciones: try/catch, validación y recuperación",
  dry_principle: "Principio DRY (Don't Repeat Yourself): elimina duplicación de código",
  solid_principles: "Principios SOLID de diseño orientado a objetos",
  design_patterns: "Patrones de diseño de software: creacionales, estructurales y de comportamiento",
  clean_code: "Código limpio y mantenible: nombres, funciones, clases y organización",
  functional_programming: "Programación funcional: inmutabilidad, funciones puras y composición",
  prompt_engineer: "Diseño y optimización de prompts para modelos de lenguaje (LLM)",
  llm_eval: "Evaluación y benchmarking de modelos LLM: métricas, datasets y comparación",
  rag_setup: "Configuración de pipelines RAG (retrieval-augmented generation)",
  fine_tune: "Fine-tuning de modelos de lenguaje: datos, entrenamiento y ajuste",
  agent_design: "Diseño de agentes autónomos con herramientas y memoria",
  ml_pipeline: "Pipelines de entrenamiento e inferencia de Machine Learning",
  model_card: "Tarjetas de modelo (model cards): documentación ética y técnica de IA",
  ai_safety: "Seguridad y alineación de IA: prevención de sesgos y comportamientos dañinos",
  token_count: "Conteo y optimización de tokens de contexto para LLMs",
  embedding: "Generación y uso de embeddings vectores para búsqueda semántica",
  vector_db: "Bases de datos vectoriales: almacenamiento y consulta de embeddings",
  langchain: "Desarrollo de aplicaciones con LangChain: cadenas, agentes y memoria",
  autogen: "Desarrollo de agentes conversacionales con AutoGen",
  crew_ai: "Desarrollo de equipos de agentes colaborativos con CrewAI",
  semantic_kernel: "Desarrollo con Semantic Kernel: integración de IA en aplicaciones",
  react_component: "Componentes React: funcionales, hooks, props y estado",
  vue_component: "Componentes Vue 3: Composition API, refs y reactivity",
  html_css: "Maquetación semántica HTML y hojas de estilo CSS",
  accessibility: "Accesibilidad web (a11y, WCAG): contraste, navegación y lectores de pantalla",
  responsive: "Diseño responsive y mobile-first: media queries y layout fluido",
  frontend_test: "Pruebas frontend: unitarias, de integración y end-to-end",
  pwa: "Progressive Web Apps: service workers, manifiesto y instalación",
  web_performance: "Rendimiento web: LCP, FID, CLS y Core Web Vitals",
  seo: "Optimización SEO técnica y de contenidos para motores de búsqueda",
  tailwind: "Estilizado con Tailwind CSS: clases utilitarias y diseño rápido",
  svelte_component: "Componentes Svelte: reactividad y compilación",
  angular_component: "Componentes Angular: plantillas, servicios y dependency injection",
  nextjs: "Desarrollo con Next.js: páginas, rutas y renderizado",
  nuxt: "Desarrollo con Nuxt.js: páginas, rutas y renderizado Vue",
  typescript_frontend: "TypeScript en frontend: tipado, interfaces y generics",
  rest_api: "Diseño e implementación de APIs REST: endpoints, métodos y recursos",
  graphql: "Schemas y resolvers GraphQL: consultas, mutaciones y suscripciones",
  websocket: "Comunicación en tiempo real con WebSockets: eventos y canales",
  auth: "Autenticación y autorización: OAuth2, JWT y sesiones de usuario",
  rate_limiting: "Limitación de tasa y protección contra abusos y fuerza bruta",
  webhook: "Recepción y firma de webhooks: validación y procesamiento de eventos",
  api_gateway: "API Gateway y enrutamiento: proxy, balanceo y transformación",
  rpc: "Llamadas a procedimiento remoto (gRPC): servicios y contratos",
  soap: "Servicios SOAP: WSDL, envelopes y mensajería XML",
  openapi_spec: "Especificaciones OpenAPI/Swagger: documentación de APIs",
  backend_test: "Pruebas de backend e integración: APIs, bases de datos y servicios",
  microservices: "Arquitectura de microservicios: descomposición y comunicación",
  sql_schema: "Diseño de esquemas SQL relacionales: tablas, relaciones y normalización",
  sql_query: "Consultas SQL optimizadas: joins, índices y planes de ejecución",
  migration_db: "Migraciones de base de datos: versiones, rollbacks y schemas",
  nosql: "Modelado en bases de datos NoSQL: documentos, columnas y grafos",
  redis: "Caché y estructuras de datos con Redis: claves, listas y pub/sub",
  db_backup: "Copias de seguridad y restauración de bases de datos",
  postgres: "PostgreSQL: administración, consultas y optimización",
  mongodb: "MongoDB: documentos, colecciones y consultas NoSQL",
  mysql: "MySQL/MariaDB: administración, consultas y optimización",
  sqlite: "SQLite: bases de datos embebidas y locales",
  prisma: "ORM Prisma: schema, migraciones y consultas tipadas",
  typeorm: "ORM TypeORM: entidades, repositorios y relaciones",
  security_scan: "Escaneo estático de vulnerabilidades (SAST): análisis de código fuente",
  owasp: "Revisión contra OWASP Top 10: riesgos críticos de seguridad web",
  secrets: "Detección y eliminación de secretos hardcodeados: claves, tokens y API keys",
  encryption: "Cifrado de datos en reposo y en tránsito: algoritmos y claves",
  jwt: "Emisión y validación de tokens JWT: firmas, expiración y claims",
  ssl_tls: "Certificados SSL/TLS y configuración HTTPS: TLS, HTTPS y seguridad de transporte",
  sast: "Análisis estático de seguridad: detección de vulnerabilidades sin ejecutar código",
  dast: "Análisis dinámico de seguridad (DAST): pruebas en ejecución contra aplicaciones",
  penetration_test: "Pruebas de penetración: simulación de ataques y evaluación de seguridad",
  compliance: "Cumplimiento normativo: GDPR, HIPAA, PCI-DSS y regulaciones",
  docker: "Imágenes Docker y Docker Compose: contenedores, redes y volúmenes",
  kubernetes: "Manifiestos y despliegues en Kubernetes: pods, servicios y despliegues",
  terraform: "Infraestructura como código con Terraform: recursos, estado y proveedores",
  ci_cd: "Pipelines de integración y despliegue continuo: build, test y deploy",
  github_actions: "Workflows de GitHub Actions: jobs, steps y triggers",
  ansible: "Automatización de configuración con Ansible: playbooks e inventarios",
  monitoring: "Monitoreo y observabilidad: métricas, alertas y dashboards",
  logging: "Logging centralizado y trazabilidad: logs, niveles y correlación",
  aws: "Servicios de Amazon Web Services: EC2, S3, Lambda y más",
  azure: "Servicios de Microsoft Azure: VMs, Storage, Functions y más",
  gcp: "Servicios de Google Cloud Platform: Compute, Storage, Functions y más",
  k8s_manifest: "Manifiestos específicos de Kubernetes: YAML, despliegues y servicios",
  helm: "Charts de Helm: paquetes, releases y despliegues en Kubernetes",
  packer: "Imágenes de máquina con Packer: AMIs, Docker y provisioning",
  vagrant: "Entornos de desarrollo con Vagrant: máquinas virtuales y provisioning",
  etl: "Pipelines ETL: extraer, transformar y cargar datos entre sistemas",
  data_cleaning: "Limpieza y normalización de datos: valores faltantes y duplicados",
  data_viz: "Visualización de datos y dashboards: gráficos y reportes",
  data_warehouse: "Modelado de data warehouse: esquema estrella y copo de nieve",
  analytics: "Analítica de datos y métricas de negocio: KPIs y reportes",
  bigquery: "Google BigQuery: consultas SQL y almacén de datos en la nube",
  snowflake: "Snowflake: almacén de datos, consultas y compartición",
  spark: "Apache Spark: procesamiento distribuido de datos y ML",
  hadoop: "Apache Hadoop: HDFS, MapReduce y procesamiento masivo",
  kafka: "Apache Kafka: streaming de datos, topics y consumidores",
  react_native: "Apps móviles con React Native: componentes, navegación y estilos",
  flutter: "Apps móviles con Flutter/Dart: widgets, estado y navegación",
  swift_ios: "Desarrollo iOS nativo con Swift: UIKit, SwiftUI y Xcode",
  kotlin_android: "Desarrollo Android nativo con Kotlin: actividades, fragmentos y Jetpack",
  xamarin: "Desarrollo multiplataforma con Xamarin: .NET y C# para móviles",
  ionic: "Apps híbridas con Ionic: web views, componentes y Capacitor",
  capacitor: "Apps Capacitor: acceso a APIs nativas desde web",
  readme: "Escritura de README de proyectos: estructura, secciones y badges",
  changelog: "Redacción de changelogs (Keep a Changelog): versiones y cambios",
  tech_docs: "Documentación técnica para desarrolladores: guías, referencia y tutoriales",
  api_spec: "Especificaciones de API: OpenAPI, Swagger y contratos de endpoints",
  wiki: "Documentación de wiki: páginas, organización y búsqueda",
  docstring: "Docstrings de código: documentación embebida en funciones y clases",
  cli_tool: "Herramientas de línea de comandos: argumentos, flags y salida",
  scripting: "Scripts de automatización: bash, PowerShell y Python",
  automation: "Automatización de tareas: flujos, triggers y programación",
  cron: "Tareas programadas: expresiones cron, intervalos y ejecución",
  backup: "Copias de seguridad: estrategias, restauración y verificación",
  sync: "Sincronización de datos: replicación, conflictos y consistencia",
  deploy: "Despliegue de aplicaciones: entornos, despliegues y rollbacks",
  rollback: "Reversión de despliegues: deshacer cambios y recuperar estado",
  health_check: "Health checks de servicios: endpoints, métricas y disponibilidad",
  status_page: "Páginas de estado: incidentes, mantenimientos y comunicaciones",
};

export default function SkillDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [skill, setSkill] = useState<{ name: string; version: string; files: string[] } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSkill() {
      if (!id) {
        navigate("/");
        return;
      }
      try {
        const res = await fetch(`/ForOpenCode/index.json`);
        const data = await res.json();
        const found = (data.skills as Array<{ name: string; version: string; files: string[] }>).find(
          (s) => s.name === id,
        );
        setSkill(found ?? null);
      } catch {
        setSkill(null);
      } finally {
        setLoading(false);
      }
    }
    loadSkill();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-4 border-[#0ea5e9] border-t-transparent mb-4" />
        <p className="text-[#64748b] font-medium">Cargando skill...</p>
      </div>
    );
  }

  if (!skill || !id) {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-16 bg-[#fef2f2] rounded-full flex items-center justify-center mx-auto mb-4">
          <FileText className="w-8 h-8 text-[#ef4444]" />
        </div>
        <h3 className="text-xl font-bold text-[#1e293b] mb-2">Skill no encontrada</h3>
        <p className="text-[#64748b] mb-6">La skill solicitada no existe en el catálogo.</p>
        <button
          onClick={() => navigate("/")}
          className="btn-primary"
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  const idKey = skill.name.replace(/-/g, "_");
  const category = SKILL_CATEGORIES[idKey] || "comunidad";
  const catInfo = CATEGORIES[category];
  const description = SKILL_DESCRIPTIONS[idKey] || "Descripción no disponible";

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="mb-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-[#64748b] hover:text-[#0ea5e9] transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Volver al catálogo
        </button>
      </nav>

      <div className="bg-white border-2 border-[#e2e8f0] rounded-2xl p-6 mb-8 shadow-soft">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-[#0ea5e9] rounded-xl flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="badge badge-brand">
                v{skill.version}
              </span>
              <span className="badge badge-gray">
                {catInfo.icon} {catInfo.label}
              </span>
              <span className="badge badge-gray">
                {skill.files.length} archivo{skill.files.length > 1 ? "s" : ""}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-[#1e293b] mb-2">{skill.name}</h1>
            <p className="text-[#64748b] text-lg">{description}</p>
          </div>
          <div className="flex flex-col gap-3">
            <button className="btn-primary w-full flex items-center justify-center gap-2">
              <Copy className="w-4 h-4" /> Copiar ID
            </button>
            <button className="btn-outline w-full flex items-center justify-center gap-2 text-sm">
              <Folder className="w-4 h-4" /> Ver en GitHub
            </button>
          </div>
        </div>
      </div>

      {/* Installation instructions */}
      <div className="bg-white border-2 border-[#e2e8f0] rounded-2xl p-6 mb-8 shadow-soft">
        <h2 className="text-xl font-bold text-[#1e293b] mb-4 flex items-center gap-2">
          <Folder className="w-5 h-5 text-[#0ea5e9]" /> Instalar skill
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-bold text-[#64748b] mb-2 uppercase tracking-wider">Proyecto local</h3>
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-3 font-mono text-sm text-[#0ea5e9] overflow-x-auto">
              cp -r .opencode/skills/{skill.name} .opencode/skills/
            </div>
            <p className="text-xs text-[#94a3b8] mt-1">Copia la carpeta dentro de `.opencode/skills/` de tu proyecto.</p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#64748b] mb-2 uppercase tracking-wider">Uso global</h3>
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-3 font-mono text-sm text-[#0ea5e9] overflow-x-auto">
              cp -r .opencode/skills/{skill.name} ~/.config/opencode/skills/
            </div>
            <p className="text-xs text-[#94a3b8] mt-1">Disponible para todos tus proyectos.</p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#64748b] mb-2 uppercase tracking-wider">Catálogo HTTP</h3>
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-3 font-mono text-sm text-[#0ea5e9] overflow-x-auto">
              https://imandro.github.io/ForOpenCode/
            </div>
            <p className="text-xs text-[#94a3b8] mt-1">Agrega esta URL al array `skills` de tu `opencode.jsonc`.</p>
          </div>
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white border-2 border-[#e2e8f0] rounded-2xl p-6 shadow-soft">
        <h2 className="text-xl font-bold text-[#1e293b] mb-4 flex items-center gap-2">
          <Code className="w-5 h-5 text-[#0ea5e9]" /> Cómo usar
        </h2>
        <div className="space-y-4">
          <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-4">
            <h4 className="text-sm font-bold text-[#0ea5e9] mb-2">1. Carga la skill</h4>
            <p className="text-[#64748b] text-sm mb-2">Desde el chat de OpenCode, menciona la skill por su ID:</p>
            <div className="bg-[#f1f5f9] border border-[#e2e8f0] rounded p-3 font-mono text-sm text-[#111827] mb-3">
              @{skill.name}
            </div>
            <p className="text-[#64748b] text-sm">
              O el modelo puede cargarla automáticamente con la herramienta `skill` si tiene descripción y no tiene `opencode/autoinvoke: false`.
            </p>
          </div>
          <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-4">
            <h4 className="text-sm font-bold text-[#0ea5e9] mb-2">2. Archivos de soporte</h4>
            <p className="text-[#64748b] text-sm mb-2">
              Esta skill incluye {skill.files.length} archivo{skill.files.length > 1 ? "s" : ""}:
            </p>
            <ul className="text-[#64748b] text-sm space-y-1 ml-4 list-disc">
              {skill.files.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <p className="text-xs text-[#94a3b8] mt-3 italic">
              Los paths relativos dentro de la skill son relativos al directorio que contiene el SKILL.md.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
