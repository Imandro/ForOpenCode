---
name: cli-tool
description: Herramientas de línea de comandos: manejo de argumentos, flags, opciones y salida de texto
metadata:
  opencode/slash: true
---

# Herramientas de línea de comandos

## Propósito
Crear y utilizar herramientas de línea de comandos que acepten argumentos, flags y opciones, y que produzcan salida de texto clara y estructurada. Úsala cuando necesites construir utilidades CLI, procesar parámetros de entrada o generar resultados imprimibles por consola.

## Flujo de trabajo
1. Define los argumentos posicionales y las flags (opciones con y sin valor) que aceptará la herramienta.
2. Implementa el parseo de argumentos y la validación de los valores de entrada.
3. Ejecuta la lógica principal y emite la salida por stdout, enviando errores a stderr con códigos de salida apropiados.

## Reglas
- Usa códigos de salida 0 para éxito y distintos de cero para errores.
- Escribe mensajes de error a stderr y resultados normales a stdout.
- Documenta cada flag y argumento con una ayuda clara (`--help`).

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.