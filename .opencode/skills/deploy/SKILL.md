---
name: deploy
description: Despliegue de aplicaciones: gestión de entornos, despliegues de versiones y rollbacks controlados
metadata:
  opencode/slash: true
---

# Despliegue de aplicaciones

## Propósito
Gestionar entornos de despliegue, publicar nuevas versiones de aplicaciones y realizar rollbacks controlados cuando algo sale mal. Úsala cuando necesites llevar código de desarrollo a producción de forma segura y repetible.

## Flujo de trabajo
1. Prepara el artefacto o imagen en el entorno de integración y valídalo con pruebas.
2. Despliega la versión en el entorno de destino (staging o producción) siguiendo el procedimiento definido.
3. Verifica que la aplicación esté operativa mediante health checks y monitorea su comportamiento tras el despliegue.

## Reglas
- Despliega primero en un entorno de prueba antes de hacerlo en producción.
- Mantén disponible una versión anterior funcional para permitir rollback rápido.
- Documenta cada despliegue con versión, fecha, autor y cambios incluidos.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.