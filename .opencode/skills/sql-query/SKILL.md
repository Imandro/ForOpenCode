---
name: sql-query
description: Consultas SQL optimizadas: joins, índices y planes de ejecución
metadata:
  opencode/slash: true
---

# Consultas SQL

## Propósito
Guía para escribir consultas SQL eficientes: selecciones con JOINs, filtrado, agregaciones, uso de índices, análisis de planes de ejecución y optimización de rendimiento. Úsala al consultar bases de datos relacionales con grandes volúmenes de datos.

## Flujo de trabajo
1. Escribir la consulta con las columnas necesarias (evitar SELECT *)
2. Usar JOINs apropiados según la relación entre tablas
3. Agregar índices en columnas de filtro, unión y ordenamiento
4. Examinar el plan de ejecución (EXPLAIN / EXPLAIN ANALYZE)
5. Reescribir consultas lentas usando CTEs o subconsultas optimizadas
6. Validar resultados y medir tiempo de respuesta

## Reglas
- No usar SELECT * en consultas de producción
- Indexar columnas usadas en WHERE, JOIN y ORDER BY
- Evitar funciones en columnas del WHERE que impidan el uso de índices
- Prefieren JOINs explícitos sobre subconsultas cuando sea posible
- Analizar el plan de ejecución antes de desplegar cambios

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.