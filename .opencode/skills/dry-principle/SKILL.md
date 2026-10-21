---
name: dry-principle
description: Principio DRY (Don't Repeat Yourself): elimina duplicación de código
metadata:
  opencode/slash: true
---

# Principio DRY

## Propósito
Aplicar el principio Don't Repeat Yourself (DRY) para eliminar la duplicación de código, extrayendo lógica repetida en funciones, clases o módulos reutilizables.

## Flujo de trabajo
1. Identificar bloques de código duplicados o muy similares en el proyecto.
2. Extraer la lógica común en una función, clase o módulo reutilizable.
3. Reemplazar las duplicaciones por llamadas al nuevo componente reutilizable.
4. Parametrizar las diferencias entre los casos originales mediante argumentos.
5. Ejecutar los tests para verificar que el comportamiento no cambió.

## Reglas
- No extraer código que solo se usa una vez; la abstracción prematura es perjudicial.
- Mantener las funciones extraídas con una única responsabilidad.
- Usar nombres descriptivos para las funciones y módulos extraídos.
- Verificar que no se introduzcan regresiones tras eliminar duplicaciones.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.