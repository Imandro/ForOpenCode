---
name: snowflake
description: Snowflake: almacén de datos, consultas y compartición
metadata:
  opencode/slash: true
---

# Snowflake

## Propósito
Administrar y consultar datos en Snowflake, aprovechando su arquitectura de almacén de datos en la nube, la separación entre almacenamiento y cómputo, y las capacidades de uso compartido de datos.

## Flujo de trabajo
1. Crear y organizar bases de datos, esquemas, tablas, vistas y etapas (stages).
2. Cargar datos mediante etapas internas o externas y comandos COPY INTO.
3. Ejecutar consultas SQL para explorar, transformar y analizar los datos.
4. Configurar almacenes virtuales (warehouses) adecuados al tamaño de la carga de trabajo.
5. Compartir datos de forma segura con otras cuentas mediante Snowflake Data Sharing.
6. Monitorear el consumo de créditos, el rendimiento de consultas y los historiales de acceso.

## Reglas
- Dimensionar los almacenes virtuales según la carga y suspenderlos cuando no se usen.
- Usar clústeres y claves de clustering en tablas grandes para mejorar el rendimiento.
- Aplicar controles de acceso basados en roles (RBAC) y políticas de máscara cuando sea necesario.
- Compartir solo los datos estrictamente necesarios mediante objetos de uso compartido seguros.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.