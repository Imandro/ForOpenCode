---
name: llm-eval
description: Evaluación y benchmarking de modelos LLM: métricas, datasets y comparación
metadata:
  opencode/slash: true
---

# Evaluación y Benchmarking de LLM

## Propósito
Ejecuta evaluaciones cuantitativas y cualitativas de modelos de lenguaje grandes. Úsala para medir precisión, robustez, toxicidad, latencia y coste, y para comparar diferentes modelos o versiones sobre datasets de referencia.

## Flujo de trabajo
1. Selecciona los datasets y métricas adecuados al caso de uso (exactitud, F1, BLEU, ROUGE, puntuación humana, etc.).
2. Ejecuta las inferencias del modelo sobre el dataset de evaluación registrando entradas, salidas y metadatos.
3. Calcula las métricas seleccionadas y compara resultados entre modelos o versiones candidatas.
4. Analiza los errores y casos de fallo para identificar patrones y áreas de mejora.
5. Documenta los hallazgos y decide qué modelo o versión desplegar en producción.

## Reglas
- Usa un dataset de prueba separado del dataset de entrenamiento para evitar fugas de información.
- Registra semillas, versiones del modelo y parámetros de inferencia para reproducibilidad.
- Incluye métricas de seguridad y sesgo además de las métricas de rendimiento.
- Valida los resultados con revisión humana cuando las métricas automáticas no sean suficientes.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.