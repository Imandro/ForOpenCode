---
name: db-backup
description: Copias de seguridad y restauración de bases de datos
metadata:
  opencode/slash: true
---

# Copias de seguridad de bases de datos

## Propósito
Guía para planificar, ejecutar y probar copias de seguridad y restauración de bases de datos relacionales y NoSQL. Incluye estrategias de backup completo, incremental y diferencial, además de procedimientos de recuperación ante desastres. Úsala para proteger la integridad y disponibilidad de los datos.

## Flujo de trabajo
1. Definir la política de retención y frecuencia de copias de seguridad
2. Elegir tipo de backup (completo, incremental, diferencial)
3. Programar backups automatizados en horarios de bajo tráfico
4. Almacenar copias en ubicación externa o almacenamiento duradero
5. Probar restauración periódicamente para validar integridad
6. Documentar el plan de recuperación (RTO y RPO)

## Reglas
- Nunca almacenar el backup en el mismo disco que la base de datos
- Probar al menos una restauración por trimestre
- Cifrar copias de seguridad que contengan datos sensibles
- Verificar checksums o firmas después de cada backup
- Mantener múltiples generaciones de backups para recuperación punto-a-punto

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.