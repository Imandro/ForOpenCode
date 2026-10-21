---
name: ionic
description: Apps híbridas con Ionic: web views, componentes y Capacitor
metadata:
  opencode/slash: true
---

# Apps híbridas con Ionic

## Propósito
Esta skill guía el desarrollo de aplicaciones híbridas móviles con Ionic, cubriendo web views, componentes de interfaz y la integración con Capacitor. Úsala cuando necesites crear apps para iOS y Android usando tecnologías web (HTML, CSS, JavaScript/TypeScript) dentro de un contenedor nativo.

## Flujo de trabajo
1. Crea el proyecto con `ionic start` eligiendo un framework de interfaz (Angular, React, Vue o JavaScript puro).
2. Construye la interfaz con componentes de Ionic (`ion-page`, `ion-header`, `ion-content`, `ion-list`, `ion-item`, `ion-button`, `ion-modal`).
3. Aplica los temas de Ionic (claro/oscuro) y personaliza con CSS variables y clases de utilidad.
4. Implementa navegación con el router del framework elegido (Angular Router, React Router, Vue Router) y outlets de Ionic (`ion-router-outlet`).
5. Integra Capacitor para acceder a APIs nativas (cámara, geolocalización, archivos, notificaciones, almacenamiento) desde JavaScript.
6. Sincroniza la web con plataformas nativas usando `npx cap add ios/android` y `npx cap open ios/android`.
7. Ejecuta en navegador con `ionic serve`, en emulador/dispositivo con `npx cap run ios/android`, y compila para producción con `ionic build`.

## Reglas
- No acceder directamente a APIs nativas del dispositivo sin pasar por Capacitor o plugins Cordova compatibles.
- Probar tanto en navegador (desarrollo rápido) como en dispositivos reales (comportamiento nativo real).
- Mantener el código web separado del código nativo; la lógica de negocio debe vivir en la capa web.
- Usar componentes de Ionic para garantizar una apariencia coherente y adaptable en iOS y Android.
- Gestionar el ciclo de vida de la web view y pausar/reanudar procesos cuando la app pase a segundo plano.
- Configurar `capacitor.config.ts` con el ID de la app, nombre y servidor web antes de agregar plataformas nativas.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.