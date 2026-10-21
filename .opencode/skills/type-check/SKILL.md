---
name: type-check
description: Verificación de tipos y tipado estático en el código
metadata:
  opencode/slash: true
---

# Verificación de tipos

## Propósito
Verificar el tipado estático del código para detectar errores de tipos antes de la ejecución, mejorando la robustez y mantenibilidad del software.

## Flujo de trabajo
1. Configurar el verificador de tipos del lenguaje (TypeScript, mypy, etc.).
2. Ejecutar la verificación de tipos sobre el código del proyecto.
3. Revisar los errores de tipo reportados por el verificador.
4. Corregir las anotaciones de tipos y las incompatibilidades detectadas.
5. Volver a ejecutar la verificación hasta que no queden errores.

## Reglas
- Usar tipado estático estricto cuando el lenguaje lo permita.
- No usar tipos `any` o genéricos sin justificación.
- Mantener las anotaciones de tipos actualizadas con el código.
- Integrar la verificación de tipos en el pipeline de CI/CD.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.