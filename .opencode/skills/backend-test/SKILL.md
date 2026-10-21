---
name: backend-test
description: Pruebas de backend e integración: APIs, bases de datos y servicios
metadata:
  opencode/slash: true
---

# Pruebas de backend

## Propósito
Escribir pruebas unitarias, de integración y de contrato para APIs, bases de datos y servicios backend. Úsala cuando necesites verificar que el backend funciona correctamente, que los servicios se integran bien y que los contratos de API se respetan.

## Flujo de trabajo
1. Configurar un entorno de prueba aislado (base de datos de prueba, variables de entorno, mocks).
2. Escribir pruebas unitarias para la lógica de negocio y funciones puras.
3. Escribir pruebas de integración de API (por ejemplo con Supertest o HTTP client real).
4. Escribir pruebas de base de datos usando transacciones o rollback entre pruebas.
5. Escribir pruebas de contrato para validar que la API cumple su especificación (OpenAPI).
6. Ejecutar el conjunto de pruebas en cada cambio y en el pipeline de CI.

## Reglas
- Aislar cada prueba para que no dependa del estado ni del orden de ejecución.
- Usar una base de datos de prueba o mocks; nunca la base de datos de producción.
- Mockear servicios externos para evitar llamadas de red reales en pruebas.
- Limpiar o restablecer los datos después de cada prueba.
- Usar aserciones claras y específicas sobre códigos de estado, cuerpos y esquemas.
- Mantener las pruebas rápidas; separar las lentas (integración) de las unitarias.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.