---
name: refactor
description: Refactorización de código: mejora la estructura sin cambiar el comportamiento
metadata:
  opencode/slash: true
---

# Refactorización de Código

## Propósito
Mejorar la estructura interna del código sin alterar su comportamiento externo. Se usa cuando el código es difícil de leer, mantener o extender, y se quiere reducir la complejidad, eliminar duplicados o simplificar diseño.

## Flujo de trabajo
1. Identificar el código a refactorizar y entender su comportamiento actual.
2. Verificar que existan pruebas que cubran el código antes de modificarlo.
3. Aplicar transformaciones pequeñas y seguras: extraer método, renombrar, mover clase, eliminar duplicados, simplificar condicionales.
4. Ejecutar las pruebas después de cada cambio para confirmar que el comportamiento no cambia.
5. Repetir hasta alcanzar una estructura más clara y mantenible.
6. Commitear los cambios de refactorización por separado de los cambios funcionales.

## Reglas
- Nunca cambiar el comportamiento externo del código durante una refactorización.
- Cada paso de refactorización debe ir acompañado de ejecución de pruebas.
- No mezclar refactorización con corrección de bugs o nuevas funcionalidades en el mismo commit.
- Mantener la misma API pública y los mismos contratos de entrada y salida.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.