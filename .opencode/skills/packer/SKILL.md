---
name: packer
description: Imágenes de máquina con Packer: AMIs, Docker y provisioning
metadata:
  opencode/slash: true
---

# Packer

## Propósito
Crear imágenes de máquina con Packer: AMIs, Docker y provisioning. Úsala para generar imágenes idénticas para múltiples plataformas a partir de una sola configuración.

## Flujo de trabajo
1. Escribir un archivo de configuración de Packer en HCL o JSON que defina los builders (AWS AMI, Docker, etc.) y los provisioners.
2. Configurar los provisioners (shell, Ansible, Chef, etc.) para instalar software y aplicar configuraciones dentro de la imagen durante la construcción.
3. Ejecutar `packer init` para instalar los plugins de los builders y provisioners utilizados.
4. Ejecutar `packer build <archivo>.pkr.hcl` para construir la imagen en todas las plataformas definidas.
5. Verificar que la imagen generada funciona correctamente y está disponible en el destino (AMI en AWS, imagen Docker en registro, etc.).

## Reglas
- No incluir secretos en la configuración de Packer; usar variables de entorno o archivos de variables externos con valores sensibles protegidos.
- Las imágenes construidas deben ser inmutables: cualquier cambio requiere reconstruir la imagen desde cero, no modificarla después de creada.
- Validar la configuración antes de construir con `packer validate <archivo>.pkr.hcl` para detectar errores de sintaxis y de plantilla.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.
