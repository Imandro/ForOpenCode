---
name: github-actions
description: Workflows de GitHub Actions: jobs, steps y triggers
metadata:
  opencode/slash: true
---

# GitHub Actions

## Propósito
Crear y gestionar workflows de GitHub Actions con jobs, steps y triggers. Úsala para automatizar tareas de CI/CD directamente desde repositorios de GitHub.

## Flujo de trabajo
1. Crear un archivo de workflow en `.github/workflows/<nombre>.yml` dentro del repositorio.
2. Definir los triggers que inician el workflow: push, pull request, schedule o `workflow_dispatch`.
3. Configurar uno o más jobs que se ejecuten en runners de GitHub o runners autoalojados.
4. Dentro de cada job, definir steps que usen acciones oficiales (`actions/checkout`, `actions/setup-node`, etc.) o scripts personalizados.
5. Subir los cambios al repositorio y verificar la ejecución del workflow en la pestaña Actions de GitHub.

## Reglas
- Usar versiones fijas de las acciones (por ejemplo, `actions/checkout@v4`) en lugar de ramas como `@main`.
- Almacenar secretos (tokens, claves API, contraseñas) en los secretos del repositorio o de la organización, nunca en el archivo YAML.
- Cada job debe ejecutarse en un sistema operativo adecuado (`ubuntu-latest`, `windows-latest`, `macos-latest`) según la plataforma objetivo.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.
