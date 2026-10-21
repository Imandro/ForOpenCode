---
name: pwa
description: Progressive Web Apps: service workers, manifiesto y instalación
metadata:
  opencode/slash: true
---

# Progressive Web Apps (PWA)

## Propósito
Convertir una aplicación web en una Progressive Web App capaz de funcionar sin conexión, enviando notificaciones y permitiendo su instalación en la pantalla de inicio del dispositivo. Úsala cuando quieras ofrecer una experiencia similar a una app nativa desde la web.

## Flujo de trabajo
1. Sirve la aplicación mediante HTTPS en todos los entornos.
2. Añade un archivo de manifiesto web (manifest.json) con nombre, iconos, color de tema y URL de inicio.
3. Registra un service worker que intercepte peticiones de red y gestione la caché.
4. Implementa estrategias de caché (cache-first, network-first o stale-while-revalidate) según el recurso.
5. Prueba la instalación, el funcionamiento offline y la actualización del service worker.

## Reglas
- El manifiesto debe incluir name, short_name, start_url, display y al menos un icono de 192x192 y uno de 512x512.
- El service worker solo se registra en contexto seguro (HTTPS o localhost).
- Versiona los nombres de caché y limpia cachés antiguas en el evento activate.
- Proporciona una experiencia de reserva offline para las rutas y recursos críticos.
- Pide permiso al usuario antes de mostrar notificaciones push.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.