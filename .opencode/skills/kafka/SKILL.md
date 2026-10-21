---
name: kafka
description: Apache Kafka: streaming de datos, topics y consumidores
metadata:
  opencode/slash: true
---

# Apache Kafka

## Propósito
Diseñar y operar flujos de streaming de datos en tiempo real con Apache Kafka, publicando y consumiendo mensajes a través de topics, particiones y grupos de consumidores.

## Flujo de trabajo
1. Montar o conectarse a un clúster Kafka con brokers, Zookeeper o KRaft.
2. Crear topics con el número adecuado de particiones y factor de replicación.
3. Desarrollar productores que publiquen mensajes con claves y schemas bien definidos.
4. Desarrollar consumidores organizados en grupos de consumo para leer topics en paralelo.
5. Configurar commit de offsets, política de retención y compactación de topics.
6. Monitorear lag de consumidores, rendimiento de brokers y salud de replicas.

## Reglas
- Usar claves de mensaje para garantizar orden dentro de una partición y distribuir carga.
- Configurar el factor de replicación adecuado para tolerancia a fallos de brokers.
- Manejar el commit de offsets de forma explícita para evitar reprocesamiento o pérdida de mensajes.
- Esquematizar los mensajes (Avro, JSON o Protobuf) y versionar los schemas para compatibilidad.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.