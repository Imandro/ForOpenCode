---
name: terraform
description: Infraestructura como código con Terraform: recursos, estado y proveedores
metadata:
  opencode/slash: true
---

# Terraform

## Propósito
Definir y aprovisionar infraestructura como código usando Terraform: recursos, estado y proveedores. Úsala para crear, modificar y destruir infraestructura de forma declarativa y repetible.

## Flujo de trabajo
1. Configurar los proveedores necesarios (AWS, Azure, GCP, etc.) en los archivos `.tf`.
2. Escribir bloques de recurso que definan la infraestructura deseada (redes, instancias, bases de datos, etc.).
3. Ejecutar `terraform init` para inicializar el directorio y descargar los proveedores.
4. Ejecutar `terraform plan` para revisar los cambios antes de aplicarlos.
5. Ejecutar `terraform apply` para crear o modificar los recursos según el plan aprobado.

## Reglas
- Almacenar el estado de Terraform en un backend remoto (S3, Azure Blob Storage, GCS, Terraform Cloud) con bloqueo de estado habilitado.
- Nunca incluir credenciales en los archivos `.tf`; usar variables de entorno o secretos gestionados por el proveedor.
- Revisar siempre la salida de `terraform plan` antes de ejecutar `terraform apply`.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.
