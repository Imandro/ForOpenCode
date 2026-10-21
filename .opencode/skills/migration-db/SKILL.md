---
name: migration-db
description: Migraciones de base de datos: versiones, rollbacks y schemas
metadata:
  opencode/slash: true
---

# Migraciones de base de datos

## Propósito
Guía para gestionar cambios estructurales en bases de datos mediante migraciones versionadas, incluyendo scripts de avance (up) y reversión (down), control de versiones del esquema y ejecución segura en distintos entornos. Úsala al modificar tablas, columnas o relaciones en producción.

## Flujo de trabajo
1. Detectar el cambio necesario en el esquema
2. Crear un archivo de migración con versión y descripción
3. Escribir el script up (aplicar cambios) y down (revertir cambios)
4. Probar la migración en un entorno de desarrollo
5. Ejecutar la migración en staging y validar
6. Aplicar en producción con respaldo previo y plan de rollback

## Reglas
- Cada migración debe ser reversible con su script down
- Las migraciones deben ser idempotentes cuando sea posible
- Numerar las migraciones secuencialmente con marcas de tiempo
- Nunca modificar una migración ya aplicada en producción
- Hacer backup de la base de datos antes de ejecutar en producción

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.