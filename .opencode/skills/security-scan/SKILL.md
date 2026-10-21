---
name: security-scan
description: Escaneo estático de vulnerabilidades (SAST): análisis de código fuente
metadata:
  opencode/slash: true
---

# Escaneo de seguridad estático

## Propósito
Permite realizar análisis estático de código fuente para detectar vulnerabilidades de seguridad sin ejecutar el programa. Úsala antes de commits, en revisiones de código o como parte de un pipeline CI/CD para identificar fallos de seguridad temprano en el ciclo de desarrollo.

## Flujo de trabajo
1. Selecciona el lenguaje de programación y el gestor de dependencias del proyecto.
2. Ejecuta el escáner estático sobre el código fuente y las dependencias.
3. Revisa los hallazgos clasificados por severidad (crítico, alto, medio, bajo).
4. Corrige las vulnerabilidades detectadas siguiendo las recomendaciones de remediación.
5. Vuelve a ejecutar el escaneo para verificar que los problemas se resolvieron.

## Reglas
- No analices código en ejecución; esta skill es exclusivamente estática.
- Incluye siempre el análisis de dependencias y librerías de terceros.
- Documenta cada hallazgo con archivo, línea y tipo de vulnerabilidad.
- No expongas credenciales reales en los reportes de escaneo.
- Prioriza la corrección de vulnerabilidades de severidad crítica y alta.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.