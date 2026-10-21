---
name: sqlite
description: SQLite: bases de datos embebidas y locales
metadata:
  opencode/slash: true
---

# SQLite

## Propósito
Guía para usar SQLite como base de datos embebida y local: creación de archivos de base de datos, consultas, índices, transacciones y mejores aplicaciones en dispositivos móviles, escritorio y prototipado. Úsala cuando necesites una base de datos sin servidor y de archivo único.

## Flujo de trabajo
1. Crear o abrir un archivo de base de datos SQLite (.db, .sqlite)
2. Definir tablas, columnas, tipos de datos y restricciones
3. Ejecutar consultas SQL estándar con parámetros vinculados
4. Crear índices para optimizar consultas frecuentes
5. Usar transacciones para garantizar atomicidad en escrituras
6. Configurar modo de diario (WAL) y opciones de sincronización

## Reglas
- Usar sentencias preparadas para evitar inyección SQL
- Habilitar WAL para mejor concurrencia en lecturas y escrituras
- No usar SQLite para escrituras masivas concurrentes de múltiples procesos
- Hacer backup del archivo .db antes de migraciones estructurales
- Activar claves foráneas con PRAGMA foreign_keys = ON en cada conexión

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.