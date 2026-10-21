---
name: embedding
description: Generación y uso de embeddings vectores para búsqueda semántica
metadata:
  opencode/slash: true
---

# Embeddings Vectores para Búsqueda Semántica

## Propósito
Genera y utiliza representaciones vectoriales (embeddings) de texto, imágenes u otros datos para permitir búsquedas semánticas, clustering y sistemas de recomendación. Úsala cuando necesites encontrar elementos similares por significado en lugar de por coincidencia exacta de palabras.

## Flujo de trabajo
1. Selecciona un modelo de embeddings adecuado al idioma, dominio y tipo de dato (texto, imagen, audio).
2. Preprocesa los datos (limpieza, tokenización, truncado) según los requisitos del modelo.
3. Genera los vectores de embedding para cada elemento y almacénalos con sus metadatos asociados.
4. Implementa consultas de búsqueda semántica: embed de la consulta y comparación de similitud cosíneo o euclídea contra los vectores almacenados.
5. Evalúa la calidad de los resultados recuperados y ajusta el modelo o el umbral de similitud si es necesario.

## Reglas
- Normaliza los vectores antes de calcular similitudes si el modelo no lo hace internamente.
- Usa el mismo modelo de embeddings para indexar los datos y para las consultas.
- Documenta la dimensión de los vectores y el modelo utilizado para reproducibilidad.
- Protege los embeddings que puedan revelar información sensible de los datos originales.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.