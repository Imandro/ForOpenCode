---
name: bigquery
description: Google BigQuery: consultas SQL y almacén de datos en la nube
metadata:
  opencode/slash: true
---

# Google BigQuery

## Propósito
Utilizar Google BigQuery como almacén de datos en la nube, ejecutando consultas SQL sobre grandes volúmenes de datos, gestionando tablas, vistas y particiones, y optimizando costos y rendimiento.

## Flujo de trabajo
1. Crear y organizar proyectos, conjuntos de datos (datasets) y tablas en BigQuery.
2. Cargar datos desde Cloud Storage, archivos locales o fuentes externas.
3. Escribir consultas SQL para explorar, filtrar, agregar y transformar datos.
4. Crear vistas y vistas materializadas para reutilizar consultas frecuentes.
5. Particionar y agrupar (cluster) tablas grandes para mejorar el rendimiento y reducir costos.
6. Monitorizar el uso de ranuras (slots), los bytes procesados y establecer controles de costos.

## Reglas
- Usar particiones por fecha y clustering en tablas grandes para optimizar consultas y costos.
- Evitar SELECT *; seleccionar solo las columnas necesarias.
- Establecer límites de bytes facturados en consultas para evitar costos inesperados.
- Controlar el acceso a datasets y tablas mediante IAM y vistas autorizadas.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.