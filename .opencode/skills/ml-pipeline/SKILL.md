---
name: ml-pipeline
description: Pipelines de entrenamiento e inferencia de Machine Learning
metadata:
  opencode/slash: true
---

# Pipelines de Machine Learning

## Propósito
Diseña e implementa pipelines automatizados de entrenamiento e inferencia de modelos de Machine Learning. Úsala para orquestar la ingesta de datos, preprocesamiento, entrenamiento, evaluación, registro y despliegue de modelos de forma reproducible.

## Flujo de trabajo
1. Define las etapas del pipeline: ingesta, limpieza, transformación, entrenamiento, evaluación y registro del modelo.
2. Implementa cada etapa como un componente modular con entradas y salidas versionadas.
3. Orquesta el pipeline con una herramienta de MLOps (Airflow, Kubeflow, MLflow, etc.) programando ejecuciones periódicas o disparadas por eventos.
4. Registra métricas, artefactos y versiones del modelo en un repositorio centralizado.
5. Despliega el modelo entrenado para inferencia por lotes o en tiempo real, monitorizando su rendimiento.

## Reglas
- Versiona los datos, el código y los modelos para garantizar reproducibilidad.
- Separa los entornos de desarrollo, pruebas y producción.
- Evalúa el modelo en datos no vistos antes de promoverlo a producción.
- Monitoriza el drift de datos y el decayo del rendimiento en inferencia.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.