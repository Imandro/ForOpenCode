---
name: rollback
description: Reversión de despliegues: deshacer cambios desplegados y recuperar el estado anterior del sistema
metadata:
  opencode/slash: true
---

# Reversión de despliegues

## Propósito
Deshacer cambios desplegados y recuperar el estado anterior del sistema cuando un despliegue introduce errores, inestabilidad o regressiones. Úsala cuando necesites restaurar rápidamente la operatividad del servicio tras un despliegue fallido.

## Flujo de trabajo
1. Detecta el problema tras el despliegue y decide si es necesario revertir a la versión anterior.
2. Ejecuta el rollback restaurando el artefacto, imagen o configuración del estado previo conocido bueno.
3. Verifica que el servicio recupere la operatividad y confirma que el problema quedó resuelto.

## Reglas
- Mantén siempre una versión anterior desplegada y probada como punto de retorno.
- Prueba el rollback en un entorno de staging antes de aplicarlo en producción.
- Registra el motivo del rollback y el estado restaurado para análisis posterior.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.