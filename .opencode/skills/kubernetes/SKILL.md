---
name: kubernetes
description: Manifiestos y despliegues en Kubernetes: pods, servicios y despliegues
metadata:
  opencode/slash: true
---

# Kubernetes

## Propósito
Desplegar y gestionar aplicaciones en clústeres de Kubernetes mediante manifiestos de pods, servicios y despliegues. Úsala para definir el estado deseado de cargas de trabajo contenedorizadas en un clúster.

## Flujo de trabajo
1. Crear manifiestos YAML para los pods, despliegues y servicios de la aplicación.
2. Aplicar los manifiestos al clúster con `kubectl apply -f <archivo>.yaml`.
3. Verificar el estado de los recursos con `kubectl get pods`, `kubectl get services` y `kubectl get deployments`.
4. Exponer la aplicación mediante un servicio de tipo ClusterIP, NodePort o LoadBalancer según sea necesario.
5. Actualizar la imagen del despliegue con `kubectl set image` o aplicando un manifiesto modificado.

## Reglas
- Cada manifiesto debe incluir los campos `apiVersion`, `kind`, `metadata` y `spec`.
- Usar selectores de etiquetas consistentes entre despliegues y servicios para enrutar el tráfico correctamente.
- Definir límites y solicitudes de recursos (CPU y memoria) en los contenedores de los pods.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.
