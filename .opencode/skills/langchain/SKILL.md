---
name: langchain
description: Desarrollo de aplicaciones con LangChain: cadenas, agentes y memoria
metadata:
  opencode/slash: true
---

# Desarrollo con LangChain

## Propósito
Desarrolla aplicaciones impulsadas por modelos de lenguaje utilizando el framework LangChain: cadenas de procesamiento, agentes con herramientas y sistemas de memoria. Úsala para construir flujos complejos de IA que combinen LLMs con datos externos y lógica personalizada.

## Flujo de trabajo
1. Instala LangChain y los proveedores de modelos y herramientas que vayas a utilizar.
2. Diseña cadenas (chains) que conecten prompts, modelos de lenguaje y pasos de procesamiento de datos.
3. Configura memoria para mantener el contexto a través de múltiples interacciones con el usuario.
4. Implementa agentes que seleccionen y ejecuten herramientas externas según la tarea solicitada.
5. Prueba, depura y observa la ejecución utilizando LangSmith o herramientas de trazado equivalentes.

## Reglas
- Versiona las cadenas y agentes para facilitar el despliegue y el rollback.
- No expongas claves de API ni secretos en el código; usa variables de entorno.
- Limita las herramientas disponibles a los agentes según el principio de mínimo privilegio.
- Evalúa cada cadena con un conjunto de pruebas antes de integrarla en la aplicación.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.