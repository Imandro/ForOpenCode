---
name: commit-msg
description: Mensajes de commit siguiendo Convencional Commits (feat, fix, docs, refactor, test, chore)
metadata:
  opencode/slash: true
---

# Mensajes de Commit Convencionales

## Propósito
Redactar mensajes de commit claros, consistentes y estandarizados siguiendo la especificación Convencional Commits. Se usa en cada commit para facilitar la generación automática de changelogs y el entendimiento del historial.

## Flujo de trabajo
1. Identificar el tipo de cambio: feat, fix, docs, refactor, test, chore, build, ci, perf o style.
2. Opcionalmente, indicar el alcance del cambio entre paréntesis después del tipo.
3. Escribir una descripción breve en imperativo y en minúsculas, iniciando con mayúscula tras el dos puntos.
4. Añadir un cuerpo opcional que explique el motivo y el alcance del cambio.
5. Incluir un pie de página opcional con referencias a issues o breaking changes.
6. Verificar que el mensaje cumpla el formato: tipo(alcance): descripción

## Reglas
- El tipo debe ser uno de: feat, fix, docs, refactor, test, chore, build, ci, perf, style.
- La descripción debe iniciar con verbo en imperativo (ej. "Agregar", "Corregir", "Actualizar").
- No usar mayúsculas al inicio de la descripción ni punto final.
- Los cambios que rompen compatibilidad (breaking changes) deben añadir "!" tras el tipo o indicarse en el pie de página.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.