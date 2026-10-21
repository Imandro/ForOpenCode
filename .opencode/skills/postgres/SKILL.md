---
name: postgres
description: PostgreSQL: administración, consultas y optimización
metadata:
  opencode/slash: true
---

# PostgreSQL

## Propósito
Guía para administrar, consultar y optimizar bases de datos PostgreSQL: configuración, tipos de datos avanzados, índices, VACUUM, replicación y ajuste de rendimiento. Úsala al trabajar con PostgreSQL en desarrollo o producción.

## Flujo de trabajo
1. Instalar y configurar PostgreSQL (postgresql.conf, pg_hba.conf)
2. Crear bases de datos, roles y esquemas con privilegios adecuados
3. Diseñar tablas usando tipos avanzados (JSONB, ARRAY, UUID, rangos)
4. Crear índices B-Tree, GIN, GiST y BRIN según el caso de uso
5. Ejecutar VACUUM y ANALYZE para mantener estadísticas actualizadas
6. Monitorear consultas lentas con pg_stat_statements y ajustar work_mem

## Reglas
- Usar UUID o serial para claves primarias según el caso
- Habilitar archivado y WAL para recuperación punto-a-punto
- Ejecutar VACUUM ANALYZE periódicamente en tablas con muchos cambios
- Usar conexión con pooling (PgBouncer) en entornos de alta concurrencia
- No ejecutar consultas pesadas en el nodo principal si existen réplicas de lectura

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.