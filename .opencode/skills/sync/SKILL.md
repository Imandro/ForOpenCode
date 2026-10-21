---
name: sync
description: Sincronización de datos: replicación entre sistemas, resolución de conflictos y consistencia
metadata:
  opencode/slash: true
---

# Sincronización de datos

## Propósito
Replicar datos entre sistemas, resolver conflictos cuando los mismos datos cambian en varios lugares y mantener la consistencia de la información. Úsala cuando necesites que varios repositorios o dispositivos reflejen la misma información de forma actualizada.

## Flujo de trabajo
1. Define el origen y el destino de los datos, así como el sentido de la replicación (unidireccional o bidireccional).
2. Ejecuta la sincronización y detecta conflictos donde los datos difieren entre extremos.
3. Resuelve los conflictos según una política definida y verifica que ambos extremos queden consistentes.

## Reglas
- Establece una política clara de resolución de conflictos (por ejemplo, el más reciente gana).
- Realiza una copia de seguridad antes de sincronizar grandes volúmenes de datos.
- Confirma la consistencia tras la sincronización comparando checksums o conteos de registros.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.