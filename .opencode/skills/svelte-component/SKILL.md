---
name: svelte-component
description: Componentes Svelte: reactividad y compilación
metadata:
  opencode/slash: true
---

# Componentes Svelte

## Propósito
Crear componentes de interfaz con Svelte aprovechando su modelo de reactividad basada en asignaciones y su compilación en tiempo de construcción. Úsala cuando quieras componentes reactivos con menos código repetitivo y una tamaño de bundle reducido.

## Flujo de trabajo
1. Crea un componente de archivo único (.svelte) con las secciones <script>, <html> y <style>.
2. Declara variables reactivas en <script>; cualquier asignación dispara la actualización del DOM.
3. Usa props exportando variables con export let y define valores por defecto.
4. Reactúa a cambios con sentencias $: (reactive declarations) y derivados de estado.
5. Maneja eventos del DOM con on:click, on:input, etc., y vincula datos con bind:.

## Reglas
- Las variables reactivas se actualizan al asignarles un valor; no necesitas useState ni setState.
- Usa sentencias $: para valores derivados que dependan de otras variables reactivas.
- El CSS de <style> tiene alcance local al componente por defecto; usa :global() solo cuando sea necesario.
- Nombra componentes con PascalCase y archivos .svelte de forma consistente.
- Evita manipular el DOM directamente; deja que Svelte gestione las actualizaciones.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.