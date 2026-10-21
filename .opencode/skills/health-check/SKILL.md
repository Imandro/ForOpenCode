---
name: health-check
description: Health checks de servicios: verificación de endpoints, métricas de salud y disponibilidad
metadata:
  opencode/slash: true
---

# Health checks de servicios

## Propósito
Verificar que los servicios estén operativos consultando endpoints, recopilando métricas de salud y confirmando su disponibilidad. Úsala cuando necesites monitorizar el estado de una aplicación y detectar caídas o degradaciones de forma temprana.

## Flujo de trabajo
1. Define los endpoints de health check (por ejemplo, `/health`, `/ready`, `/live`) y las métricas a supervisar.
2. Ejecuta consultas periódicas a los endpoints y evalúa las respuestas (códigos HTTP, contenido, latencia).
3. Activa alertas cuando un servicio falle el chequeo y documenta el incidente hasta su resolución.

## Reglas
- Los endpoints de salud deben responder rápido y no depender de operaciones lentas o externas críticas.
- Distingue entre estado vivo (`live`) y listo para recibir tráfico (`ready`).
- Considera un servicio como no disponible tras varios chequeos fallidos consecutivos.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.