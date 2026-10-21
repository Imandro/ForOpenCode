# ForOpenCode — Repositorio de Skills para OpenCode V2

Repositorio de **136 skills** para OpenCode V2. Cada skill es una carpeta con un archivo `SKILL.md` que contiene instrucciones reutilizables para una tarea específica.

## 🌐 Sitio web

Visita el catálogo interactivo en GitHub Pages:
👉 **https://imandro.github.io/ForOpenCode/**

La web incluye:
- **Buscador** de skills por nombre y descripción
- **Filtros por categoría** (Comunidad, Programación, IA, Frontend, Backend, Bases de Datos, Seguridad, DevOps, Datos, Móvil, Documentación, Utilidades)
- **Página de detalle** por skill con instrucciones de instalación
- **Catálogo HTTP** consumible directamente por OpenCode

## Estructura del repositorio

```
ForOpenCode/
├── README.md
├── LICENSE
├── .gitignore
├── index.json                   # Catálogo HTTP (136 skills con versiones)
├── .opencode/skills/            # 136 skills (SKILL.md + archivos de soporte)
│   ├── pony-tail/
│   │   └── SKILL.md
│   ├── better-ui/
│   │   └── SKILL.md
│   └── ... (134 skills más)
├── web/                         # Sitio React + Vite (GitHub Pages)
│   ├── package.json
│   ├── vite.config.ts
│   ├── src/
│   │   ├── App.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx         # Listado con búsqueda y filtros
│   │   │   ├── SkillDetail.tsx  # Detalle de skill
│   │   │   └── Install.tsx      # Instrucciones de instalación
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── SkillCard.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── CategoryFilter.tsx
│   │   └── types.ts
│   └── index.html
└── .github/workflows/deploy.yml # Despliegue automático a GitHub Pages
```

## Cómo instalar las skills

### Proyecto local
Copia las carpetas de skill dentro de `.opencode/skills/` de tu proyecto:

```bash
cp -r ForOpenCode/.opencode/skills/<skill-id> .opencode/skills/
```

### Uso global (todos los proyectos)
Copia las carpetas dentro de `~/.config/opencode/skills/`:

```bash
cp -r ForOpenCode/.opencode/skills/<skill-id> ~/.config/opencode/skills/
```

### Como catálogo HTTP (recomendado)
Agrega la URL a tu `opencode.jsonc`:

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "skills": [
    "https://imandro.github.io/ForOpenCode/"
  ]
}
```

Cada skill en el catálogo se identifica por su carpeta (ID case-sensitive).

## Cargar una skill

Desde el chat de OpenCode, menciona la skill por su ID:

```
@skill-id
```

O el modelo puede cargarla automáticamente con la herramienta `skill` si tiene `description` y no tiene `opencode/autoinvoke: false`.

## Desarrollo del sitio web

El sitio está construido con **React + Vite + Tailwind CSS** y se despliega automáticamente a GitHub Pages vía GitHub Actions.

```bash
# Instalar dependencias
cd web
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build
```

## Lista de skills

Consulta `index.json` para el catálogo completo con versiones y archivos por skill.

---

**ForOpenCode** — 136 skills para OpenCode V2  
Por **imandro** · https://imandro.github.io/ForOpenCode/  
https://opencode.ai/v2/docs/skills/