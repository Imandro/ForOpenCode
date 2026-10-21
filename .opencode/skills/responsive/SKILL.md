---
name: responsive
description: Diseño responsive y mobile-first: media queries y layout fluido
metadata:
  opencode/slash: true
---

# Diseño responsive y mobile-first

## Propósito
Crear interfaces que se adapten a diferentes tamaños de pantalla y dispositivos, empezando por el diseño móvil y progresando hacia pantallas más grandes. Úsala cuando necesites que tu aplicación se vea y funcione bien en móviles, tabletas y ordenadores de escritorio.

## Flujo de trabajo
1. Diseña primero para la pantalla más pequeña (mobile-first) con una columna y elementos apilados.
2. Usa unidades relativas y porcentajes para anchos, márgenes y rellenos en lugar de valores fijos.
3. Aplica media queries con breakpoints basados en contenido, no en dispositivos específicos.
4. Reajusta el layout con flexbox o CSS Grid a medida que aumenta el ancho de la pantalla.
5. Prueba la experiencia en distintos tamaños de ventana y dispositivos reales.

## Reglas
- Escribe los estilos base para móvil y agrega media queries con min-width para pantallas mayores.
- No uses breakpoints basados en marcas o modelos de dispositivo; úsalos según el contenido.
- Asegura que las imágenes y medios sean fluidos (max-width: 100%, height: auto).
- Mantiene los objetivos táctiles mínimos de 44x44 px para facilitar el uso táctil.
- Valida que el contenido no requiera desplazamiento horizontal en pantallas estrechas.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.