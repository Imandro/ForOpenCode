---
name: test-writer
description: Escritura de pruebas unitarias e integración para validar el comportamiento del código
metadata:
  opencode/slash: true
---

# Escritura de Pruebas

## Propósito
Escribir pruebas unitarias e de integración que validen el comportamiento del código. Se usa cuando se necesita asegurar que una función, módulo o sistema completo funciona correctamente y que los cambios futuros no introduzcan regresiones.

## Flujo de trabajo
1. Identificar las unidades de código y los flujos de integración que necesitan pruebas.
2. Definir casos de prueba que cubran el camino feliz, casos edge y manejo de errores.
3. Escribir pruebas unitarias para funciones y métodos individuales.
4. Escribir pruebas de integración para la interacción entre módulos o con servicios externos.
5. Ejecutar las pruebas y corregir los fallos hasta que todas pasen.
6. Medir la cobertura de prueba y añadir pruebas donde falte cobertura crítica.

## Reglas
- Cada prueba debe ser independiente, repetible y no depender del orden de ejecución.
- Usar nombres descriptivos que indiquen qué se prueba y qué se espera.
- No probar detalles de implementación, sino el comportamiento público y esperado.
- Mockear dependencias externas en pruebas unitarias; usarlas reales en pruebas de integración.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.