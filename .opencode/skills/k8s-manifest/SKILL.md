---
name: k8s-manifest
description: Manifiestos específicos de Kubernetes: YAML, despliegues y servicios
metadata:
  opencode/slash: true
---

# Manifiestos de Kubernetes

## Propósito
Escribir y aplicar manifiestos específicos de Kubernetes en formato YAML para despliegues y servicios. Úsala para definir de forma declarativa los recursos de un clúster de Kubernetes.

## Flujo de trabajo
1. Crear un archivo YAML con el manifiesto de un despliegue (`Deployment`) que defina la imagen, replicas y contenedores del pod.
2. Crear un manifiesto de servicio (`Service`) de tipo ClusterIP, NodePort o LoadBalancer para exponer el despliegue dentro o fuera del clúster.
3. Aplicar los manifiestos al clúster con `kubectl apply -f <archivo>.yaml`.
4. Comprobar que el despliegue creó los pods y que el servicio enruta el tráfico correctamente con `kubectl get` y `kubectl describe`.
5. Actualizar los manifiestos y volver a aplicarlos para modificar la imagen, el número de réplicas o la configuración del servicio.

## Reglas
- Cada manifiesto debe declarar obligatoriamente los campos `apiVersion`, `kind`, `metadata` y `spec`.
- Usar selectores de etiquetas (`selector.matchLabels`) consistentes entre el despliegue y el servicio para que el tráfico llegue a los pods correctos.
- Los nombres de los recursos y las etiquetas deben seguir una convención de nombres clara y coherente en todo el clúster.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.
