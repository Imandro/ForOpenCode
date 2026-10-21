---
name: solid-principles
description: Principios SOLID de diseño orientado a objetos
metadata:
  opencode/slash: true
---

# Principios SOLID

## Propósito
Aplicar los cinco principios SOLID de diseño orientado a objetos (Responsabilidad única, Abierto/cerrado, Sustitución de Liskov, Segregación de interfaces, Inversión de dependencias) para crear software mantenible y escalable.

## Flujo de trabajo
1. Revisar el código existente para identificar violaciones de los principios SOLID.
2. Aplicar Responsabilidad Única: cada clase debe tener una sola razón para cambiar.
3. Aplicar Abierto/Cerrado: las entidades deben estar abiertas a extensión pero cerradas a modificación.
4. Aplicar Sustitución de Liskov: las subclases deben ser sustituibles por sus clases base.
5. Aplicar Segregación de Interfaces: los clientes no deben depender de interfaces que no usan.
6. Aplicar Inversión de Dependencias: depender de abstracciones, no de implementaciones concretas.
7. Refactorizar el código y ejecutar los tests para validar los cambios.

## Reglas
- No aplicar SOLID de forma dogmática; usar el principio que aporte valor real.
- Mantener el equilibrio entre abstracción y simplicidad.
- Documentar las decisiones de diseño tomadas al aplicar cada principio.
- Verificar que los tests sigan pasando tras cada refactorización.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.