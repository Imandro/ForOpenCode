---
name: functional-programming
description: Programación funcional: inmutabilidad, funciones puras y composición
metadata:
  opencode/slash: true
---

# Programación funcional

## Propósito
Aplicar conceptos de programación funcional (inmutabilidad, funciones puras, composición de funciones, evitar efectos secundarios) para escribir código más predecible, fácil de probar y mantener.

## Flujo de trabajo
1. Identificar secciones del código que se benefician de un enfoque funcional.
2. Reemplazar variables mutables por inmutables (const, readonly, etc.).
3. Escribir funciones puras que no tengan efectos secundarios y dependan solo de sus entradas.
4. Componer funciones pequeñas para construir lógica más compleja.
5. Usar funciones de orden superior (map, filter, reduce) en lugar de bucles imperativos cuando sea apropiado.
6. Separar la lógica pura de los efectos secundarios (E/S, red, base de datos).
7. Ejecutar los tests para verificar que el comportamiento se preserva.

## Reglas
- Las funciones puras deben retornar el mismo resultado para las mismas entradas.
- No modificar el estado externo desde dentro de una función pura.
- Preferir expresiones sobre sentencias cuando sea posible.
- Evitar efectos secundarios ocultos; hacerlos explícitos en los límites del sistema.
- No aplicar programación funcional donde un enfoque imperativo sea más claro y sencillo.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.