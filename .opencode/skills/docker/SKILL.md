---
name: docker
description: Imágenes Docker y Docker Compose: contenedores, redes y volúmenes
metadata:
  opencode/slash: true
---

# Docker

## Propósito
Gestionar imágenes Docker, contenedores, redes y volúmenes con Docker Compose. Úsala para construir, ejecutar y orquestar entornos contenedorizados de forma local y en servidores.

## Flujo de trabajo
1. Escribir un Dockerfile para definir la imagen de la aplicación.
2. Construir la imagen con `docker build` y etiquetarla con un nombre y versión.
3. Definir servicios, redes y volúmenes en un archivo `docker-compose.yml`.
4. Levantar el entorno con `docker compose up -d` y verificar los contenedores en ejecución.
5. Detener y eliminar recursos con `docker compose down` cuando ya no se necesiten.

## Reglas
- Las imágenes deben usar etiquetas versionadas en lugar de `latest` en entornos productivos.
- Nunca incluir secretos en el Dockerfile ni en el archivo `docker-compose.yml`; usar variables de entorno o secretos de Docker.
- Los datos persistentes deben almacenarse en volúmenes nombrados, no en capas del contenedor.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.
