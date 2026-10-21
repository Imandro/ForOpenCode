---
name: sast
description: Análisis estático de seguridad: detección de vulnerabilidades sin ejecutar código
metadata:
  opencode/slash: true
---

# Análisis Estático de Seguridad (SAST)

## Propósito
Detecta vulnerabilidades de seguridad en el código fuente, bytecode o binarios sin ejecutar la aplicación. Úsala para identificar fallos de seguridad temprano, antes de que el código llegue a producción, integrando el análisis en el ciclo de desarrollo.

## Flujo de trabajo
1. Selecciona el escáner SAST apropiado según el lenguaje y el entorno del proyecto.
2. Configura las reglas de detección y los umbrales de severidad.
3. Ejecuta el análisis sobre el código fuente y las dependencias.
4. Revisa los hallazgos: falsos positivos, vulnerabilidades reales y su ubicación.
5. Corrige los problemas de seguridad siguiendo las recomendaciones del escáner.
6. Integra el escaneo en el pipeline CI/CD para análisis automático en cada cambio.

## Reglas
- No ejecutes la aplicación durante el análisis; SAST es estático por definición.
- Incluye el análisis de código propio y de dependencias de terceros.
- Revisa y ajusta las reglas para reducir falsos positivos sin ocultar riesgos reales.
- Documenta cada vulnerabilidad con severidad, archivo, línea y tipo de fallo.
- Prioriza la corrección de fallos críticos antes de desplegar a producción.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.