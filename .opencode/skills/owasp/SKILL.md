---
name: owasp
description: Revisión contra OWASP Top 10: riesgos críticos de seguridad web
metadata:
  opencode/slash: true
---

# Revisión OWASP Top 10

## Propósito
Evalúa una aplicación web contra los 10 riesgos críticos de seguridad definidos por OWASP (Open Web Application Security Project). Úsala para identificar y mitigar las amenazas más comunes en aplicaciones web, como inyecciones, fallos de autenticación y exposición de datos sensibles.

## Flujo de trabajo
1. Identifica los componentes de la aplicación web (frontend, backend, APIs).
2. Revisa cada uno de los 10 riesgos del OWASP Top 10 contra la aplicación.
3. Verifica controles de entrada, autenticación, autorización y manejo de errores.
4. Documenta los riesgos presentes y ausentes con evidencia técnica.
5. Aplica las medidas de mitigación recomendadas por OWASP para cada riesgo detectado.

## Reglas
- Cubre los 10 riesgos actuales del OWASP Top 10 sin omitir ninguno.
- Evalúa tanto la capa cliente como la capa servidor y las APIs intermedias.
- No considers un riesgo como mitigado sin evidencia de controles implementados.
- Mantén la revisión actualizada con la versión más reciente del OWASP Top 10.
- Prioriza la corrección de riesgos que expongan datos de usuarios o credenciales.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.