---
name: ansible
description: Automatización de configuración con Ansible: playbooks e inventarios
metadata:
  opencode/slash: true
---

# Ansible

## Propósito
Automatizar la configuración de sistemas con Ansible usando playbooks e inventarios. Úsala para provisionar servidores, instalar paquetes, gestionar servicios y aplicar configuraciones de forma idempotente.

## Flujo de trabajo
1. Definir los hosts objetivo en un archivo de inventario (`hosts.ini` o `hosts.yml`), agrupándolos por roles o entornos.
2. Escribir un playbook en YAML que contenga las tareas a ejecutar sobre los hosts seleccionados.
3. Usar módulos de Ansible (`apt`, `yum`, `copy`, `template`, `service`, etc.) para cada tarea de configuración.
4. Ejecutar el playbook con `ansible-playbook -i <inventario> <playbook>.yml`.
5. Verificar que los cambios se aplicaron correctamente y que los servicios están en el estado esperado.

## Reglas
- Los playbooks deben ser idempotentes: ejecutarlos varias veces no debe producir cambios innecesarios.
- No escribir contraseñas ni claves privadas directamente en los playbooks; usar Ansible Vault para cifrar datos sensibles.
- Organizar los playbooks por roles y usar variables de grupo o de host para evitar valores duplicados.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.
