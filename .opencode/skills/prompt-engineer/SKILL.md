---
name: prompt-engineer
description: Diseño y optimización de prompts para modelos de lenguaje (LLM)
metadata:
  opencode/slash: true
---

# Ingeniero de Prompts LLM

## Propósito
Diseña, optimiza y prueba prompts (instrucciones) para modelos de lenguaje grandes. Úsala cuando necesites mejorar la calidad, consistencia y seguridad de las respuestas generadas por un LLM mediante técnicas de ingeniería de prompts.

## Flujo de trabajo
1. Define el objetivo, el público objetivo y el formato esperado de la salida del modelo.
2. Escribe un prompt base con instrucciones claras, contexto, ejemplos (few-shot) y restricciones de formato.
3. Prueba el prompt con distintos casos de entrada y evalúa las respuestas generadas.
4. Itera refinando la redacción, añadiendo ejemplos o ajustando la temperatura y otros parámetros de muestreo.
5. Documenta el prompt final, sus variables y los casos de prueba aprobados para reutilización.

## Reglas
- Mantén las instrucciones concisas, específicas y sin ambiguos.
- Incluye ejemplos representativos cuando la tarea requiera un formato de salida concreto.
- Nunca incluyas credenciales, secretos ni datos sensibles reales en los prompts.
- Evalúa siempre el prompt con casos edge antes de usarlo en producción.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.