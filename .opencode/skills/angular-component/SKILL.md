---
name: angular-component
description: Componentes Angular: plantillas, servicios y dependency injection
metadata:
  opencode/slash: true
---

# Componentes Angular

## Propósito
Desarrollar componentes de interfaz con Angular usando plantillas, enlace de datos, servicios y dependency injection (inyección de dependencias). Úsala cuando necesites construir aplicaciones frontend estructuradas, escalables y con arquitectura basada en componentes y servicios.

## Flujo de trabajo
1. Genera un componente con Angular CLI (ng generate component) que incluya clase, plantilla y estilos.
2. Define la plantilla HTML con interpolación {{ }}, enlace de propiedades [], eventos () y directivas estructurales (*ngIf, *ngFor).
3. Crea servicios para lógica de negocio y acceso a datos, y decláralos como proporcionados en root o en el componente.
4. Inyecta dependencias en el constructor del componente o servicio mediante dependency injection.
5. Usa señales (signals) o observables para manejar el estado reactivo y la comunicación entre componentes.

## Reglas
- Un componente debe encargarse de la vista; la lógica de negocio pertenece a los servicios.
- Inyecta servicios en el constructor y Angular los resolverá automáticamente mediante dependency injection.
- Evita lógica compleja en la plantilla; extrae métodos en la clase del componente.
- Usa OnPush para detección de cambios cuando el estado sea inmutable o basado en señales.
- Nombra componentes con el sufijo Component y servicios con el sufijo Service.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.