---
name: vector-db
description: Bases de datos vectoriales: almacenamiento y consulta de embeddings
metadata:
  opencode/slash: true
---

# Bases de Datos Vectoriales

## Propósito
Configura y utiliza bases de datos vectoriales para almacenar, indexar y consultar embeddings de forma eficiente. Úsala como componente de sistemas RAG, búsqueda semántica o recomendación que requieran recuperación rápida de vectores similares a gran escala.

## Flujo de trabajo
1. Selecciona una base de datos vectorial (Pinecone, Milvus, Qdrant, Weaviate, pgvector, Chroma, etc.) según volumen, latencia y requisitos de integración.
2. Define el esquema: vectores, metadatos filtrables y funciones de distancia (cosíneo, euclídea, producto punto).
3. Importa los embeddings generados junto con sus metadatos asociados.
4. Implementa consultas de búsqueda por similitud con filtros de metadatos y paginación de resultados.
5. Monitorea el rendimiento de consultas, el uso de almacenamiento y actualiza los índices periódicamente.

## Reglas
- Elige la función de distancia adecuada al tipo de embedding y al caso de uso.
- Indexa los metadatos que se usarán frecuentemente como filtros en las consultas.
- Realiza copias de seguridad de los vectores y metadatos almacenados.
- Controla el acceso a la base de datos vectorial con autenticación y autorización adecuadas.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.