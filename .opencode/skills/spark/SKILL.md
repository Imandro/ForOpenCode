---
name: spark
description: Apache Spark: procesamiento distribuido de datos y ML
metadata:
  opencode/slash: true
---

# Apache Spark

## Propósito
Procesar grandes volúmenes de datos de forma distribuida con Apache Spark, ejecutando trabajos por lotes y en streaming, y desarrollando pipelines de machine learning sobre clusters.

## Flujo de trabajo
1. Configurar o conectarse a un clúster Spark (local, YARN, Kubernetes o Spark independiente).
2. Cargar datos desde HDFS, S3, Azure Blob, bases de datos o sistemas de streaming.
3. Crear DataFrames o RDDs y aplicar transformaciones (map, filter, join, groupBy) y acciones (count, collect, write).
4. Optimizar trabajos mediante particionamiento, caché y ajuste de paralelismo.
5. Desarrollar pipelines de ML con MLlib o Spark ML (entrenamiento, evaluación y predicción).
6. Escribir los resultados en sistemas de destino y monitorizar la ejecución de los trabajos.

## Reglas
- Preferir DataFrames y Spark SQL sobre RDDs salvo que sea estrictamente necesario.
- Almacenar en caché (cache/persist) los DataFrames reutilizados en múltiples etapas.
- Particionar datos de escritura según las columnas de consulta más frecuentes.
- Ajustar el número de particiones y la memoria de ejecutores según el volumen de datos.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.