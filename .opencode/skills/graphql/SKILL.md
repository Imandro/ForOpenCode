---
name: graphql
description: Schemas y resolvers GraphQL: consultas, mutaciones y suscripciones
metadata:
  opencode/slash: true
---

# GraphQL

## Propósito
Construir APIs GraphQL definiendo schemas con tipos, consultas, mutaciones y suscripciones, junto con sus resolvers. Úsala cuando necesites una API flexible donde el cliente solicite exactamente los datos que requiere, a través de un solo endpoint.

## Flujo de trabajo
1. Definir los tipos de datos del esquema GraphQL (`type`, `input`, `enum`, `scalar`).
2. Definir los objetos raíz `Query`, `Mutation` y `Subscription`.
3. Implementar un resolver por cada campo que necesite lógica personalizada.
4. Conectar los resolvers a las fuentes de datos (base de datos, servicios externos, caché).
5. Exponer un único endpoint HTTP (usualmente `/graphql`) y habilitar un explorador tipo GraphiQL/Apollo Studio.
6. Probar consultas, mutaciones y suscripciones antes de llevar a producción.

## Reglas
- Usar un único endpoint para todas las operaciones GraphQL.
- Tipar fuertemente el schema; evitar tipos genéricos como `JSON` o `String` cuando sea posible.
- Implementar un resolver por campo que requiera lógica de negocio o acceso a datos.
- Usar tipos de entrada (`input`) para los argumentos de las mutaciones.
- Paginar las listas (`cursor` o `offset`) en lugar de devolver colecciones ilimitadas.
- Proteger las mutaciones y suscripciones con autenticación y autorización.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.