---
name: rest-api
description: Diseño e implementación de APIs REST: endpoints, métodos y recursos
metadata:
  opencode/slash: true
---

# API REST

## Propósito
Guía para diseñar e implementar APIs RESTful siguiendo principios de recursos, métodos HTTP, códigos de estado y convenciones de URL. Úsala cuando necesites exponer servicios backend mediante una API web estándar, Stateless y basada en recursos.

## Flujo de trabajo
1. Identificar y nombrar los recursos del dominio (usuarios, pedidos, productos).
2. Modelar las URLs usando sustantivos en plural y jerarquía de recursos (`/usuarios`, `/usuarios/{id}/pedidos`).
3. Elegir los métodos HTTP según su semántica (GET, POST, PUT, PATCH, DELETE).
4. Definir y devolver códigos de estado HTTP apropiados (200, 201, 204, 400, 401, 403, 404, 409, 500).
5. Implementar controladores o handlers que procesen solicitudes y devuelvan JSON.
6. Documentar la API (OpenAPI) y escribir pruebas de integración para cada endpoint.

## Reglas
- Usar sustantivos en plural en las rutas, nunca verbos (`/pedidos`, no `/crearPedido`).
- Usar los métodos HTTP según su semántica real (GET solo lectura, POST crear, PUT/PATCH actualizar, DELETE eliminar).
- Devolver siempre un cuerpo JSON consistente, incluso en errores.
- No almacenar estado de sesión en el servidor (estateless); autenticar mediante token en cada petición.
- Versionar la API en la URL o en un encabezado cuando haya cambios rotundos (`/v1/pedidos`).

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.