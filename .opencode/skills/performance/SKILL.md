---
name: performance
description: Optimización de rendimiento: CPU, memoria, consultas y tiempos de respuesta
metadata:
  opencode/slash: true
---

# Optimización de rendimiento

## Propósito
Identificar cuellos de botella y optimizar el uso de CPU, memoria, consultas a bases de datos y tiempos de respuesta de la aplicación.

## Flujo de trabajo
1. Medir el rendimiento actual con herramientas de profiling y monitoreo.
2. Identificar las operaciones más costosas (CPU, memoria, E/S, consultas).
3. Analizar consultas a bases de datos y añadir índices o optimizar JOINs cuando sea necesario.
4. Aplicar optimizaciones de código (caché, memoización, lazy loading, etc.).
5. Volver a medir para confirmar la mejora de rendimiento.

## Reglas
- Medir antes y después de cada optimización para validar el impacto.
- No optimizar prematuramente sin evidencia de que es un cuello de botella.
- Mantener la corrección y legibilidad del código tras la optimización.
- Documentar los cambios de rendimiento realizados.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.