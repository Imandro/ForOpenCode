---
name: microservices
description: Arquitectura de microservicios: descomposición y comunicación
metadata:
  opencode/slash: true
---

# Microservicios

## Propósito
Diseñar y construir arquitecturas de microservicios: descomposición por dominio, comunicación síncrona y asíncrona, descoberta de servicios y resiliencia. Úsala cuando una aplicación monolítica se haya vuelto difícil de mantener, escalar o desplegar y necesites dividirla en servicios independientes.

## Flujo de trabajo
1. Identificar dominios del negocio usando DDD y definir límites de contexto.
2. Diseñar un microservicio por cada límite de contexto con su propia base de datos.
3. Elegir la comunicación: síncrona (REST, gRPC) para consultas y asíncrona (eventos, colas) para acoplamiento débil.
4. Implementar descoberta de servicios y balanceo de carga entre instancias.
5. Manejar transacciones distribuidas con patrones como Saga o transacciones compensatorias.
6. Añadir observabilidad (logs, métricas, traces) y health checks en cada servicio.
7. Desplegar cada servicio de forma independiente con contenedores o plataformas de orquestación.

## Reglas
- Un servicio por límite de contexto; evitar servicios que compartan base de datos.
- Cada microservicio es dueño de sus datos; ningún servicio accede directamente a la BD de otro.
- Usar comunicación asíncrona (eventos/colas) para reducir el acoplamiento entre servicios.
- Implementar health checks y circuitos de ruptura para evitar fallos en cascada.
- Versionar los contratos de API y mantener compatibilidad hacia atrás durante migraciones.
- Desplegar y escalar cada servicio de forma independiente.
- Centralizar la observabilidad para rastrear solicitudes entre servicios (trace ID).

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.