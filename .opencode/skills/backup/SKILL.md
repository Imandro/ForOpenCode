---
name: backup
description: Copias de seguridad: estrategias de respaldo, procedimientos de restauración y verificación de integridad
metadata:
  opencode/slash: true
---

# Copias de seguridad

## Propósito
Implementar estrategias de respaldo, definir procedimientos de restauración y verificar la integridad de los datos protegidos. Úsala cuando necesites proteger información contra pérdida, corrupción o desastres y garantizar que se pueda recuperar.

## Flujo de trabajo
1. Elige la estrategia de respaldo (completo, incremental o diferencial) y define la frecuencia.
2. Ejecuta la copia de seguridad y almacénala en un destino seguro y separado del origen.
3. Verifica la integridad de la copia y prueba una restauración para confirmar que los datos son recuperables.

## Reglas
- Almacena al menos una copia fuera del sitio principal (off-site).
- Verifica periódicamente que las copias se pueden restaurar correctamente.
- Etiqueta cada copia con fecha, tipo y versión para facilitar la recuperación.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.