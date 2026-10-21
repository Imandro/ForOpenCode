---
name: boilerplate
description: Generación de código base y esqueletos de proyecto para iniciar rápidamente
metadata:
  opencode/slash: true
---

# Generación de código base

## Propósito
Esta skill genera esqueletos de proyecto y código base para iniciar desarrollos rápidamente, definiendo estructura de carpetas, archivos de configuración y plantillas iniciales reutilizables.

## Flujo de trabajo
1. Identificar el tipo de proyecto y el lenguaje o framework a utilizar.
2. Generar la estructura de directorios recomendada para ese tipo de proyecto.
3. Crear los archivos de configuración base (package.json, tsconfig, setup.cfg, etc.).
4. Añadir plantillas de punto de entrada y módulos principales.
5. Validar que el esqueleto generado compila o se ejecuta sin errores.

## Reglas
- No modificar código existente fuera del alcance del esqueleto generado.
- Los paths son relativos al directorio que contiene este SKILL.md.
- Usar convenciones de nomenclatura estándar del lenguaje objetivo.
- Incluir archivos de configuración mínima pero funcional.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.