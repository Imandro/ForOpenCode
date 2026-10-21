---
name: nextjs
description: Desarrollo con Next.js: páginas, rutas y renderizado
metadata:
  opencode/slash: true
---

# Desarrollo con Next.js

## Propósito
Crear aplicaciones web con Next.js aprovechando su sistema de páginas, enrutamiento basado en archivos y diferentes estrategias de renderizado (SSR, SSG, ISR, CSR). Úsala cuando necesites una aplicación React con enrutamiento, optimización de rendimiento y renderizado en el servidor o en el cliente.

## Flujo de trabajo
1. Crea páginas como archivos en el directorio app (App Router) o pages (Pages Router) de Next.js.
2. Define rutas dinámicas usando carpetas con corchetes ([id]) y parámetros de ruta en los componentes.
3. Elige la estrategia de renderizado adecuada por página: Server Components por defecto, Client Components con 'use client' cuando sea necesario.
4. Obtén datos directamente en Server Components con fetch o consultas a bases de datos.
5. Usa Next/Image, Next/Link y Next/Font para optimizar imágenes, navegación y fuentes.

## Reglas
- Usa el App Router (directorio app) para nuevos proyectos Next.js 13+.
- Marca con 'use client' solo los componentes que usen estado, efectos o eventos del navegador.
- Realiza la obtención de datos en el servidor siempre que sea posible para mejorar el SEO y el rendimiento.
- Usa rutas dinámicas con segmentos de ruta ([param]) y segmentos intercalados ([[...param]]) según la jerarquía.
- Aprovecha el enrutamiento basado en archivos en lugar de configurar rutas manualmente.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.