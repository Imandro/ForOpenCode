---
name: azure
description: Servicios de Microsoft Azure: VMs, Storage, Functions y más
metadata:
  opencode/slash: true
---

# Azure

## Propósito
Gestionar servicios de Microsoft Azure como VMs, Storage, Functions y más. Úsala para aprovisionar recursos de computación, almacenamiento y serverless en la nube de Azure.

## Flujo de trabajo
1. Autenticarse en Azure mediante el CLI (`az login`) o una entidad de servicio con los permisos necesarios.
2. Crear un grupo de recursos para organizar los recursos relacionados de una misma aplicación o entorno.
3. Aprovisionar máquinas virtuales (VMs) con el tamaño, imagen de sistema operativo y disco adecuados.
4. Configurar cuentas de Azure Storage (Blob, File, Queue, Table) con las reglas de acceso y cifrado correspondientes.
5. Desplegar Azure Functions para ejecutar código sin servidor en respuesta a triggeres HTTP, temporizadores o eventos de otros servicios de Azure.

## Reglas
- Usar Azure RBAC para asignar permisos basados en roles al grupo de recursos o a recursos individuales.
- Habilitar el cifrado de datos en reposo y en tránsito en Azure Storage y en los discos de las máquinas virtuales.
- No almacenar claves de acceso ni cadenas de conexión en el código; usar Azure Key Vault para gestionar secretos.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.
