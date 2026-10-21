---
name: webhook
description: Recepción y firma de webhooks: validación y procesamiento de eventos
metadata:
  opencode/slash: true
---

# Webhooks

## Propósito
Recibir, validar y procesar webhooks de proveedores externos con firma criptográfica y procesamiento idempotente. Úsala cuando necesites reaccionar a eventos de servicios terceros (pagos, envíos, CI/CD) de forma segura y confiable.

## Flujo de trabajo
1. Exponer un endpoint público HTTPS para recibir los webhooks del proveedor.
2. Validar la firma criptográfica (HMAC) del cuerpo de la petición antes de procesarlo.
3. Parsear el payload y extraer el identificador único del evento.
4. Verificar idempotencia usando el ID del evento para evitar procesar duplicados.
5. Encolar el procesamiento asíncrono y responder 200 rápidamente al proveedor.
6. Manejar reintentos del proveedor y eventos desconocidos sin fallar.

## Reglas
- Validar siempre la firma HMAC antes de aceptar o procesar el payload.
- Responder HTTP 200 inmediatamente y procesar el evento de forma asíncrona.
- Hacer el procesamiento idempotente por ID de evento para soportar reintentos.
- No exponer el secreto de firma en el frontend ni en registros de logs.
- Usar una cola de mensajes para trabajos de larga duración.
- Ignorar eventos desconocidos sin devolver error al proveedor.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.