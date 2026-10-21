---
name: monitoring
description: Monitoreo y observabilidad: métricas, alertas y dashboards
metadata:
  opencode/slash: true
---

# Monitoreo

## Propósito
Implementar monitoreo y observabilidad de sistemas y aplicaciones mediante métricas, alertas y dashboards. Úsala para supervisar la salud, el rendimiento y la disponibilidad de la infraestructura y los servicios.

## Flujo de trabajo
1. Instalar y configurar un sistema de recopilación de métricas (Prometheus, Datadog, CloudWatch, etc.) en los nodos y servicios a monitorear.
2. Definir las métricas clave a recolectar: uso de CPU, memoria, disco, red y métricas de negocio de la aplicación.
3. Crear dashboards visuales que muestren en tiempo real el estado de la infraestructura y las aplicaciones.
4. Configurar reglas de alerta basadas en umbrales o anomalías en las métricas recopiladas.
5. Definir canales de notificación (correo, Slack, PagerDuty, SMS) para que las alertas lleguen al equipo de operaciones.

## Reglas
- Cada alerta debe incluir una descripción clara del problema y los pasos recomendados para mitigarlo.
- Evitar umbrales demasiado estrictos que generen alertas falsas positivas y fatiga en el equipo.
- Los dashboards deben mostrar tanto métricas de infraestructura como métricas de nivel de aplicación.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.
