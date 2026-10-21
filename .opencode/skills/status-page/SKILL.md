---
name: status-page
description: Páginas de estado: publicación de incidentes, mantenimientos programados y comunicaciones a usuarios
metadata:
  opencode/slash: true
---

# Páginas de estado

## Propósito
Publicar información sobre incidentes, mantenimientos programados y comunicaciones a los usuarios mediante una página de estado pública. Úsala cuando necesites mantener informados a los usuarios sobre la disponibilidad y los problemas de los servicios.

## Flujo de trabajo
1. Configura la página de estado con los servicios a monitorizar y sus estados iniciales.
2. Publica un incidente o mantenimiento con título, descripción, horas de inicio y fin previstos, y afectación de servicios.
3. Actualiza el estado a medida que avanza la resolución y comunica el cierre cuando el servicio se restablezca.

## Reglas
- Mantén la página de estado accesible incluso si los servicios principales están caídos.
- Comunica con transparencia: indica el impacto real y el tiempo estimado de resolución.
- Elimina o archiva incidentes resueltos y mantén visible solo el estado actual de los servicios.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.