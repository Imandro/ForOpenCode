---
name: code-review
description: Revisión de código: seguridad, estilo, pruebas y documentación antes de commitear
metadata:
  opencode/slash: true
---

# Revisión de Código

## Propósito
Revisar el código fuente antes de commitear para detectar problemas de seguridad, estilo, cobertura de pruebas y documentación faltante. Se usa como paso de control de calidad previo a integrar cambios en la rama principal.

## Flujo de trabajo
1. Leer el diff completo de los cambios propuestos para entender su alcance.
2. Verificar que no haya vulnerabilidades de seguridad ni secretos expuestos.
3. Comprobar que el código respeta las convenciones de estilo y formateo del proyecto.
4. Validar que exista cobertura de pruebas para la nueva funcionalidad o corrección.
5. Confirmar que los cambios estén documentados (comentarios, README, API docs si aplica).
6. Aprobar, solicitar cambios o rechazar el commit según los hallazgos.

## Reglas
- Nunca commitear código sin revisarlo primero si el proyecto requiere revisión obligatoria.
- Cualquier hallazgo de seguridad crítico debe bloquear el commit hasta su corrección.
- Las nuevas funciones deben incluir pruebas que validen su comportamiento.
- La documentación pública de la API debe actualizarse junto con el código.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.