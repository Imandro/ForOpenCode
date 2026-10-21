---
name: changelog
description: Redacción de changelogs (Keep a Changelog): versiones y cambios
metadata:
  opencode/slash: true
---

# Redacción de Changelogs (Keep a Changelog)

## Propósito
Esta skill guía la redacción de archivos CHANGELOG.md siguiendo la convención "Keep a Changelog". Úsala cuando necesites registrar cambios entre versiones de un proyecto, diferenciando entre añadidos, cambios, deprecaciones, eliminaciones, correcciones y problemas de seguridad, organizados por versión y fecha.

## Flujo de trabajo
1. Crea o abre el archivo CHANGELOG.md en la raíz del proyecto.
2. Añade un encabezado que cite el estándar Keep a Changelog y el versiónado SemVer.
3. Para cada versión publicada, crea una sección con el formato `## [X.Y.Z] - YYYY-MM-DD`.
4. Dentro de cada versión, lista los cambios bajo los encabezados estándar: `### Añadido`, `### Cambiado`, `### Obsoleto`, `### Eliminado`, `### Corregido`, `### Seguridad`.
5. Usa la sección `## [No publicado]` al inicio para acumular cambios pendientes de la próxima versión.
6. Al publicar una versión, mueve los cambios de `[No publicado]` a una sección con el número de versión y la fecha real de publicación.

## Reglas
- El nombre del archivo debe ser CHANGELOG.md y ubicarse en la raíz del repositorio.
- Todos los paths dentro de esta skill son relativos al directorio que contiene este SKILL.md.
- Sigue el orden estándar de encabezados: Añadido, Cambiado, Obsoleto, Eliminado, Corregido, Seguridad.
- Usa formato de lista con viñetas (-) dentro de cada categoría.
- No incluyas versiones sin fecha de publicación excepto `[No publicado]`.
- Mantén las entradas concisas y enfocadas en el impacto para el usuario, no en detalles internos.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.