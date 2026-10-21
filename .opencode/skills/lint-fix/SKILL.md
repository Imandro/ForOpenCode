---
name: lint-fix
description: Corrección automática de problemas de lint y estilo de código
metadata:
  opencode/slash: true
---

# Corrección de lint y estilo

## Propósito
Detectar y corregir automáticamente problemas de lint y estilo de código, aplicando las reglas de formateo y buenas prácticas definidas para el proyecto.

## Flujo de trabajo
1. Ejecutar el linter configurado sobre los archivos objetivo para detectar problemas.
2. Revisar las advertencias y errores reportados por el linter.
3. Aplicar correcciones automáticas cuando el linter las soporte (auto-fix).
4. Revisar manualmente los problemas que no se puedan corregir automáticamente.
5. Volver a ejecutar el linter para verificar que no quedan problemas.

## Reglas
- Respetar la configuración de lint existente en el proyecto (eslint, pylint, flake8, etc.).
- No introducir cambios funcionales al corregir problemas de estilo.
- Revisar los cambios automáticos antes de confirmarlos.
- Mantener la legibilidad del código tras la corrección.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.