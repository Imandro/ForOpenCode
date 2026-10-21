---
name: security-review
description: Revisión de seguridad de código fuente: vulnerabilidades, inyecciones y secretos expuestos
metadata:
  opencode/slash: true
---

# Revisión de Seguridad de Código

## Propósito
Revisar el código fuente en busca de vulnerabilidades de seguridad, inyecciones y secretos expuestos antes de que lleguen a producción. Se usa como control de seguridad preventivo en el ciclo de desarrollo.

## Flujo de trabajo
1. Escanear el código buscando secretos expuestos: claves API, contraseñas, tokens y certificados.
2. Identificar puntos de entrada de datos no confiables y validar su sanitización.
3. Buscar patrones de inyección: SQL injection, command injection, XSS, path traversal, deserialización insegura.
4. Revisar el uso de funciones criptográficas y la gestión de autenticación y autorización.
5. Ejecutar herramientas de análisis estático de seguridad (SAST) si están disponibles.
6. Documentar los hallazgos, su nivel de riesgo y las acciones de corrección recomendadas.

## Reglas
- Nunca commitear secretos, claves o credenciales en el repositorio; usar variables de entorno o secret managers.
- Validar y sanitizar toda entrada de usuario antes de usarla en consultas o comandos.
- Usar consultas parametrizadas o sentencias preparadas para evitar inyección SQL.
- Cualquier vulnerabilidad de nivel crítico debe bloquear el despliegue hasta su corrección.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.