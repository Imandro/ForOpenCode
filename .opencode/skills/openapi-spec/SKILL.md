---
name: openapi-spec
description: Especificaciones OpenAPI/Swagger: documentación de APIs
metadata:
  opencode/slash: true
---

# OpenAPI / Swagger

## Propósito
Documentar APIs REST con especificaciones OpenAPI/Swagger, generando clientes, servidores y documentación interactiva. Úsala cuando necesites una fuente de verdad única y legible por máquina y por humanos para tu API.

## Flujo de trabajo
1. Definir `info`, servidores y la versión de la especificación.
2. Definir los `paths`, operaciones (métodos HTTP), parámetros, cuerpos y respuestas.
3. Definir esquemas reutilizables en `components/schemas` usando JSON Schema.
4. Agregar ejemplos concretos en cada operación y esquema.
5. Validar la especificación con herramientas oficiales (Swagger Validator, Spectral).
6. Generar código de cliente/servidor y publicar la documentación interactiva (Swagger UI, Redoc).
7. Mantener la especificación sincronizada con la implementación del código.

## Reglas
- Tener una única especificación OpenAPI como fuente de verdad de la API.
- Reusar componentes (`components/schemas`, `parameters`, `responses`) para evitar duplicación.
- Incluir ejemplos en cada operación y esquema para facilitar el consumo.
- Versionar la especificación junto con la API (`openapi: 3.0.x`, versión en `info.version`).
- Validar la especificación automáticamente en el pipeline de CI.
- No documentar endpoints que no existan en la implementación.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.