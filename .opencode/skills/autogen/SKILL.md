---
name: autogen
description: Desarrollo de agentes conversacionales con AutoGen
metadata:
  opencode/slash: true
---

# Desarrollo con AutoGen

## Propósito
Desarrolla aplicaciones de agentes conversacionales multiagente usando Microsoft AutoGen. Úsala cuando necesites que varios agentes colaboren, debatan y ejecuten tareas de forma autónoma con supervisión humana opcional.

## Flujo de trabajo
1. Define los agentes participantes, sus roles, capacidades y herramientas disponibles (ejecución de código, búsqueda, etc.).
2. Configura el patrón de conversación: chat grupal, secuencia de agentes, transferencia de control (handoff) o revisión humana en el bucle.
3. Implementa los mensajes y funciones que los agentes pueden invocar para coordinarse y actuar.
4. Ejecuta la conversación supervisando las interacciones y aprobando o rechazando acciones críticas.
5. Evalúa la calidad de la colaboración y ajusta las instrucciones de sistema de cada agente.

## Reglas
- Define claramente qué acciones requiere aprobación humana antes de ejecutarse.
- Limita el número máximo de turnos de conversación para evitar bucles infinitos.
- Registra todos los mensajes y llamadas a herramientas para auditoría y depuración.
- No compartas credenciales ni datos sensibles en los mensajes entre agentes.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.