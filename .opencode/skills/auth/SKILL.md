---
name: auth
description: Autenticación y autorización: OAuth2, JWT y sesiones de usuario
metadata:
  opencode/slash: true
---

# Autenticación y autorización

## Propósito
Implementar autenticación y autorización en el backend con OAuth2, JWT y sesiones de usuario. Incluye registro, inicio de sesión, emisión y validación de tokens, renovación (refresh) y control de acceso por roles o permisos. Úsala cuando necesites proteger recursos y saber quién está accediendo y qué puede hacer.

## Flujo de trabajo
1. Elegir la estrategia de autenticación (sesiones con cookie, JWT, OAuth2/OIDC o combinación).
2. Implementar registro de usuarios y almacenar contraseñas hasheadas con sal.
3. Implementar login y emitir credenciales (token de acceso, token de refresco o cookie de sesión).
4. Validar la firma y expiración del JWT en cada petición protegida.
5. Proteger rutas y endpoints con middleware de autenticación.
6. Autorizar el acceso según roles, permisos o scopes (RBAC/ABAC).
7. Implementar cierre de sesión, revocación de tokens y renovación de access token.

## Reglas
- Nunca almacenar contraseñas en texto plano; usar bcrypt, argon2 o scrypt.
- Usar siempre HTTPS para transporte de credenciales y tokens.
- Usar JWT de vida corta combinados con refresh tokens de mayor duración.
- Validar la firma, el emisor (iss), la audiencia (aud) y la expiración (exp) de cada JWT.
- Aplicar límite de tasa en los endpoints de login y registro para evitar fuerza bruta.
- Conceder el mínimo privilegio necesario (scopes y roles mínimos).

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.