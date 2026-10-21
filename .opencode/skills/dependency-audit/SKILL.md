---
name: dependency-audit
description: Auditoría de dependencias: vulnerabilidades, versiones y licencias
metadata:
  opencode/slash: true
---

# Auditoría de dependencias

## Propósito
Revisar las dependencias del proyecto para identificar vulnerabilidades de seguridad, versiones desactualizadas y problemas de licencias.

## Flujo de trabajo
1. Listar todas las dependencias del proyecto y sus versiones.
2. Ejecutar herramientas de auditoría de vulnerabilidades (npm audit, pip-audit, etc.).
3. Revisar las vulnerabilidades encontradas y su nivel de severidad.
4. Actualizar dependencias a versiones seguras cuando sea posible.
5. Verificar la compatibilidad de licencias con el proyecto.
6. Documentar los hallazgos y las acciones tomadas.

## Reglas
- No actualizar dependencias sin probar que la aplicación sigue funcionando.
- Priorizar vulnerabilidades de alta y crítica severidad.
- Registrar las dependencias y sus versiones en un archivo de bloqueo (lockfile).
- Revisar licencias para evitar conflictos legales.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.