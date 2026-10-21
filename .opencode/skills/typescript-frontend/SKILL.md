---
name: typescript-frontend
description: TypeScript en frontend: tipado, interfaces y generics
metadata:
  opencode/slash: true
---

# TypeScript en frontend

## Propósito
Aplicar tipado estático a aplicaciones de frontend con TypeScript, definiendo interfaces, tipos, generics y reglas de tipado para componentes, props, estado y servicios. Úsala cuando quieras detectar errores de tipado en tiempo de desarrollo, mejorar la autocompletación y mantener el código más predecible y documentado.

## Flujo de trabajo
1. Configura TypeScript en el proyecto con un archivo tsconfig.json adecuado al entorno (React, Vue, Angular, etc.).
2. Define interfaces y tipos para modelar los datos, props de componentes y respuestas de API.
3. Tipado los parámetros de funciones, valores de retorno y variables de estado con tipos explícitos o inferidos.
4. Usa generics para crear funciones, componentes y clases reutilizables que trabajen con distintos tipos de forma segura.
5. Activa opciones estrictas (strict, noImplicitAny, strictNullChecks) y corrige los errores de tipado antes de compilar.

## Reglas
- Evita usar any; usa unknown cuando el tipo no se conozca y estrecha el tipo con guards.
- Define interfaces para la forma de los objetos y type aliases para uniones, intersecciones o tipos primitivos.
- Usa generics en funciones y componentes que acepten múltiples tipos sin perder seguridad de tipos.
- Tipado las props de componentes de frontend para evitar pasar datos incorrectos entre componentes.
- Habilita el modo estricto y no desactives las comprobaciones de nulos sin una justificación clara.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.