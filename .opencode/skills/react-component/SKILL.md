---
name: react-component
description: Componentes React: funcionales, hooks, props y estado
metadata:
  opencode/slash: true
---

# Componentes React

## Propósito
Crear y mantener componentes de interfaz de usuario con React usando componentes funcionales, hooks (useState, useEffect, etc.), props para la entrada de datos y estado local para la reactividad. Úsala cuando necesites construir UI modular, reutilizable y con datos dinámicos en React.

## Flujo de trabajo
1. Define el componente como una función de JavaScript que devuelve JSX.
2. Declara las props con su tipo y valores por defecto para la entrada de datos.
3. Usa hooks como useState para el estado local y useEffect para efectos secundarios.
4. Renderiza listas condicionales y maneja eventos del usuario en el JSX.
5. Extrae lógica repetida en hooks personalizados para reutilizarla.

## Reglas
- Usa siempre componentes funcionales con hooks, no componentes de clase.
- Nombra los componentes con PascalCase (ej. `MiComponente`).
- Pasa datos hacia abajo mediante props; no mutes las props directamente.
- Cada hook debe llamarse en el nivel superior del componente, no dentro de condicionales ni bucles.
- Memoiza con useMemo o useCallback solo cuando haya un beneficio de rendimiento medible.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.