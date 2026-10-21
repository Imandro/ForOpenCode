---
name: websocket
description: Comunicación en tiempo real con WebSockets: eventos y canales
metadata:
  opencode/slash: true
---

# WebSockets

## Propósito
Implementar comunicación bidireccional en tiempo real entre cliente y servidor usando WebSockets, con eventos con nombre y canales o salas para segmentar los mensajes. Úsala para chats, notificaciones en vivo, tableros colaborativos o cualquier caso que requiera actualizaciones inmediatas sin sondeo (polling).

## Flujo de trabajo
1. Establecer la conexión WebSocket y completar el handshake HTTP.
2. Autenticar la conexión antes de permitir la suscripción a canales.
3. Suscribir clientes a canales o salas (rooms) según su contexto.
4. Emitir y escuchar eventos con nombre (`evento`, `payload`).
5. Manejar desconexiones y limpiar las suscripciones del cliente.
6. Implementar heartbeats (ping/pong) para detectar conexiones muertas.

## Reglas
- Autenticar siempre antes de unir un cliente a un canal privado.
- Usar nombres de evento consistentes y documentados (`mensaje:nuevo`, `usuario:conectado`).
- Validar y sanitizar todo el payload recibido del cliente.
- Limpiar suscripciones y liberar recursos cuando un cliente se desconecta.
- Limitar la frecuencia de mensajes por cliente para evitar abusos.
- No enviar datos sensibles a canales públicos; usar salas autenticadas.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.