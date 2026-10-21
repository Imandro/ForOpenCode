---
name: dast
description: Análisis dinámico de seguridad (DAST): pruebas en ejecución contra aplicaciones
metadata:
  opencode/slash: true
---

# Análisis Dinámico de Seguridad (DAST)

## Propósito
Ejecuta pruebas de seguridad contra una aplicación en funcionamiento para detectar vulnerabilidades que solo se manifiestan en tiempo de ejecución. Úsala para validar la seguridad de la aplicación desde el exterior, sin acceso al código fuente, simulando ataques reales.

## Flujo de trabajo
1. Despliega la aplicación en un entorno de pruebas o staging representativo.
2. Configura el escáner DAST con la URL objetivo y credenciales de prueba si es necesario.
3. Ejecuta el escaneo dinámico para descubrir endpoints, parámetros y puntos de entrada.
4. Ejecuta pruebas de inyección, autenticación, autorización y manejo de sesiones.
5. Revisa los hallazgos y valida si son vulnerabilidades reales o falsos positivos.
6. Corrige los problemas detectados y repite el escaneo para verificar la remediación.

## Reglas
- No ejecutes escaneos DAST contra entornos de producción sin autorización explícita.
- Usa un entorno de staging aislado para evitar impactos en usuarios reales.
- Documenta cada hallazgo con evidencia de la solicitud y respuesta HTTP.
- Combina DAST con SAST para cobertura estática y dinámica completa.
- Respeta los alcances y reglas de compromiso definidos antes de iniciar las pruebas.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.