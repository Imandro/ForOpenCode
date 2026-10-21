---
name: redis
description: Caché y estructuras de datos con Redis: claves, listas y pub/sub
metadata:
  opencode/slash: true
---

# Redis

## Propósito
Guía para usar Redis como caché y almacén de estructuras de datos en memoria: claves, listas, conjuntos, hash, pub/sub y expiración. Úsala para acelerar aplicaciones, colas de mensajes y comunicación en tiempo real.

## Flujo de trabajo
1. Definir la estrategia de caché (write-through, write-back, cache-aside)
2. Elegir la estructura de datos adecuada (string, hash, list, set, zset)
3. Diseñar convenciones de nombres de claves con prefijos y expiración (TTL)
4. Implementar pub/sub para mensajería en tiempo real
5. Configurar persistencia (RDB, AOF) y alta disponibilidad
6. Monitorear uso de memoria, hit rate y latencia

## Reglas
- Establecer siempre un TTL en claves de caché para evitar crecimiento ilimitado
- Usar prefijos en claves para evitar colisiones entre aplicaciones
- No almacenar datos críticos únicamente en Redis sin respaldo
- Usar pipelines para operaciones en lote y reducir viajes de red
- Configurar políticas de evictión adecuadas (allkeys-lru, etc.)

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.