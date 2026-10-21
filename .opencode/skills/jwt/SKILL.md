---
name: jwt
description: Emisión y validación de tokens JWT: firmas, expiración y claims
metadata:
  opencode/slash: true
---

# Gestión de tokens JWT

## Propósito
Configura la emisión, firma y validación de tokens JSON Web Token (JWT) para autenticación y autorización. Úsala para asegurar que los tokens sean válidos, no hayan expirado, tengan una firma correcta y contenga los claims esperados.

## Flujo de trabajo
1. Define los claims obligatorios (iss, sub, exp, iat, aud) y opcionales según el caso de uso.
2. Configura el algoritmo de firma (HMAC con RSA o ECDSA) y protege la clave secreta.
3. Establece un tiempo de expiración razonable (exp) para cada token.
4. Valida la firma, el emisor, la audiencia y la expiración en cada request entrante.
5. Implementa revocación de tokens cuando sea necesario (blacklist o rotación).
6. Renueva tokens de acceso usando refresh tokens con expiración controlada.

## Reglas
- Nunca almacenes datos sensibles en el payload del JWT (es legible por cualquiera).
- Usa algoritmos asimétricos (RS256, ES256) en lugar de simétricos cuando sea posible.
- Protege la clave de firma; nunca la expongas en el frontend ni en repositorios.
- Valida siempre el campo exp para rechazar tokens expirados.
- No uses el algoritmo "none" que permite tokens sin firma.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.