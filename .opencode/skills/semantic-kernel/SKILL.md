---
name: semantic-kernel
description: Desarrollo con Semantic Kernel: integración de IA en aplicaciones
metadata:
  opencode/slash: true
---

# Desarrollo con Semantic Kernel

## Propósito
Integra capacidades de inteligencia artificial en aplicaciones existentes usando Microsoft Semantic Kernel. Úsala para conectar modelos de lenguaje con código nativo, plugins y datos empresariales de forma orquestada y segura.

## Flujo de trabajo
1. Instala Semantic Kernel y configura el kernel con el proveedor de modelo de lenguaje elegido.
2. Desarrolla plugins (funciones nativas o semánticas) que expongan capacidades de la aplicación al modelo de lenguaje.
3. Diseña planes que secuencien la ejecución de plugins para resolver objetivos complejos de forma automática.
4. Ejecuta los planes supervisando las llamadas a funciones y validando los resultados intermedios.
5. Despliega la aplicación integrada monitorizando el uso del modelo y el rendimiento de los plugins.

## Reglas
- Valida las entradas y salidas de cada plugin para evitar comportamientos inesperados.
- Limita los plugins expuestos al modelo según el principio de mínimo privilegio.
- No almacenes credenciales en los plugins; usa variables de entorno o almacenes de secretos.
- Documenta cada plugin con su propósito, parámetros y efectos secundarios.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.