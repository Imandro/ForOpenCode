---
name: capacitor
description: Apps Capacitor: acceso a APIs nativas desde web
metadata:
  opencode/slash: true
---

# Apps Capacitor: acceso a APIs nativas desde web

## Propósito
Esta skill guía el uso de Capacitor para ejecutar aplicaciones web dentro de un contenedor nativo y acceder a APIs nativas del dispositivo (cámara, archivos, geolocalización, notificaciones, etc.) desde JavaScript. Úsala cuando necesites convertir una app web existente en una app móvil nativa para iOS y Android sin reescribirla completamente.

## Flujo de trabajo
1. Instala Capacitor en tu proyecto web con `npm install @capacitor/core @capacitor/cli`.
2. Inicializa Capacitor con `npx cap init` definiendo nombre de la app e ID de paquete.
3. Agrega las plataformas nativas con `npx cap add ios` y `npx cap add android`.
4. Compila los assets web con el comando de build de tu framework (`npm run build`, `vite build`, `ng build`, etc.).
5. Sincroniza el código web con los proyectos nativos usando `npx cap sync` o `npx cap copy`.
6. Instala y configura plugins de Capacitor según las APIs nativas necesarias (por ejemplo, `@capacitor/camera`, `@capacitor/geolocation`, `@capacitor/filesystem`).
7. Abre los proyectos nativos con `npx cap open ios` o `npx cap open android` para compilar, firmar y desplegar en emuladores o dispositivos físicos.

## Reglas
- Capacitor no es un web view independiente: requiere un proyecto web compilado que se incrusta en la app nativa.
- Siempre ejecutar `npx cap sync` después de instalar un plugin o de compilar la web antes de abrir el proyecto nativo.
- Las llamadas a plugins Capacitor son asíncronas y devuelven Promesas; manejar errores con `try/catch` o `.catch()`.
- Solicitar permisos de plataforma en tiempo de ejecución antes de usar plugins que los requieran (cámara, ubicación, contacto).
- No modificar directamente el código nativo generado por Capacitor; los cambios deben hacerse en la web y sincronizarse con `cap sync`.
- Probar en dispositivos reales, ya que algunos plugins no funcionan en emuladores o en el navegador de escritorio.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.