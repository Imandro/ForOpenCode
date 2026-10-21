---
name: frontend-test
description: Pruebas frontend: unitarias, de integración y end-to-end
metadata:
  opencode/slash: true
---

# Pruebas frontend

## Propósito
Verificar el correcto funcionamiento de la interfaz de usuario mediante pruebas unitarias, de integración y end-to-end. Úsala cuando necesites detectar regresiones, validar el comportamiento de componentes y asegurar que los flujos críticos de la aplicación funcionen como se espera.

## Flujo de trabajo
1. Escribe pruebas unitarias para funciones aisladas, utilidades y hooks personalizados.
2. Crea pruebas de integración para verificar la interacción entre varios componentes y servicios.
3. Desarrolla pruebas end-to-end que recorran flujos completos de usuario en el navegador.
4. Ejecuta las pruebas en cada cambio y configura un proceso de integración continua.
5. Revisa la cobertura de pruebas y prioriza las rutas críticas del negocio.

## Reglas
- Una prueba debe verificar una sola cosa y tener un nombre descriptivo.
- No dependas de estados compartidos entre pruebas; aísla cada caso de prueba.
- Usa mocks o spies para llamadas a APIs, temporizadores y efectos secundarios.
- Las pruebas end-to-end deben cubrir los flujos principales, no cada combinación posible.
- Ejecuta las pruebas unitarias y de integración en cada commit; las end-to-end en preproducción.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.