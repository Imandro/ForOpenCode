---
name: vagrant
description: Entornos de desarrollo con Vagrant: máquinas virtuales y provisioning
metadata:
  opencode/slash: true
---

# Vagrant

## Propósito
Gestionar entornos de desarrollo con Vagrant: máquinas virtuales y provisioning. Úsala para crear entornos de desarrollo reproducibles y portátiles mediante máquinas virtuales.

## Flujo de trabajo
1. Crear un archivo `Vagrantfile` que defina la base box (sistema operativo), el proveedor (VirtualBox, VMware, etc.) y la configuración de red.
2. Definir el provisioning en el `Vagrantfile` o en scripts separados para instalar paquetes y configurar el entorno al iniciar la máquina.
3. Iniciar la máquina virtual con `vagrant up`, lo que descarga la base box y aplica el provisioning.
4. Acceder a la máquina con `vagrant ssh` para trabajar dentro del entorno de desarrollo configurado.
5. Detener la máquina con `vagrant halt`, suspenderla con `vagrant suspend` o destruirla por completo con `vagrant destroy` cuando ya no sea necesaria.

## Reglas
- El `Vagrantfile` debe versionarse junto con el código del proyecto para que todo el equipo use el mismo entorno de desarrollo.
- No almacenar credenciales ni secretos en el `Vagrantfile`; usar variables de entorno o archivos de configuración externos protegidos.
- Usar la misma base box y versión en todos los entornos de desarrollo para evitar problemas de inconsistencia entre máquinas.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.
