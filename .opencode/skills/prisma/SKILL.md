---
name: prisma
description: ORM Prisma: schema, migraciones y consultas tipadas
metadata:
  opencode/slash: true
---

# ORM Prisma

## Propósito
Guía para usar Prisma ORM: definición del esquema Prisma, generación de cliente tipado, migraciones de base de datos y consultas con TypeScript. Úsala en aplicaciones Node.js/TypeScript que requieran acceso tipado a bases de datos relacionales.

## Flujo de trabajo
1. Instalar Prisma CLI y el cliente Prisma en el proyecto
2. Definir el modelo de datos en schema.prisma con datasource y generator
3. Ejecutar prisma migrate dev para crear la migración inicial
4. Generar el cliente con prisma generate
5. Escribir consultas tipadas usando el cliente Prisma (findUnique, create, update, delete)
6. Aplicar migraciones en producción con prisma migrate deploy

## Reglas
- Usar PascalCase para nombres de modelos y camelCase para campos
- Mantener el archivo schema.prisma como fuente de verdad del esquema
- Ejecutar prisma generate después de cada cambio en el schema
- No editar manualmente los archivos de migración generados
- Usar transacciones ($transaction) para operaciones atómicas múltiples

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.