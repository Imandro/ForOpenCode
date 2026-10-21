---
name: html-css
description: Maquetación semántica HTML y hojas de estilo CSS
metadata:
  opencode/slash: true
---

# Maquetación semántica HTML y CSS

## Propósito
Estructurar páginas web con HTML semántico y darles estilo con hojas de estilo CSS. Úsala cuando necesites crear la base de cualquier interfaz web: documento bien estructurado, accesible y con presentación visual mantenible.

## Flujo de trabajo
1. Escribe el documento HTML5 con elementos semánticos (<header>, <nav>, <main>, <section>, <article>, <footer>, etc.).
2. Organiza el contenido con una jerarquía de encabezados (h1 a h6) sin saltar niveles.
3. Crea una hoja de estilo CSS y vincúlala al documento con <link rel="stylesheet">.
4. Aplica reglas de estilo usando selectores de clase, etiqueta e ID con especificidad controlada.
5. Usa el modelo de caja (box model), flexbox o grid para disponer los elementos en la página.

## Reglas
- Usa elementos semánticos en lugar de <div> genéricos siempre que sea posible.
- Mantén una sola etiqueta <h1> por página y sigue el orden jerárquico de encabezados.
- Separa la estructura (HTML) de la presentación (CSS); no uses estilos en línea ni atributos de presentación en HTML.
- Usa clases con nombres descriptivos y sigue una convención de nomenclatura (ej. BEM).
- Escribe unidades relativas (rem, em, %, vw/vh) en lugar de unidades absolutas fijas cuando sea apropiado.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.