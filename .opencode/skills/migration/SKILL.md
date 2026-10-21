---
name: migration
description: Migración de código entre versiones, frameworks o lenguajes
metadata:
  opencode/slash: true
---

# Migración de código

## Propósito
Migrar código existente entre diferentes versiones de un lenguaje, frameworks o lenguajes de programación, preservando la funcionalidad original.

## Flujo de trabajo
1. Analizar el código base actual y identificar las diferencias con el objetivo de migración.
2. Planificar la estrategia de migración (por módulos, por capas, big bang).
3. Ejecutar la migración de cada componente siguiendo las guías oficiales.
4. Adaptar las llamadas a APIs, importaciones y sintaxis al nuevo entorno.
5. Ejecutar los tests para verificar que la funcionalidad se preserva.
6. Corregir errores de compatibilidad y completar la migración.

## Reglas
- Mantener una rama o copia de seguridad del código original antes de migrar.
- Migrar de forma incremental cuando sea posible, probando cada paso.
- No cambiar la lógica de negocio durante la migración, solo el entorno.
- Verificar que todos los tests pasen tras la migración.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.