---
name: api-spec
description: Especificaciones de API: OpenAPI, Swagger y contratos de endpoints
metadata:
  opencode/slash: true
---

# Especificaciones de API

## Propósito
Esta skill guía la creación y mantenimiento de especificaciones de API usando OpenAPI/Swagger. Úsala cuando necesites definir contratos de endpoints, parámetros de solicitud, cuerpos de respuesta, códigos de estado, autenticación y esquemas de datos de forma legible por humanos y máquinas.

## Flujo de trabajo
1. Elige el formato de especificación (OpenAPI 3.0 es el recomendado) y el archivo (por ejemplo openapi.yaml o openapi.json).
2. Define la información general de la API: título, versión, descripción y contacto en el nodo `info`.
3. Declara los servidores base en el nodo `servers`.
4. Esquema los modelos de datos en `components/schemas` usando JSON Schema.
5. Define cada endpoint bajo `paths` con su método HTTP, parámetros, cuerpo de solicitud, respuestas y códigos de estado.
6. Configura la autenticación y seguridad en `components/securitySchemes` y aplícala globalmente o por operación según corresponda.
7. Valida la especificación con herramientas oficiales (Swagger Validator, Redoc CLI) y genera documentación o stubs de servidor si es necesario.

## Reglas
- Todos los paths dentro de esta skill son relativos al directorio que contiene este SKILL.md.
- Usa OpenAPI 3.0 como versión predeterminada a menos que se requiera otra.
- Nombra los esquemas de componentes en PascalCase y los paths en kebab-case o camelCase de forma consistente.
- Documenta todos los códigos de respuesta relevantes (200, 201, 400, 401, 403, 404, 500).
- No incluyas credenciales reales ni secretos en la especificación.
- Mantén la especificación sincronizada con la implementación de la API.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.