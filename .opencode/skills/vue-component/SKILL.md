---
name: vue-component
description: Componentes Vue 3: Composition API, refs y reactivity
metadata:
  opencode/slash: true
---

# Componentes Vue 3

## Propósito
Desarrollar componentes de interfaz con Vue 3 usando la Composition API, refs y el sistema de reactividad. Úsala cuando necesites componentes reactivos, composición de lógica reutilizable y una clara separación entre estado, propiedades y plantilla.

## Flujo de trabajo
1. Crea un componente de archivo único (.vue) con las secciones `<script setup>`, `<template>` y `<style>`.
2. Declara el estado reactivo con ref() o reactive() dentro de `<script setup>`.
3. Define props con defineProps() y emite eventos con defineEmits().
4. Usa computados con computed() y vigila cambios con watch() o watchEffect().
5. Enlaza datos y eventos en la plantilla con v-bind, v-on y v-model.

## Reglas
- Prefiere la Composition API con `<script setup>` sobre la Options API en Vue 3.
- Usa ref() para valores primitivos y reactive() para objetos complejos.
- Accede al valor de un ref con .value en el script, pero no en la plantilla.
- Nombra los componentes con PascalCase y los archivos con PascalCase o kebab-case de forma consistente.
- No mutes props directamente desde el componente hijo; emite eventos al padre.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.