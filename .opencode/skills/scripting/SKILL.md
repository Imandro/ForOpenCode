---
name: scripting
description: Scripts de automatización: escritura y ejecución de scripts en bash, PowerShell y Python
metadata:
  opencode/slash: true
---

# Scripts de automatización

## Propósito
Escribir y ejecutar scripts de automatización en bash, PowerShell y Python para tareas repetitivas, manipulación de archivos, administración de sistemas y orquestación de procesos. Úsala cuando necesites automatizar acciones sin intervención manual.

## Flujo de trabajo
1. Elige el lenguaje adecuado según el entorno: bash/Linux, PowerShell/Windows o Python multiplataforma.
2. Escribe el script con manejo de errores, comentarios y entradas/salidas definidas.
3. Prueba el script en el entorno objetivo y verifica que finalice con el código de salida esperado.

## Reglas
- Incluye el shebang adecuado (`#!/bin/bash`, `#!/usr/bin/env python3`, etc.) cuando corresponda.
- Maneja errores explícitamente y no asumas que los comandos siempre tendrán éxito.
- Da permisos de ejecución a los scripts (`chmod +x`) cuando se usen directamente.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.