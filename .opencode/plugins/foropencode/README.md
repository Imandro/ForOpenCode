# ForOpenCode Plugin — OpenCode V2

Plugin V2 profesional de OpenCode que expone las **136 skills de ForOpenCode** como herramientas nativas dentro de OpenCode, sin necesidad de un servidor MCP externo.

---

## 📦 Instalación

### Opción A: Como plugin local (recomendada)

Copia la carpeta del plugin dentro de `.opencode/plugins/` de tu proyecto:

```bash
# Desde la raíz de ForOpenCode
cp -r .opencode/plugins/foropencode /ruta/a/tu/proyecto/.opencode/plugins/
```

### Opción B: Como plugin global

```bash
cp -r .opencode/plugins/foropencode ~/.config/opencode/plugins/
```

---

## ⚙️ Configuración en opencode.jsonc

Agrega el plugin a tu archivo `opencode.jsonc`:

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "plugins": [
    {
      "package": "./.opencode/plugins/foropencode",
      "options": { "enabled": true }
    }
  ],
  "permissions": [
    { "action": "skill", "resource": "*", "effect": "allow" },
    { "action": "tool", "resource": "foropencode_*", "effect": "allow" }
  ]
}
```

### Variables de entorno opcionales

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `FOROPENCODE_SKILL_SOURCES` | Rutas adicionales de skills (separadas por coma) | `/home/user/skills,./.opencode/skills` |
| `FOROPENCODE_CACHE_TTL` | Tiempo de caché en ms (default: 300000 = 5 min) | `600000` |
| `FOROPENCODE_LOG_LEVEL` | Nivel de log: debug, info, warn, error | `debug` |

---

## 🛠️ Herramientas expuestas

| Herramienta | Descripción |
|-------------|-------------|
| `foropencode_list_skills` | Lista todas las skills (filtrable por categoría y límite) |
| `foropencode_get_skill` | Obtiene el contenido completo de una skill específica |
| `foropencode_search_skills` | Busca skills por texto en nombre, descripción o categoría |
| `foropencode_categories` | Lista categorías con conteo de skills |
| `foropencode_install_skill` | Instala una skill en el proyecto o globalmente |
| `foropencode_validate_skill` | Valida el frontmatter y estructura de una skill |
| `foropencode_refresh_cache` | Invalida el caché y recarga skills desde disco |
| `foropencode_export_catalog` | Genera index.json para catálogo HTTP |

---

## 🏗️ Arquitectura del plugin

```
src/
├── index.ts       # Registro del plugin y herramientas en OpenCode
├── types.ts       # Interfaces TypeScript y constantes
├── config.ts      # Carga de configuración (env vars + defaults)
├── logger.ts      # Sistema de logging con niveles (debug/info/warn/error)
├── cache.ts       # Caché en memoria con TTL configurable
├── parser.ts      # Parser de frontmatter YAML (robusto)
└── skills.ts      # Descubrimiento y lectura de skills (multi-origen)
```

**Características profesionales:**
- ✅ Caché con TTL (5 min por defecto, configurable)
- ✅ Logging con niveles y timestamps ISO 8601
- ✅ Parser YAML robusto (comillas, booleanos, números, multilínea)
- ✅ Soporte multi-origen (local, global, rutas personalizadas)
- ✅ Detección de IDs duplicados entre orígenes
- ✅ Validación de skills (frontmatter, kebab-case, cuerpo vacío)
- ✅ Instalación automática de skills (local/global)
- ✅ Exportación de catálogo HTTP (index.json)
- ✅ Tipos TypeScript estrictos (noUnusedLocals, noUnusedParameters, etc.)
- ✅ Cero dependencias de producción (solo Node.js built-ins)

---

## 📁 Estructura

```
.opencode/plugins/foropencode/
├── package.json
├── tsconfig.json
├── .gitignore
├── README.md
├── dist/                    # Build compilado (generado)
│   ├── index.js
│   ├── index.js.map
│   ├── index.d.ts
│   ├── skills.js
│   ├── skills.d.ts
│   ├── tools.js
│   ├── tools.d.ts
│   ├── config.js
│   ├── config.d.ts
│   ├── logger.js
│   ├── logger.d.ts
│   ├── cache.js
│   ├── cache.d.ts
│   ├── parser.js
│   └── parser.d.ts
└── src/
    ├── index.ts
    ├── types.ts
    ├── config.ts
    ├── logger.ts
    ├── cache.ts
    ├── parser.ts
    └── skills.ts
```

---

## 🔄 Plugin vs MCP

| Aspecto | Plugin V2 (este) | MCP Server |
|---------|------------------|------------|
| Proceso | Dentro de OpenCode | Servidor separado (Node.js) |
| Instalación | Copiar carpeta | `npm install` + ejecutar servidor |
| Clientes | Solo OpenCode | Cualquier cliente MCP |
| Dependencias | Ninguna (Node built-ins) | `@modelcontextprotocol/sdk` |
| Complejidad | Muy baja | Media |

Este plugin es la opción recomendada si solo usas **OpenCode**, ya que no requiere servidor externo ni configuración de red.

---

## 📄 Licencia

MIT License