---
name: web-performance
description: Rendimiento web: LCP, FID, CLS y Core Web Vitals
metadata:
  opencode/slash: true
---

# Rendimiento web y Core Web Vitals

## Propósito
Medir y optimizar el rendimiento de carga e interactividad de una aplicación web, centrado en los Core Web Vitals: Largest Contentful Paint (LCP), First Input Delay (FID) / Interaction to Next Paint (INP) y Cumulative Layout Shift (CLS). Úsala cuando necesites que la página cargue rápido, sea responsiva y visualmente estable.

## Flujo de trabajo
1. Mide el rendimiento actual con Lighthouse, PageSpeed Insights o la API de Web Vitals en campo.
2. Identifica los elementos que afectan al LCP (imágenes hero, fuentes, recursos bloqueantes).
3. Reduce el tiempo de respuesta a la interacción optimizando JavaScript y tareas largas (FID/INP).
4. Establece dimensiones explícitas a imágenes y contenido dinámico para evitar desplazamientos de layout (CLS).
5. Itera midiendo después de cada optimización y compara contra los umbrales recomendados.

## Reglas
- LCP debe ocurrir antes de los 2.5 segundos; INP menor a 200 ms; CLS menor a 0.1.
- Optimiza y comprime imágenes; usa formatos modernos (WebP, AVIF) y carga diferida (loading="lazy").
- Minimiza CSS y JavaScript bloqueantes; aplaza scripts no críticos con defer o async.
- Usa font-display: swap para evitar el texto invisible mientras cargan las fuentes.
- No insertes contenido dinámico por encima del contenido existente sin reservar espacio.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.