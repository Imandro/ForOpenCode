---
name: helm
description: Charts de Helm: paquetes, releases y despliegues en Kubernetes
metadata:
  opencode/slash: true
---

# Helm

## Propósito
Gestionar charts de Helm: paquetes, releases y despliegues en Kubernetes. Úsala para empaquetar, instalar y actualizar aplicaciones en clústeres de Kubernetes de forma reproducible.

## Flujo de trabajo
1. Crear la estructura de un chart de Helm con `helm create <nombre>`: archivos Chart.yaml, values.yaml y plantillas de manifiestos.
2. Personalizar los valores por defecto en `values.yaml` según el entorno (desarrollo, staging, producción).
3. Empaquetar el chart con `helm package <nombre>` y subirlo a un repositorio de Helm si es necesario.
4. Instalar o actualizar una release en el clúster con `helm install <release> <chart>` o `helm upgrade --install <release> <chart>`.
5. Listar releases con `helm list`, revisar el historial con `helm history` y desinstalar con `helm uninstall <release>` cuando ya no se necesite.

## Reglas
- Los valores sensibles (contraseñas, tokens, claves) no deben ir en `values.yaml`; usar secretos de Kubernetes o herramientas de cifrado como Sealed Secrets.
- Cada release debe tener un nombre único dentro del namespace de destino.
- Usar plantillas (`templates/`) con valores parametrizados en lugar de generar manifiestos YAML estáticos para cada entorno.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.
