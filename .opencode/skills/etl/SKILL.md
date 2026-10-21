---
name: etl
description: Pipelines ETL: extraer, transformar y cargar datos entre sistemas
metadata:
  opencode/slash: true
---

# Pipelines ETL

## Propósito
Diseñar, construir y mantener pipelines ETL (extracción, transformación y carga) que muevan datos entre sistemas de origen y destinos analíticos, asegurando calidad, rastreabilidad y disponibilidad de la información.

## Flujo de trabajo
1. Definir fuentes de origen, frecuencias de extracción y requisitos de calidad de datos.
2. Extraer datos de bases de datos, APIs, archivos o servicios externos.
3. Transformar los datos: limpiar, normalizar, enriquecer y agregar según las reglas de negocio.
4. Cargar los datos transformados en el destino (data warehouse, data lake o base de datos analítica).
5. Orquestar, monitorizar y alertar sobre fallos en cada ejecución del pipeline.
6. Documentar el linaje de datos y versionar las transformaciones.

## Reglas
- Cada ejecución del pipeline debe ser idempotente y rastreable.
- Validar esquemas y calidades de datos antes y después de la transformación.
- No modificar datos de origen; los cambios solo ocurren en capas de transformación y destino.
- Mantener versiones de las consultas y scripts de transformación.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.