---
name: error-handling
description: Manejo de errores y excepciones: try/catch, validación y recupero
metadata:
  opencode/slash: true
---

# Manejo de errores

## Propósito
Implementar un manejo adecuado de errores y excepciones usando try/catch, validación de entradas y estrategias de recuperación para hacer el código más robusto.

## Flujo de trabajo
1. Identificar los puntos donde pueden ocurrir errores (E/S, red, base de datos, entrada de usuario).
2. Envolver el código crítico en bloques try/catch o equivalentes.
3. Validar las entradas de usuario y datos externos antes de procesarlos.
4. Definir estrategias de recuperación (reintento, valor por defecto, fallo silencioso).
5. Registrar los errores con suficiente contexto para su depuración.
6. Probar los flujos de error para verificar el comportamiento adecuado.

## Reglas
- No tragar errores silenciosamente sin registrar al menos una advertencia.
- Usar tipos de excepción específicos en lugar de excepciones genéricas.
- Validar entradas en los límites del sistema (APIs, formularios, archivos).
- Proporcionar mensajes de error claros y útiles para el usuario final.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.