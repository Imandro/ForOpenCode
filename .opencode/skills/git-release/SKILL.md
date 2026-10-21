---
name: git-release
description: Prepara release notes, version bumps y changelogs para releases de GitHub
metadata:
  opencode/slash: true
---

# Preparación de Releases de GitHub

## Propósito
Preparar todo lo necesario para publicar un release en GitHub: notas de lanzamiento, incrementos de versión (version bumps) y changelogs. Se usa cuando se está por lanzar una nueva versión del software.

## Flujo de trabajo
1. Identificar los commits y pull requests fusionados desde el último release.
2. Determinar el tipo de incremento de versión (major, minor, patch) según los cambios.
3. Actualizar los archivos de versión del proyecto (package.json, Cargo.toml, setup.py, etc.).
4. Generar o escribir el changelog con las novedades, mejoras y correcciones.
5. Redactar las release notes destacando los cambios más importantes para los usuarios.
6. Crear el tag y el release en GitHub con las notas y los archivos adjuntos si los hay.

## Reglas
- Seguir Semantic Versioning para decidir el incremento de versión.
- El changelog debe agrupar cambios por categoría: añadido, cambiado, deprecated, eliminado, corregido, seguridad.
- Cada entrada del changelog debe referenciar el pull request o commit de origen.
- No publicar un release sin notas ni sin version bump correspondiente.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.