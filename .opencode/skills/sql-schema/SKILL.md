---
name: sql-schema
description: Diseño de esquemas SQL relacionales: tablas, relaciones y normalización
metadata:
  opencode/slash: true
---

# Diseño de esquemas SQL

## Propósito
Guía para diseñar esquemas de bases de datos relacionales SQL, definiendo tablas, columnas, tipos de datos, relaciones (uno a uno, uno a muchos, muchos a muchos) y niveles de normalización. Úsala al modelar datos estructurados que requieran integridad referencial y consistencia.

## Flujo de trabajo
1. Identificar entidades y atributos del dominio
2. Definir tablas, columnas y tipos de datos adecuados
3. Establecer claves primarias y foráneas entre tablas
4. Normalizar el esquema (1FN, 2FN, 3FN) para eliminar redundancias
5. Crear restricciones de integridad (UNIQUE, NOT NULL, CHECK)
6. Documentar el diagrama entidad-relación (DER)

## Reglas
- Cada tabla debe tener una clave primaria definida
- Las claves foráneas deben referenciar claves primarias existentes
- Evitar columnas multivaloradas y grupos repetidos
- Usar nombres en snake_case para tablas y columnas
- No denormalizar salvo que exista un requisito de rendimiento justificado

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.