---
name: cron
description: Tareas programadas: expresiones cron, intervalos de ejecución y gestión de trabajos periódicos
metadata:
  opencode/slash: true
---

# Tareas programadas

## Propósito
Programar trabajos periódicos mediante expresiones cron y definir intervalos de ejecución para tareas recurrentes del sistema. Úsala cuando necesites ejecutar comandos o scripts de forma automática en momentos específicos o con frecuencia regular.

## Flujo de trabajo
1. Escribe la expresión cron que defina cuándo se ejecutará la tarea (minuto, hora, día, mes, día de la semana).
2. Añade la entrada al crontab del usuario o del sistema con el comando a ejecutar.
3. Verifica la ejecución revisando los logs del servicio cron y el resultado de la tarea.

## Reglas
- Usa rutas absolutas para comandos y scripts dentro de las entradas cron.
- Redirige la salida y los errores de cada tarea a un archivo de registro.
- Prueba la expresión cron con un validador antes de programarla en producción.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.