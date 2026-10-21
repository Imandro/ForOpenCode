---
name: ssl-tls
description: Certificados SSL/TLS y configuración HTTPS: TLS, HTTPS y seguridad de transporte
metadata:
  opencode/ssl: true
---

# Certificados SSL/TLS y HTTPS

## Propósito
Configura certificados SSL/TLS y servicios HTTPS para garantizar la seguridad de transporte de datos entre clientes y servidores. Úsala para asegurar comunicaciones cifradas, autenticar servidores y proteger contra ataques de intermediario (man-in-the-middle).

## Flujo de trabajo
1. Obtén o genera un certificado SSL/TLS de una autoridad certificadora (CA) de confianza.
2. Configura el servidor web para usar HTTPS con el certificado y la clave privada.
3. Deshabilita protocolos obsoletos (SSLv2, SSLv3, TLS 1.0, TLS 1.1) y habilita TLS 1.2 y 1.3.
4. Configura suites de cifrado seguras y perfect forward secrecy (PFS).
5. Activa HSTS (HTTP Strict Transport Security) para forzar conexiones HTTPS.
6. Renueva los certificados antes de su expiración y verifica la cadena de confianza.

## Reglas
- Nunca uses certificados autofirmados en entornos de producción sin CA de confianza.
- Deshabilita siempre protocolos y suites de cifrado débiles u obsoletos.
- Protege las claves privadas con permisos restrictivos y no las expongas públicamente.
- Renueva certificados con antelación para evitar interrupciones de servicio.
- Verifica que todos los subdominios y recursos se sirvan sobre HTTPS.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.