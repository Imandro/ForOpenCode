---
name: data-warehouse
description: Modelado de data warehouse: esquema estrella y copo de nieve
metadata:
  opencode/slash: true
---

# Modelado de Data Warehouse

## Propósito
Diseñar modelos de datos para almacenes de datos empresariales utilizando esquemas estrella y copo de nieve, optimizando el rendimiento de consultas analíticas y la comprensión del negocio.

## Flujo de trabajo
1. Identificar los procesos de negocio, granos de hechos y dimensiones relevantes.
2. Definir tablas de hechos con sus medidas y claves foráneas hacia dimensiones.
3. Modelar dimensiones desnormalizadas en esquema estrella para simplicidad y rendimiento.
4. Aplicar esquema copo de nieve solo cuando sea necesario normalizar dimensiones grandes o jerárquicas.
5. Implementar cambios lentamente (SCD) para capturar el historial de dimensiones.
6. Validar el modelo con consultas representativas y documentar el diccionario de datos.

## Reglas
- Cada tabla de hechos debe tener un grano bien definido y documentado.
- Preferir esquema estrella para dimensiones pequeñas y estables.
- Usar esquema copo de nieve con moderación para evitar complejidad excesiva en joins.
- Mantener claves surogadas en dimensiones para manejar cambios históricos.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.