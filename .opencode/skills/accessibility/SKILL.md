---
name: accessibility
description: Accesibilidad web (a11y, WCAG): contraste, navegación y lectores de pantalla
metadata:
  opencode/slash: true
---

# Accesibilidad web (a11y)

## Propósito
Garantizar que las interfaces web sean percepibles, operables, comprensibles y robustas para todas las personas, incluidas aquellas que usan tecnologías de asistencia. Úsala cuando necesites cumplir con las directrices WCAG y hacer que tu aplicación sea usable por teclado, lectores de pantalla y con suficiente contraste de color.

## Flujo de trabajo
1. Revisa el contraste de colores entre texto y fondo según WCAG (mínimo 4.5:1 para texto normal).
2. Asegura que toda la funcionalidad sea operable solo con el teclado (foco visible, orden lógico de pestañas).
3. Añade etiquetas <label> asociadas a controles de formulario y texto alternativo (alt) a imágenes.
4. Usa ARIA (roles, estados y propiedades) solo cuando el HTML nativo no sea suficiente.
5. Prueba la navegación con lectores de pantalla (NVDA, JAWS, VoiceOver) y valida con herramientas automatizadas.

## Reglas
- No relies únicamente en el color para transmitir información.
- Proporciona un indicador de foco visible y nunca lo elimines con outline: none sin reemplazarlo.
- Usa landmarks semánticos (<main>, <nav>, <aside>, <footer>) para facilitar la navegación.
- Las imágenes decorativas deben tener alt vacío (alt="") y las informativas, un alt descriptivo.
- Los controles de formulario deben tener un nombre accesible asociado.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.