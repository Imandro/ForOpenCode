---
name: secrets
description: Detección y eliminación de secretos hardcodeados: claves, tokens y API keys
metadata:
  opencode/slash: true
---

# Detección y eliminación de secretos

## Propósito
Busca secretos hardcodeados en el código fuente, archivos de configuración y repositorios, como claves privadas, tokens de acceso, API keys y contraseñas. Úsala para evitar la exposición accidental de credenciales y eliminar de forma segura los secretos ya comprometidos.

## Flujo de trabajo
1. Escanea el repositorio completo, incluido el historial de commits, en busca de secretos.
2. Identifica cada secreto con su tipo (clave, token, API key, contraseña, certificado).
3. Evalúa si el secreto está activo o ya fue revocado.
4. Elimina el secreto hardcodeado del código y sustitúyelo por variables de entorno o un gestor de secretos.
5. Revoca y rota cualquier secreto que haya estado expuesto.
6. Verifica que no queden rastros del secreto en el historial del repositorio.

## Reglas
- Nunca commits secretos reales; úsalos solo como ejemplos con valores ficticios.
- No almacenes secretos en archivos de configuración versionados.
- Usa variables de entorno, secret stores o gestores de secretos para credenciales.
- Si un secreto se expuso, asímpelo como comprometido y rótalo inmediatamente.
- Incluye archivos .gitignore para evitar commits accidentales de archivos con secretos.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.