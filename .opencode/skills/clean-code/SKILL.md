---
name: clean-code
description: Código limpio y mantenible: nombres, funciones, clases y organización
metadata:
  opencode/slash: true
---

# Código limpio

## Propósito
Escribir código limpio y mantenible, enfocándose en nombres descriptivos, funciones pequeñas, clases bien organizadas y una estructura clara del proyecto.

## Flujo de trabajo
1. Revisar el código para identificar nombres poco claros, funciones largas y clases con muchas responsabilidades.
2. Renombrar variables, funciones y clases con nombres descriptivos y en inglés cuando sea el estándar del proyecto.
3. Dividir funciones largas en funciones más pequeñas con una sola responsabilidad.
4. Organizar las clases agrupando métodos relacionados y ocultando detalles internos.
5. Eliminar código muerto, comentarios obsoletos y magia en los valores.
6. Ejecutar los tests para verificar que el refactor no cambió el comportamiento.

## Reglas
- Los nombres deben revelar la intención del código.
- Las funciones deben ser pequeñas y hacer una sola cosa.
- Las clases deben tener una responsabilidad única y acoplamiento bajo.
- Evitar números mágicos y strings hardcodeados; usar constantes con nombre.
- Mantener el código autoexplicativo, usando comentarios solo para el porqué no obvio.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.