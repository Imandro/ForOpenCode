---
name: typeorm
description: ORM TypeORM: entidades, repositorios y relaciones
metadata:
  opencode/slash: true
---

# ORM TypeORM

## Propósito
Guía para usar TypeORM: definición de entidades con decoradores, repositorios, relaciones entre entidades, migraciones y consultas con QueryBuilder. Úsala en aplicaciones TypeScript/JavaScript que necesiten un ORM completo para bases de datos relacionales.

## Flujo de trabajo
1. Instalar TypeORM y el controlador de base de datos correspondiente
2. Configurar la conexión en ormconfig.ts o mediante DataSource
3. Crear entidades con decoradores (@Entity, @PrimaryGeneratedColumn, @Column)
4. Definir relaciones (@OneToOne, @OneToMany, @ManyToOne, @ManyToMany)
5. Usar repositorios para consultas (find, findOne, save, remove)
6. Crear y ejecutar migraciones con typeorm migration:run

## Reglas
- Usar DataSource en lugar de la conexión global heredada
- Definir relaciones con ambos lados (inverseSide y owner side) cuando sea bidireccional
- Usar transacciones del QueryRunner para operaciones atómicas
- No cargar relaciones innecesariamente; usar join o relations selectivamente
- Generar migraciones con typeorm migration:generate antes de aplicarlas

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.