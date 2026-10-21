---
name: hadoop
description: Apache Hadoop: HDFS, MapReduce y procesamiento masivo
metadata:
  opencode/slash: true
---

# Apache Hadoop

## Propósito
Almacenar y procesar grandes volúmenes de datos de forma distribuida con Apache Hadoop, utilizando HDFS como sistema de archivos y MapReduce para el procesamiento por lotes.

## Flujo de trabajo
1. Instalar o conectarse a un clúster Hadoop con NameNode, DataNodes y ResourceManager.
2. Cargar archivos en HDFS creando directorios y replicando bloques entre nodos.
3. Escribir jobs de MapReduce: fase de mapeo (map), embarullamiento (shuffle) y reducción (reduce).
4. Ejecutar los jobs sobre YARN y monitorear su avance a través del historial de aplicaciones.
5. Consumir datos procesados desde HDFS o exportarlos a sistemas de destino.
6. Administrar permisos, cuotas y salud del clúster (nodos, bloques y replicación).

## Reglas
- Diseñar jobs de MapReduce siendo idempotentes y tolerantes a fallos de nodos.
- Configurar la replicación de bloques HDFS según criticidad y disponibilidad requerida.
- Combinar archivos pequeños antes de escribirlos en HDFS para evitar sobrecarga del NameNode.
- Procesar datos en el nodo donde residen para minimizar movimiento de datos por la red.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.