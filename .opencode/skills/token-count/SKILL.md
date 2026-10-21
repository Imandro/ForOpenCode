---
name: token-count
description: Conteo y optimización de tokens de contexto para LLMs
metadata:
  opencode/slash: true
---

# Conteo y Optimización de Tokens

## Propósito
Cuenta y optimiza el uso de tokens de contexto en modelos de lenguaje grandes. Úsala para gestionar límites de contexto, reducir costes de inferencia y evitar que los prompts excedan la capacidad del modelo.

## Flujo de trabajo
1. Identifica el modelo de LLM y su límite máximo de tokens de contexto.
2. Cuenta los tokens del prompt, las respuestas esperadas y el contexto disponible utilizando el tokenizer correspondiente al modelo.
3. Optimiza el contexto resumiendo, truncando o comprimiendo los datos de entrada sin perder información crítica.
4. Divide textos largos en chunks o implementa estrategias de ventana deslizante cuando el contenido supere el límite.
5. Monitorea el consumo de tokens en producción para controlar costes y rendimiento.

## Reglas
- Usa el tokenizer exacto del modelo objetivo para contar tokens de forma precisa.
- Reserva tokens para la respuesta generada además de los del prompt.
- No trunque fragmentos a mitad de palabra o sentencia sin considerar el impacto en el significado.
- Documenta el presupuesto de tokens asignado a cada parte del prompt.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.