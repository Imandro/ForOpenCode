---
name: debug
description: Depuración y análisis de errores: stack traces, logs y diagnóstico de fallos
metadata:
  opencode/slash: true
---

# Depuración y Análisis de Errores

## Propósito
Depurar y analizar errores en el software mediante stack traces, logs y otras técnicas de diagnóstico. Se usa cuando se necesita encontrar la causa raíz de un fallo, excepción o comportamiento inesperado.

## Flujo de trabajo
1. Reproducir el error de forma consistente en un entorno controlado.
2. Recopilar los logs relevantes y el stack trace del fallo.
3. Identificar el punto exacto donde se produce el error en el código.
4. Añadir puntos de interrupción o sentencias de registro para inspeccionar el estado.
5. Determinar la causa raíz del fallo y proponer una corrección.
6. Aplicar la corrección y verificar que el error no reaparece ni se introducen regresiones.

## Reglas
- No modificar el código de producción para depurar sin entender primero la causa raíz.
- Conservar los logs y stack traces como evidencia del diagnóstico.
- Probar la corrección con el caso que generó el error y con casos edge relacionados.
- Documentar el hallazgo y la solución para referencia futura del equipo.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.