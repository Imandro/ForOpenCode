---
name: fine-tune
description: Fine-tuning de modelos de lenguaje: datos, entrenamiento y ajuste
metadata:
  opencode/slash: true
---

# Fine-tuning de Modelos de Lenguaje

## Propósito
Ajusta un modelo de lenguaje preentrenado a una tarea o dominio específico mediante fine-tuning supervisado o técnicas de ajuste fino eficientes (LoRA, QLoRA, etc.). Úsala cuando el modelo base no alcance el rendimiento requerido con solo ingeniería de prompts o RAG.

## Flujo de trabajo
1. Recopila y limpia un dataset de pares entrada/salida representativo de la tarea objetivo.
2. Divide el dataset en entrenamiento, validación y prueba sin solapamientos.
3. Selecciona el modelo base y la técnica de fine-tuning (completo, LoRA, QLoRA, adapters).
4. Entrena el modelo ajustando tasa de aprendizaje, epochs, tamaño de batch y otros hiperparámetros.
5. Evalúa en el conjunto de prueba y compara con el modelo base antes de desplegar.

## Reglas
- Usa datos de alta calidad, limpios y sin sesgos no intencionados.
- Separa estrictamente los datos de entrenamiento, validación y prueba.
- Documenta el origen, licencia y tamaño del dataset utilizado.
- Evalúa el modelo ajustado en casos de uso reales antes del despliegue productivo.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.