---
name: logging
description: Logging centralizado y trazabilidad: logs, niveles y correlación
metadata:
  opencode/slash: true
---

# Logging

## Propósito
Implementar logging centralizado y trazabilidad de aplicaciones mediante logs, niveles y correlación. Úsala para recopilar, indexar y consultar registros de manera unificada en sistemas distribuidos.

## Flujo de trabajo
1. Configurar los niveles de log de la aplicación (DEBUG, INFO, WARN, ERROR, FATAL) según el entorno de ejecución.
2. Enviar los logs de cada servicio a un sistema centralizado (ELK Stack, Loki, CloudWatch Logs, Splunk, etc.).
3. Añadir identificadores de correlación (trace ID, request ID) a los logs para seguir una petición a través de múltiples servicios.
4. Definir índices y políticas de retención para gestionar el volumen y el coste de almacenamiento de los logs.
5. Crear consultas y dashboards de búsqueda para diagnosticar incidentes y auditorías de seguridad.

## Reglas
- No registrar datos sensibles (contraseñas, tokens, tarjetas de crédito, PII) en los logs, incluso en nivel DEBUG.
- Usar un formato estructurado (JSON) para facilitar el parseo y el análisis automático de los logs.
- Cada servicio debe incluir el mismo identificador de correlación en todos sus logs para permitir la trazabilidad de extremo a extremo.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.
