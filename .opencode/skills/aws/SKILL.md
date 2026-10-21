---
name: aws
description: Servicios de Amazon Web Services: EC2, S3, Lambda y más
metadata:
  opencode/slash: true
---

# AWS

## Propósito
Gestionar servicios de Amazon Web Services como EC2, S3, Lambda y más. Úsala para aprovisionar recursos de computación, almacenamiento y serverless en la nube de AWS.

## Flujo de trabajo
1. Configurar las credenciales de AWS mediante el CLI (`aws configure`) o variables de entorno (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`).
2. Crear instancias EC2 con el tipo de instancia, AMI y grupo de seguridad adecuados para la carga de trabajo.
3. Almacenar objetos en buckets S3 con políticas de acceso y cifrado apropiados según la sensibilidad de los datos.
4. Desplegar funciones Lambda sin servidor para ejecutar código en respuesta a eventos (S3, API Gateway, CloudWatch Events, etc.).
5. Monitorear el uso y los costos de los servicios con AWS CloudWatch y AWS Cost Explorer.

## Reglas
- Aplicar el principio de mínimo privilegio en las políticas de IAM: conceder solo los permisos necesarios para cada recurso.
- Cifrar en reposo y en tránsito los datos sensibles almacenados en S3, EBS y otros servicios de AWS.
- No dejar credenciales de AWS hardcodeadas en el código ni en variables de entorno del código fuente; usar roles de IAM o secretos gestionados.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.
