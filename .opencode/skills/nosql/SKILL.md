---
name: nosql
description: Modelado en bases de datos NoSQL: documentos, columnas y grafos
metadata:
  opencode/slash: true
---

# Modelado NoSQL

## Propósito
Guía para modelar datos en bases de datos NoSQL, abarcando almacenamiento de documentos, familias de columnas y grafos. Úsala cuando requieras esquemas flexibles, escalabilidad horizontal o modelos de datos no relacionales.

## Flujo de trabajo
1. Elegir el tipo de NoSQL según el caso de uso (documento, columna, grafo, clave-valor)
2. Definir la estructura de documentos o familias de columnas
3. Identificar patrones de acceso y consultas frecuentes
4. Diseñar claves de partición y claves de ordenamiento
5. Denormalizar datos intencionalmente para optimizar lecturas
6. Validar consistencia, particionamiento y escalabilidad

## Reglas
- Modelar según las consultas, no según las entidades (query-first)
- Denormalizar para evitar joins costosos en NoSQL
- Usar claves de partición que distribuyan la carga uniformemente
- No forzar esquemas relacionales en bases de datos NoSQL
- Considerar consistencia eventual frente a consistencia fuerte

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.