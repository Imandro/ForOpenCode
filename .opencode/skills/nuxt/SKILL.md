---
name: nuxt
description: Desarrollo con Nuxt.js: páginas, rutas y renderizado Vue
metadata:
  opencode/slash: true
---

# Desarrollo con Nuxt.js

## Propósito
Crear aplicaciones web con Nuxt.js, el framework basado en Vue que ofrece páginas, enrutamiento automático basado en archivos y renderizado del lado del servidor (SSR), generación estática (SSG) y renderizado en el cliente (CSR). Úsala cuando necesites una aplicación Vue con renderizado optimizado y enrutamiento sin configuración manual.

## Flujo de trabajo
1. Crea páginas como archivos .vue en el directorio pages; Nuxt genera las rutas automáticamente.
2. Define rutas dinámicas con nombres de archivo que usen corchetes ([id].vue) y parámetros de ruta.
3. Elige el modo de renderizado por página o globalmente: SSR, SSG o CSR según el caso de uso.
4. Obtén datos con useFetch o useAsyncData en los componentes de página o en middlewares.
5. Usa composables de Nuxt (useRouter, useRoute, useRuntimeConfig) para navegación y configuración.

## Reglas
- El enrutamiento se genera a partir de la estructura de archivos en pages; no declares rutas manualmente salvo que sea necesario.
- Usa componentes de servidor o cliente según necesites interactividad en el navegador.
- Realiza la obtención de datos en el servidor con useFetch para mejorar el SEO y el tiempo de primera carga.
- Usa layouts en el directorio layouts para compartir estructura entre páginas.
- Aprovecha los módulos de Nuxt para añadir funcionalidades (PWA, SEO, imágenes, etc.).

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.