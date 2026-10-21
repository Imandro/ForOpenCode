---
name: agent-design
description: Diseño de agentes autónomos con herramientas y memoria
metadata:
  opencode/slash: true
---

# Diseño de Agentes Autónomos

## Propósito
Diseña agentes de software autónomos que puedan razonar, planificar, usar herramientas externas y mantener memoria a corto y largo plazo. Úsala cuando necesites un sistema que actúe de forma proactiva para resolver tareas complejas sin intervención humana constante.

## Flujo de trabajo
1. Define el objetivo, las capacidades y las herramientas disponibles del agente (búsquedas, APIs, ejecución de código, etc.).
2. Diseña el bucle de razonamiento: percepción, planificación, acción y observación.
3. Configura la memoria a corto plazo (contexto de conversación) y a largo plazo (base de conocimiento vectorial o similar).
4. Implementa mecanismos de seguridad: validación de entradas, límites de uso de herramientas y revisión humana en acciones críticas.
5. Prueba el agente con escenarios reales y edge cases, iterando sobre sus instrucciones y herramientas.

## Reglas
- Define claramente qué acciones puede y no puede realizar el agente.
- Incluye confirmación humana para acciones que modifiquen datos o ejecuten código externo.
- Limita el número de pasos y el tiempo de ejecución para evitar bucles infinitos.
- Registra todas las acciones del agente para auditoría y depuración.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.