---
name: api-docs
description: Genera documentación de API a partir del código fuente (endpoints, parámetros, respuestas)
metadata:
  opencode/slash: true
---

# Documentación de API desde Código

## Propósito
Generar documentación de API automática o semiautomática a partir del código fuente, describiendo endpoints, parámetros, encabezados, códigos de estado y cuerpos de respuesta. Se usa cuando se necesita mantener la documentación sincronizada con la implementación.

## Flujo de trabajo
1. Explorar el código fuente para identificar los endpoints y rutas de la API.
2. Extraer para cada endpoint: método HTTP, ruta, parámetros de ruta, query, encabezados y cuerpo de solicitud.
3. Documentar los códigos de estado de respuesta y el esquema de cada cuerpo de respuesta.
4. Incluir ejemplos de solicitud y respuesta para los casos de uso más comunes.
5. Publicar la documentación en formato legible (Markdown, OpenAPI/Swagger, Redoc, etc.).
6. Verificar que la documentación generada coincida con el comportamiento real del código.

## Reglas
- Cada endpoint debe documentar método, ruta, parámetros y al menos un ejemplo de respuesta.
- Los parámetros obligatorios y opcionales deben estar claramente identificados.
- Los códigos de error (4xx, 5xx) deben documentarse con su posible causa.
- La documentación debe regenerarse o revisarse cada vez que cambie la API.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.