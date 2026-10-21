---
name: mysql
description: MySQL/MariaDB: administración, consultas y optimización
metadata:
  opencode/slash: true
---

# MySQL/MariaDB

## Propósito
Guía para administrar, consultar y optimizar bases de datos MySQL y MariaDB: motor InnoDB, índices, consultas, particionamiento, replicación y ajuste de parámetros. Úsala al trabajar con MySQL o MariaDB en entornos de desarrollo o producción.

## Flujo de trabajo
1. Instalar y configurar MySQL/MariaDB (my.cnf, motor InnoDB por defecto)
2. Crear bases de datos, usuarios y otorgar privilegios según principio de menor privilegio
3. Diseñar tablas con tipos de datos adecuados y motor InnoDB
4. Crear índices en columnas de filtrado, unión y ordenamiento
5. Optimizar consultas con EXPLAIN y ajustar parámetros (innodb_buffer_pool_size)
6. Configurar replicación maestro-esclavo y backups automáticos

## Reglas
- Usar InnoDB como motor de almacenamiento por defecto
- Definir claves primarias en todas las tablas
- Evitar SELECT * en consultas de producción
- Configurar sql_mode estricto para validar datos al insertar
- Monitorear el tamaño del buffer de InnoDB y el índice de aciertos

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.