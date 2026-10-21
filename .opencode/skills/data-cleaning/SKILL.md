---
name: data-cleaning
description: Limpieza y normalización de datos: valores faltantes y duplicados
metadata:
  opencode/slash: true
---

# Limpieza y Normalización de Datos

## Propósito
Preparar conjuntos de datos para el análisis eliminando problemas de calidad como valores faltantes, duplicados, formatos inconsistentes y registros erróneos, garantizando datos fiables y listos para consumir.

## Flujo de trabajo
1. Inspeccionar el dataset: tipos de datos, nulos, duplicados y valores atípicos.
2. Tratar valores faltantes mediante imputación, eliminación o marcado explícito según el contexto.
3. Detectar y eliminar registros duplicados basándose en claves de negocio.
4. Normalizar formatos de fechas, texto, códigos y valores categóricos.
5. Validar rangos, restricciones y reglas de negocio sobre los datos limpiados.
6. Documentar las transformaciones aplicadas y generar un reporte de calidad de datos.

## Reglas
- Nunca alterar los datos de origen sin registro de los cambios realizados.
- Documentar criterios de eliminación o imputación de valores faltantes.
- Usar claves de negocio estables para identificar duplicados.
- Verificar que la limpieza no introduce sesgos en el análisis posterior.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.