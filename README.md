# ForOpenCode

> **Catálogo de 136 skills para OpenCode V2** — Reutiliza instrucciones especializadas en tus proyectos de desarrollo, IA, frontend, backend, bases de datos, seguridad, DevOps y más.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-imandro.github.io/ForOpenCode-blue?style=for-the-badge&logo=github)](https://imandro.github.io/ForOpenCode/)
[![OpenCode V2](https://img.shields.io/badge/OpenCode-V2-0ea5e9?style=for-the-badge&logo=openai)](https://opencode.ai/v2/docs/skills/)
[![React + Vite](https://img.shields.io/badge/Web-React%20%2B%20Vite-61dafb?style=for-the-badge&logo=react)](https://imandro.github.io/ForOpenCode/)
[![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-green?style=for-the-badge)](LICENSE)

---

## 📖 ¿Qué es ForOpenCode?

**ForOpenCode** es un repositorio comunitario de **skills para OpenCode V2**. Una *skill* es un archivo `SKILL.md` que contiene instrucciones reutilizables para una tarea específica (revisión de código, commits, release notes, documentación de API, depuración, refactorización, prompts de IA, configuración de Kubernetes, etc.).

OpenCode descubre automáticamente estas skills y las anuncia al modelo. Cuando el modelo necesita una, la carga bajo demanda con la herramienta nativa `skill`. Tú también puedes invocarla escribiendo `@id-de-la-skill` en el chat.

Este repositorio incluye:

- **136 skills** organizadas en 12 categorías
- Un **sitio web interactivo** (React + Vite + Tailwind CSS) con buscador, filtros y detalle de cada skill
- Un **catálogo HTTP** (`index.json`) que OpenCode puede consumir directamente desde GitHub Pages

---

## 🚀 Características principales

| Característica | Descripción |
|----------------|-------------|
| **136 skills** | Más de cien skills listas para usar en OpenCode V2 |
| **12 categorías** | Comunidad, Programación, IA/ML, Frontend, Backend, Bases de datos, Seguridad, DevOps/Cloud, Datos, Móvil, Documentación, Utilidades |
| **Catálogo HTTP** | `index.json` compatible con el formato de catálogo de OpenCode |
| **Web interactiva** | Buscador, filtros por categoría, páginas de detalle y guía de instalación |
| **Despliegue automático** | GitHub Actions despliega la web a GitHub Pages en cada push |
| **Estándar OpenCode V2** | Todas las skills siguen el formato oficial con frontmatter YAML |

---

## 📦 Estructura del repositorio

```
ForOpenCode/
├── README.md                          # Esta documentación
├── LICENSE                            # Licencia MIT
├── .gitignore                         # Archivos ignorados por Git
├── index.json                         # Catálogo HTTP para OpenCode (136 entradas)
├── .opencode/skills/                  # Las 136 skills (SKILL.md + archivos de soporte)
│   ├── pony-tail/
│   │   └── SKILL.md
│   ├── better-ui/
│   │   └── SKILL.md
│   ├── code-review/
│   │   ├── SKILL.md
│   │   └── scripts/review-checklist.md
│   ├── git-release/
│   │   ├── SKILL.md
│   │   ├── references/release-policy.md
│   │   └── scripts/changelog.ts
│   └── ... (132 skills más)
├── web/                               # Sitio web (React + Vite + Tailwind CSS)
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── index.html
│   ├── src/
│   │   ├── App.tsx                    # Enrutador y layout principal
│   │   ├── main.tsx                   # Punto de entrada de React
│   │   ├── index.css                  # Estilos base y componentes
│   │   ├── types.ts                   # Tipos de TypeScript y categorías
│   │   ├── components/
│   │   │   ├── Navbar.tsx             # Barra de navegación
│   │   │   ├── SkillCard.tsx          # Tarjeta de skill
│   │   │   ├── SearchBar.tsx          # Buscador de skills
│   │   │   └── CategoryFilter.tsx     # Filtros por categoría
│   │   ├── pages/
│   │   │   ├── Home.tsx               # Listado con búsqueda y filtros
│   │   │   ├── SkillDetail.tsx        # Detalle de una skill
│   │   │   └── Install.tsx            # Guía de instalación
│   └── dist/                          # Build de producción (generado)
└── .github/workflows/deploy.yml       # CI/CD para GitHub Pages
```

---

## 🛠️ Cómo instalar las skills

Tienes tres formas de usar las skills de ForOpenCode en OpenCode V2:

### Opción 1: Proyecto local (recomendada para un proyecto específico)

Copia la carpeta de la skill dentro de `.opencode/skills/` de tu proyecto:

```bash
# Ejemplo: instalar la skill de revisión de código
cp -r ForOpenCode/.opencode/skills/code-review .opencode/skills/

# Ejemplo: instalar varias skills
cp -r ForOpenCode/.opencode/skills/code-review \
      ForOpenCode/.opencode/skills/git-release \
      ForOpenCode/.opencode/skills/commit-msg \
      .opencode/skills/
```

### Opción 2: Uso global (disponible para todos tus proyectos)

Copia las skills dentro de tu carpeta global de OpenCode:

```bash
# Ejemplo: instalar globalmente
cp -r ForOpenCode/.opencode/skills/code-review ~/.config/opencode/skills/

# Todas las skills de una vez
cp -r ForOpenCode/.opencode/skills/* ~/.config/opencode/skills/
```

Rutas globales por sistema:
- **Linux/macOS:** `~/.config/opencode/skills/`
- **Windows:** `%USERPROFILE%\.config\opencode\skills\`

### Opción 3: Catálogo HTTP (recomendada para equipos y uso continuo)

Agrega la URL del catálogo a tu archivo `opencode.jsonc`. OpenCode descargará automáticamente las skills desde GitHub Pages:

```jsonc
// opencode.jsonc (en la raíz de tu proyecto o global)
{
  "$schema": "https://opencode.ai/config.json",
  "skills": [
    "https://imandro.github.io/ForOpenCode/"
  ]
}
```

> **Nota:** Los arrays `skills` se combinan entre configuraciones, no se reemplazan. Puedes tener skills locales y del catálogo HTTP al mismo tiempo.

---

## 💬 Cómo cargar y usar una skill

Una vez instalada, la skill está disponible en OpenCode. Tienes dos formas de invocarla:

### 1. Mención directa en el chat

Escribe `@` seguido del ID de la skill:

```
@code-review
```

```
@git-release
```

```
@better-ui
```

El ID es el nombre de la carpeta (case-sensitive, kebab-case). Ejemplo: la carpeta `code-review` tiene ID `code-review`.

### 2. Carga automática por el modelo

Si la skill tiene un `description` y no tiene `opencode/autoinvoke: false`, OpenCode la anunciará al modelo en cada paso. El modelo puede decidir cargarla automáticamente con la herramienta `skill` cuando la tarea coincida.

### 3. Ver skills disponibles

OpenCode lista las habilidades permitidas que tienen descripción. El modelo ve solo el ID, nombre y descripción (no el contenido completo hasta que se carga).

---

## 📋 Catálogo de skills (136 total)

A continuación encontrarás todas las skills incluidas en ForOpenCode, organizadas por categoría. Cada una tiene su propia carpeta con un archivo `SKILL.md` y, opcionalmente, archivos de soporte (`scripts/`, `references/`).

### 🌟 Comunidad (10 skills)

| Skill | ID | Descripción |
|-------|-----|-------------|
| Pony Tail | `pony-tail` | Estilo de código limpio y ordenado: formato, nombres y presentación |
| Better UI | `better-ui` | Mejora de interfaces de usuario: usabilidad, diseño visual y accesibilidad |
| Code Review | `code-review` | Revisión de código: seguridad, estilo, pruebas y documentación |
| Git Release | `git-release` | Prepara release notes, version bumps y changelogs |
| Commit Msg | `commit-msg` | Mensajes de commit siguiendo Convencional Commits |
| API Docs | `api-docs` | Genera documentación de API desde código fuente |
| Debug | `debug` | Depuración y análisis de errores y stack traces |
| Refactor | `refactor` | Refactorización de código sin cambiar el comportamiento |
| Test Writer | `test-writer` | Escritura de pruebas unitarias e integración |
| Security Review | `security-review` | Revisión de seguridad de código fuente |

### 💻 Programación (14 skills)

| Skill | ID | Descripción |
|-------|-----|-------------|
| Boilerplate | `boilerplate` | Generación de código base y esqueletos de proyecto |
| Snippets | `snippets` | Snippets de código reutilizables por lenguaje |
| Lint Fix | `lint-fix` | Corrección automática de problemas de lint |
| Performance | `performance` | Optimización de rendimiento: CPU, memoria, consultas |
| Dependency Audit | `dependency-audit` | Auditoría de dependencias: vulnerabilidades y licencias |
| Migration | `migration` | Migración de código entre versiones y frameworks |
| Code Explain | `code-explain` | Explicación de código complejo paso a paso |
| Type Check | `type-check` | Verificación de tipos y tipado estático |
| Error Handling | `error-handling` | Manejo de errores y excepciones |
| Dry Principle | `dry-principle` | Principio DRY: elimina duplicación de código |
| SOLID Principles | `solid-principles` | Principios SOLID de diseño orientado a objetos |
| Design Patterns | `design-patterns` | Patrones de diseño de software |
| Clean Code | `clean-code` | Código limpio y mantenible |
| Functional Programming | `functional-programming` | Programación funcional: inmutabilidad y composición |

### 🤖 IA / ML / LLM (15 skills)

| Skill | ID | Descripción |
|-------|-----|-------------|
| Prompt Engineer | `prompt-engineer` | Diseño y optimización de prompts para LLMs |
| LLM Eval | `llm-eval` | Evaluación y benchmarking de modelos LLM |
| RAG Setup | `rag-setup` | Configuración de pipelines RAG |
| Fine Tune | `fine-tune` | Fine-tuning de modelos de lenguaje |
| Agent Design | `agent-design` | Diseño de agentes autónomos con herramientas |
| ML Pipeline | `ml-pipeline` | Pipelines de entrenamiento e inferencia ML |
| Model Card | `model-card` | Tarjetas de modelo y documentación IA |
| AI Safety | `ai-safety` | Seguridad y alineación de IA |
| Token Count | `token-count` | Conteo y optimización de tokens de contexto |
| Embedding | `embedding` | Generación y uso de embeddings vectores |
| Vector DB | `vector-db` | Bases de datos vectoriales |
| LangChain | `langchain` | Desarrollo con LangChain |
| AutoGen | `autogen` | Agentes conversacionales con AutoGen |
| CrewAI | `crew-ai` | Equipos de agentes colaborativos con CrewAI |
| Semantic Kernel | `semantic-kernel` | Desarrollo con Semantic Kernel |

### 🎨 Frontend / Web (15 skills)

| Skill | ID | Descripción |
|-------|-----|-------------|
| React Component | `react-component` | Componentes React funcionales y hooks |
| Vue Component | `vue-component` | Componentes Vue 3 Composition API |
| HTML/CSS | `html-css` | Maquetación semántica HTML y CSS |
| Accessibility | `accessibility` | Accesibilidad web WCAG y a11y |
| Responsive | `responsive` | Diseño responsive y mobile-first |
| Frontend Test | `frontend-test` | Pruebas frontend unitarias y E2E |
| PWA | `pwa` | Progressive Web Apps y service workers |
| Web Performance | `web-performance` | Rendimiento web Core Web Vitals |
| SEO | `seo` | Optimización SEO técnica y de contenidos |
| Tailwind | `tailwind` | Estilizado con Tailwind CSS |
| Svelte Component | `svelte-component` | Componentes Svelte con reactividad |
| Angular Component | `angular-component` | Componentes Angular con DI |
| Next.js | `nextjs` | Desarrollo con Next.js |
| Nuxt | `nuxt` | Desarrollo con Nuxt.js |
| TypeScript Frontend | `typescript-frontend` | TypeScript en frontend |

### ⚙️ Backend / APIs (12 skills)

| Skill | ID | Descripción |
|-------|-----|-------------|
| REST API | `rest-api` | Diseño e implementación de APIs REST |
| GraphQL | `graphql` | Schemas y resolvers GraphQL |
| WebSocket | `websocket` | Comunicación en tiempo real con WebSockets |
| Auth | `auth` | Autenticación OAuth2, JWT y sesiones |
| Rate Limiting | `rate-limiting` | Limitación de tasa y protección contra abusos |
| Webhook | `webhook` | Recepción y firma de webhooks |
| API Gateway | `api-gateway` | API Gateway y enrutamiento |
| RPC | `rpc` | Llamadas a procedimiento remoto gRPC |
| SOAP | `soap` | Servicios SOAP y WSDL |
| OpenAPI Spec | `openapi-spec` | Especificaciones OpenAPI/Swagger |
| Backend Test | `backend-test` | Pruebas de backend e integración |
| Microservices | `microservices` | Arquitectura de microservicios |

### 🗄️ Bases de Datos (12 skills)

| Skill | ID | Descripción |
|-------|-----|-------------|
| SQL Schema | `sql-schema` | Diseño de esquemas SQL relacionales |
| SQL Query | `sql-query` | Consultas SQL optimizadas |
| Migration DB | `migration-db` | Migraciones de base de datos |
| NoSQL | `nosql` | Modelado en bases de datos NoSQL |
| Redis | `redis` | Caché y estructuras con Redis |
| DB Backup | `db-backup` | Copias de seguridad de bases de datos |
| PostgreSQL | `postgres` | PostgreSQL administración y optimización |
| MongoDB | `mongodb` | MongoDB documentos y consultas |
| MySQL | `mysql` | MySQL/MariaDB administración |
| SQLite | `sqlite` | SQLite bases de datos embebidas |
| Prisma | `prisma` | ORM Prisma schema y consultas |
| TypeORM | `typeorm` | ORM TypeORM entidades y relaciones |

### 🔐 Seguridad (10 skills)

| Skill | ID | Descripción |
|-------|-----|-------------|
| Security Scan | `security-scan` | Escaneo estático SAST de vulnerabilidades |
| OWASP | `owasp` | Revisión contra OWASP Top 10 |
| Secrets | `secrets` | Detección de secretos hardcodeados |
| Encryption | `encryption` | Cifrado de datos en reposo y tránsito |
| JWT | `jwt` | Emisión y validación de tokens JWT |
| SSL/TLS | `ssl-tls` | Certificados SSL/TLS y HTTPS |
| SAST | `sast` | Análisis estático de seguridad |
| DAST | `dast` | Análisis dinámico de seguridad DAST |
| Penetration Test | `penetration-test` | Pruebas de penetración y evaluación |
| Compliance | `compliance` | Cumplimiento normativo GDPR, HIPAA, PCI-DSS |

### ☁️ DevOps / Cloud (15 skills)

| Skill | ID | Descripción |
|-------|-----|-------------|
| Docker | `docker` | Imágenes Docker y Docker Compose |
| Kubernetes | `kubernetes` | Manifiestos y despliegues en Kubernetes |
| Terraform | `terraform` | Infraestructura como código con Terraform |
| CI/CD | `ci-cd` | Pipelines CI/CD build, test y deploy |
| GitHub Actions | `github-actions` | Workflows de GitHub Actions |
| Ansible | `ansible` | Automatización con Ansible playbooks |
| Monitoring | `monitoring` | Monitoreo y observabilidad |
| Logging | `logging` | Logging centralizado y trazabilidad |
| AWS | `aws` | Servicios Amazon Web Services |
| Azure | `azure` | Servicios Microsoft Azure |
| GCP | `gcp` | Servicios Google Cloud Platform |
| K8s Manifest | `k8s-manifest` | Manifiestos YAML de Kubernetes |
| Helm | `helm` | Charts de Helm para Kubernetes |
| Packer | `packer` | Imágenes de máquina con Packer |
| Vagrant | `vagrant` | Entornos de desarrollo con Vagrant |

### 📊 Datos / Analítica (10 skills)

| Skill | ID | Descripción |
|-------|-----|-------------|
| ETL | `etl` | Pipelines ETL extraer, transformar, cargar |
| Data Cleaning | `data-cleaning` | Limpieza y normalización de datos |
| Data Viz | `data-viz` | Visualización de datos y dashboards |
| Data Warehouse | `data-warehouse` | Modelado de data warehouse |
| Analytics | `analytics` | Analítica de datos y métricas de negocio |
| BigQuery | `bigquery` | Google BigQuery consultas SQL |
| Snowflake | `snowflake` | Snowflake almacén de datos |
| Spark | `spark` | Apache Spark procesamiento distribuido |
| Hadoop | `hadoop` | Apache Hadoop HDFS y MapReduce |
| Kafka | `kafka` | Apache Kafka streaming de datos |

### 📱 Móvil (7 skills)

| Skill | ID | Descripción |
|-------|-----|-------------|
| React Native | `react-native` | Apps móviles con React Native |
| Flutter | `flutter` | Apps móviles con Flutter/Dart |
| Swift iOS | `swift-ios` | Desarrollo iOS nativo con Swift |
| Kotlin Android | `kotlin-android` | Desarrollo Android nativo con Kotlin |
| Xamarin | `xamarin` | Desarrollo multiplataforma con Xamarin |
| Ionic | `ionic` | Apps híbridas con Ionic |
| Capacitor | `capacitor` | Apps Capacitor APIs nativas |

### 📚 Documentación (6 skills)

| Skill | ID | Descripción |
|-------|-----|-------------|
| README | `readme` | Escritura de README de proyectos |
| Changelog | `changelog` | Redacción de changelogs Keep a Changelog |
| Tech Docs | `tech-docs` | Documentación técnica para desarrolladores |
| API Spec | `api-spec` | Especificaciones de API OpenAPI |
| Wiki | `wiki` | Documentación de wiki |
| Docstring | `docstring` | Docstrings de código embebido |

### 🛠️ Utilidades (10 skills)

| Skill | ID | Descripción |
|-------|-----|-------------|
| CLI Tool | `cli-tool` | Herramientas de línea de comandos |
| Scripting | `scripting` | Scripts de automatización bash y PowerShell |
| Automation | `automation` | Automatización de tareas y flujos |
| Cron | `cron` | Tareas programadas con expresiones cron |
| Backup | `backup` | Copias de seguridad y restauración |
| Sync | `sync` | Sincronización de datos y replicación |
| Deploy | `deploy` | Despliegue de aplicaciones y entornos |
| Rollback | `rollback` | Reversión de despliegues |
| Health Check | `health-check` | Health checks de servicios |
| Status Page | `status-page` | Páginas de estado e incidentes |

---

## 🌐 Cómo usar la web de ForOpenCode

El sitio web está alojado en GitHub Pages y sirve como catálogo visual interactivo:

👉 **https://imandro.github.io/ForOpenCode/**

### Funcionalidades de la web

| Función | Descripción |
|---------|-------------|
| **Buscador** | Busca skills por nombre o descripción en tiempo real |
| **Filtros por categoría** | Filtra las 136 skills por cualquiera de las 12 categorías |
| **Página de detalle** | Cada skill tiene su propia página con descripción completa, versión, archivos incluidos e instrucciones de instalación |
| **Copia de ID** | Botón para copiar el ID de la skill y pegarlo en OpenCode (`@skill-id`) |
| **Guía de instalación** | Página dedicada con los tres métodos de instalación (local, global, HTTP) |

---

## 🔧 Desarrollo del sitio web

El sitio está construido con **React 18 + Vite + Tailwind CSS** y se despliega automáticamente a GitHub Pages mediante GitHub Actions.

### Requisitos previos

- Node.js 18 o superior
- npm o yarn

### Comandos de desarrollo

```bash
# Entrar al directorio web
cd web

# Instalar dependencias
npm install

# Servidor de desarrollo con recarga en caliente
npm run dev

# Build para producción
npm run build

# Previsualizar el build localmente
npm run preview

# Linter
npm run lint
```

### Estructura de rutas del sitio

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | `Home` | Listado de skills con buscador y filtros |
| `/skill/:id` | `SkillDetail` | Detalle de una skill específica |
| `/install` | `Install` | Guía de instalación completa |

### Despliegue a GitHub Pages

El workflow `.github/workflows/deploy.yml` se ejecuta automáticamente en cada push a la rama `main`:

1. Instala dependencias de Node.js
2. Construye el sitio con Vite
3. Sube el artifact a GitHub Pages
4. Despliega a `https://imandro.github.io/ForOpenCode/`

---

## 📄 Formato de una skill (SKILL.md)

Todas las skills en este repositorio siguen el estándar oficial de OpenCode V2:

```markdown
---
name: git-release
description: Prepara release notes, version bumps y changelogs para releases de GitHub
metadata:
  opencode/slash: true
---

# Título de la Skill

## Propósito
Breve explicación de qué hace esta skill y cuándo usarla.

## Flujo de trabajo
1. Paso 1
2. Paso 2
3. Paso 3

## Reglas
- Regla 1
- Regla 2

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.
```

### Campos del frontmatter

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `name` | string | Sí | ID de la skill (debe coincidir con el nombre de la carpeta) |
| `description` | string | Sí | Resumen usado para anunciar la skill al modelo (1–1024 caracteres) |
| `metadata.opencode/slash` | string | No | `"true"` expone la skill como comando `/name` en la TUI |
| `metadata.opencode/autoinvoke` | string | No | `"false"` oculta la skill de la lista automática del modelo |

---

## 🤝 Cómo contribuir

ForOpenCode es un proyecto abierto. Las contribuciones son bienvenidas:

1. **Fork** el repositorio
2. Crea una rama: `git checkout -b feature/nueva-skill`
3. Añade tu skill en `.opencode/skills/<nombre>/SKILL.md`
4. Actualiza `index.json` con la nueva entrada
5. Commit y push: `git push origin feature/nueva-skill`
6. Abre un Pull Request

### Reglas para nuevas skills

- El nombre de la carpeta debe ser el ID en kebab-case (ej. `mi-nueva-skill`)
- El archivo principal debe llamarse exactamente `SKILL.md`
- El campo `name` en el frontmatter debe coincidir con el nombre de la carpeta
- Incluye un `description` claro y específico en español
- Usa `metadata.opencode/slash: true` si quieres que sea accesible como comando `/nombre`

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙌 Créditos

Creado por **imandro** para la comunidad de OpenCode.

- Documentación oficial: [OpenCode V2 Skills](https://opencode.ai/v2/docs/skills/)
- Sitio web: [https://imandro.github.io/ForOpenCode/](https://imandro.github.io/ForOpenCode/)
- Repositorio: [https://github.com/imandro/ForOpenCode](https://github.com/imandro/ForOpenCode)

---

<div align="center">

**ForOpenCode** — 136 skills para potenciar OpenCode V2

Hecho con ❤️ para desarrolladores

</div>