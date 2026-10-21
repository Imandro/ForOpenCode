---
name: rate-limiting
description: Limitación de tasa y protección contra abusos y fuerza bruta
metadata:
  opencode/slash: true
---

# Limitación de tasa

## Propósito
Proteger APIs contra abusos, fuerza bruta y denegación de servicio mediante límites de tasa por cliente, IP o usuario. Úsala cuando necesites controlar cuántas peticiones puede hacer un cliente en un periodo de tiempo y responder adecuadamente cuando se supera el límite.

## Flujo de trabajo
1. Identificar al cliente (API key, ID de usuario, dirección IP o combina varios factores).
2. Elegir el algoritmo de limitación (ventana fija, ventana deslizante o token bucket).
3. Definir límites distintos por tipo de endpoint (lectura, escritura, autenticación).
4. Aplicar el límite como middleware antes de llegar al controlador.
5. Devolver HTTP 429 con el encabezado `Retry-After` cuando se excede el límite.
6. Registrar eventos de exceso y alertar ante patrones de abuso o fuerza bruta.

## Reglas
- Usar límites diferentes según el tipo de endpoint (más estricto en login y escritura).
- Devolver siempre 429 Too Many Requests con `Retry-After` al superar el límite.
- Usar claves de identificación estables (API key o user ID) en lugar de solo IP cuando sea posible.
- Exponer los límites actuales y restantes en encabezados de respuesta (`X-RateLimit-*`).
- No bloquear únicamente por IP compartida sin tener en cuenta el contexto del cliente.
- Aplicar límites más estrictos en endpoints no autenticados.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.