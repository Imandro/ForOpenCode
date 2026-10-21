---
name: mongodb
description: MongoDB: documentos, colecciones y consultas NoSQL
metadata:
  opencode/slash: true
---

# MongoDB

## Propósito
Guía para trabajar con MongoDB: modelado de documentos, colecciones, consultas, agregaciones, índices y replicación. Úsala cuando necesites una base de datos de documentos con esquema flexible y escalabilidad horizontal.

## Flujo de trabajo
1. Diseñar documentos embebidos o referenciados según patrones de acceso
2. Crear colecciones y definir reglas de validación de esquemas
3. Escribir consultas con operadores de comparación y lógica
4. Crear índices simples, compuestos y de texto para optimizar lecturas
5. Usar el framework de agregación para transformar y resumir datos
6. Configurar sharding y réplicas para escalabilidad y disponibilidad

## Reglas
- Embebir documentos relacionados pequeños y de acceso frecuente
- Referenciar documentos grandes o con ciclo de vida independiente
- Indexar campos usados frecuentemente en filtros y ordenamientos
- No almacenar documentos mayores a 16 MB; usar GridBinary para archivos grandes
- Considerar consistencia eventual en lecturas desde réplicas secundarias

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.