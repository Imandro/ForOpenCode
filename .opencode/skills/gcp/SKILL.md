---
name: gcp
description: Servicios de Google Cloud Platform: Compute, Storage, Functions y más
metadata:
  opencode/slash: true
---

# Google Cloud Platform

## Propósito
Gestionar servicios de Google Cloud Platform como Compute, Storage, Functions y más. Úsala para aprovisionar recursos de computación, almacenamiento y serverless en la nube de GCP.

## Flujo de trabajo
1. Autenticarse en GCP mediante el CLI (`gcloud auth login`) o una cuenta de servicio con los roles necesarios.
2. Crear instancias de Compute Engine con el tipo de máquina, imagen de arranque y red adecuados para la carga de trabajo.
3. Almacenar datos en buckets de Cloud Storage con clases de almacenamiento y políticas de acceso según el uso y la sensibilidad.
4. Desplegar funciones serverless con Cloud Functions para ejecutar código en respuesta a eventos HTTP, Cloud Storage o Pub/Sub.
5. Supervisar el uso y los costos con Google Cloud Monitoring y Cloud Billing.

## Reglas
- Aplicar el principio de mínimo privilegio en los roles de IAM de GCP para cada cuenta de servicio y usuario.
- Cifrar en reposo y en tránsito los datos sensibles en Cloud Storage, discos persistentes y otros servicios de GCP.
- No incluir claves de cuentas de servicio en el código fuente; usar Workload Identity o Secret Manager para gestionar credenciales.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.
