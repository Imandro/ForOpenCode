---
name: rpc
description: Llamadas a procedimiento remoto (gRPC): servicios y contratos
metadata:
  opencode/slash: true
---

# gRPC / RPC

## Propósito
Construir servicios de llamada a procedimiento remoto con gRPC, definiendo contratos en Protobuf y generando código de cliente y servidor. Úsala para comunicación de baja latencia y fortemente tipada entre servicios, especialmente dentro de una arquitectura de microservicios.

## Flujo de trabajo
1. Definir el servicio y los mensajes en un archivo `.proto`.
2. Generar los stubs de cliente y servidor con el compilador `protoc`.
3. Implementar el servidor gRPC con la lógica de cada método remoto.
4. Implementar el cliente que llama a los métodos remotos del servidor.
5. Configurar TLS y autenticación entre cliente y servidor.
6. Probar con herramientas como `bloomRPC`, `evans` o `grpcurl`.
7. Versionar los contratos Protobuf manteniendo compatibilidad hacia atrás.

## Reglas
- Usar Protobuf como contrato único y fuente de verdad del servicio.
- Nombrar servicios y mensajes en PascalCase (`PedidoService`, `CrearPedidoRequest`).
- Usar RPC unario para consultas y acciones puntuales.
- Usar streaming (server, client o bidireccional) para flujos de datos continuos.
- Manejar los códigos de estado gRPC (`OK`, `INVALID_ARGUMENT`, `NOT_FOUND`, etc.).
- No cambiar campos existentes de forma incompatible; añadir campos nuevos con números nuevos.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.