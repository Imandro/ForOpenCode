---
name: ci-cd
description: Pipelines de integración y despliegue continuo: build, test y deploy
metadata:
  opencode/slash: true
---

# CI/CD

## Propósito
Diseñar y ejecutar pipelines de integración y despliegue continuo que abarquen build, test y deploy. Úsala para automatizar la compilación, pruebas y entrega de software en entornos de desarrollo y producción.

## Flujo de trabajo
1. Configurar un pipeline que se active ante cada push o pull request en el repositorio.
2. Ejecutar el paso de build: compilar el código, generar artefactos y empaquetar imágenes o binarios.
3. Ejecutar el paso de test: pruebas unitarias, de integración y análisis estático de calidad.
4. Ejecutar el paso de deploy: desplegar los artefactos en entornos de staging o producción tras aprobar las pruebas.
5. Notificar el resultado del pipeline al equipo mediante correo, chat o el sistema de gestión de incidencias.

## Reglas
- Cada cambio debe pasar por el paso de test antes de poder desplegarse en cualquier entorno.
- Los despliegues en producción requieren aprobación manual o gates de calidad previos.
- Mantener los entornos de build, test y deploy lo más parecidos posible entre sí para evitar sorpresas en producción.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.
