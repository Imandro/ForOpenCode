---
name: automation
description: Automatización de tareas: definición de flujos, triggers y programación de tareas recurrentes
metadata:
  opencode/slash: true
---

# Automatización de tareas

## Propósito
Definir flujos de trabajo automatizados, configurar triggers que los inicien y programar tareas recurrentes para reducir el esfuerzo manual en operaciones repetitivas. Úsala cuando necesites encadenar acciones y ejecutarlas de forma automática según condiciones o horarios.

## Flujo de trabajo
1. Identifica la tarea repetitiva y define los pasos que componen el flujo de trabajo.
2. Configura el trigger o evento que iniciará el flujo (horario, archivo, webhook, etc.).
3. Programa, prueba y activa la automatización, verificando que se ejecute correctamente en cada disparo.

## Reglas
- Cada flujo debe tener un punto de inicio claro y un resultado definido.
- Registra (log) la ejecución de cada tarea para auditoría y depuración.
- Evita dependencias circulares entre tareas automatizadas.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.