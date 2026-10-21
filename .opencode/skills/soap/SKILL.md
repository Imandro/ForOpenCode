---
name: soap
description: Servicios SOAP: WSDL, envelopes y mensajería XML
metadata:
  opencode/slash: true
---

# SOAP

## Propósito
Implementar servicios web SOAP basados en XML con WSDL, envelopes SOAP y mensajería estructurada para integración empresarial. Úsala cuando debas integrarte con sistemas corporativos legacy que requieran contratos rígidos, tipado fuerte y estándares de mensajería XML.

## Flujo de trabajo
1. Definir el contrato del servicio en un archivo WSDL (tipos, mensajes, operaciones, bindings).
2. Generar el esqueleto del servidor y el stub del cliente a partir del WSDL.
3. Implementar la lógica del servicio en el servidor SOAP.
4. Manejar el envelope SOAP (Header y Body) en cada solicitud y respuesta.
5. Devolver fallos SOAP (`SOAP Fault`) con códigos y mensajes estructurados ante errores.
6. Publicar el endpoint SOAP y probar con herramientas como SoapUI o Postman.

## Reglas
- Usar namespaces XML para evitar colisiones de nombres en el envelope.
- Usar el WSDL como contrato único acordado entre proveedor y consumidor.
- Devolver siempre un `SOAP Fault` estructurado cuando ocurra un error.
- Validar los mensajes XML entrantes contra el XSD definido en el WSDL.
- Usar WS-Security (firma, cifrado, tokens) cuando se requiera confidencialidad o integridad.
- Mantener el endpoint público estable y versionar el WSDL ante cambios rotundos.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.