---
name: tailwind
description: Estilizado con Tailwind CSS: clases utilitarias y diseño rápido
metadata:
  opencode/slash: true
---

# Estilizado con Tailwind CSS

## Propósito
Diseñar interfaces de usuario rápidamente aplicando clases utilitarias de Tailwind CSS directamente en el HTML o JSX, sin escribir hojas de estilo CSS personalizadas para cada componente. Úsala cuando necesites construir diseños consistentes y responsivos con velocidad y bajo mantenimiento de CSS.

## Flujo de trabajo
1. Instala y configura Tailwind CSS en el proyecto (archivo tailwind.config.js y directivas @tailwind en el CSS).
2. Aplica clases utilitarias para margen, relleno, color, tipografía, flexbox y grid directamente en los elementos.
3. Usa variantes responsivas (sm:, md:, lg:, xl:) para adaptar el diseño a distintos tamaños de pantalla.
4. Aplica estados de interacción (hover:, focus:, active:, disabled:) con sus respectivas variantes.
5. Extrae patrones repetitivos en componentes o usa @apply para crear utilidades semánticas cuando sea necesario.

## Reglas
- No escribas CSS personalizado para estilos que puedan resolverse con clases utilitarias existentes.
- Usa el sistema de espaciado de Tailwind (espacios de 0.25 rem) en lugar de valores mágicos arbitrarios.
- Aplica variantes responsivas siguiendo el enfoque mobile-first.
- Evita clases en línea demasiado largas; extrae en componentes cuando la legibilidad se vea afectada.
- Configura la paleta de colores, tipografía y breakpoints en tailwind.config.js para mantener la consistencia.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.