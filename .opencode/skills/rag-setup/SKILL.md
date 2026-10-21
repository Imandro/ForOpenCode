---
name: rag-setup
description: Configuración de pipelines RAG (retrieval-augmented generation)
metadata:
  opencode/slash: true
---

# Configuración de Pipelines RAG

## Propósito
Configura pipelines de generación aumentada por recuperación (RAG) que combinan un modelo de lenguaje con un sistema de recuperación de información relevante. Úsala cuando necesites que el modelo responda basándose en documentos propios o actualizados sin reentrenarlo.

## Flujo de trabajo
1. Reúne y prepara los documentos fuente (PDF, texto, HTML, Markdown, etc.).
2. Divide los documentos en fragmentos (chunks) con tamaño y solapamiento adecuados.
3. Genera embeddings de cada fragmento y almacénalos en una base de datos vectorial.
4. Implementa la consulta: embed de la pregunta, búsqueda de fragmentos similares y aumento del prompt del LLM con el contexto recuperado.
5. Evalúa la relevancia de los fragmentos recuperados y la calidad de las respuestas generadas.

## Reglas
- Elige un modelo de embeddings adecuado al idioma y dominio de los documentos.
- Ajusta el tamaño de los chunks y el número de resultados recuperados según el caso de uso.
- Incluye metadatos (fuente, fecha, autor) en cada fragmento para rastreabilidad.
- No incluyas información sensible en los documentos indexados sin control de acceso.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.