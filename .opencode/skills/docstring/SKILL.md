---
name: docstring
description: Docstrings de código: documentación embebida en funciones y clases
metadata:
  opencode/slash: true
---

# Docstrings de Código

## Propósito
Esta skill guía la escritura de docstrings: documentación embebida dentro del código fuente que describe el propósito, parámetros, valores de retorno, excepciones y ejemplos de uso de funciones, clases, métodos y módulos. Úsala cuando necesites documentar el código de forma que sea accesible tanto para desarrolladores que lean el fuente como para herramientas que generen documentación automática.

## Flujo de trabajo
1. Elige un formato de docstring consistente para el lenguaje y proyecto (por ejemplo, Google, NumPy, reStructuredText/Sphinx para Python; JSDoc para JavaScript/TypeScript).
2. Escribe un docstring en cada módulo, clase, función y método público que explique qué hace y por qué existe.
3. Documenta los parámetros con su nombre, tipo y descripción.
4. Documenta el valor de retorno con su tipo y descripción, incluyendo casos donde no devuelva nada.
5. Lista las excepciones que la función puede lanzar y bajo qué condiciones.
6. Incluye un ejemplo de uso breve cuando la función no sea trivial.
7. Mantén los docstrings actualizados cada vez que cambie la firma o el comportamiento del código.

## Reglas
- Todos los paths dentro de esta skill son relativos al directorio que contiene este SKILL.md.
- Usa el formato de docstring adoptado por el proyecto de forma consistente en todo el código.
- Documenta todos los elementos públicos; los elementos privados pueden documentarse según convención del equipo.
- Incluye tipos de datos para parámetros y valores de retorno cuando el lenguaje lo permita.
- No repitas en el docstring lo que es obvio desde el nombre del parámetro; explica el propósito y las restricciones.
- Evita incluir credenciales, secretos o información sensible en los docstrings.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.