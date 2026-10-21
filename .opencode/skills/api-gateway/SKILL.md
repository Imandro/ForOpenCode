---
name: api-gateway
description: API Gateway y enrutamiento: proxy, balanceo y transformación
metadata:
  opencode/slash: true
---

# API Gateway

## Propósito
Implementar un punto de entrada único que ruta, hace proxy, balancea carga y transforma solicitudes hacia los servicios backend. Úsala cuando necesites una fachada centralizada para varios microservicios o APIs, con autenticación, límite de tasa y observabilidad compartidos.

## Flujo de trabajo
1. Definir las rutas y los servicios upstream (destinos) de cada ruta.
2. Configurar el proxy inverso y el balanceo de carga entre instancias backend.
3. Aplicar transformación de solicitud y respuesta (rewrite de paths, headers, cuerpos).
4. Autenticar y autorizar en el gateway antes de reenviar al backend.
5. Aplicar límite de tasa, timeouts y reintentos por ruta.
6. Propagar encabezados de rastreo (trace ID) y monitorear el tráfico.

## Reglas
- Usar una única entrada por dominio o punto de acceso público.
- Configurar timeouts y circuito de ruptura para evitar cascadas de fallos.
- No colocar lógica de negocio en el gateway; solo orquestación y transformación.
- Propagar encabezados de correlación (trace ID) a todos los servicios backend.
- Cachéar respuestas estáticas o de lectura frecuente cuando sea apropiado.
- Registrar todas las solicitudes para auditoría y depuración centralizada.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.