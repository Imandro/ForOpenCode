---
name: ai-safety
description: Seguridad y alineación de IA: prevención de sesgos y comportamientos dañinos
metadata:
  opencode/slash: true
---

# Seguridad y Alineación de IA

## Propósito
Aplica técnicas de seguridad y alineación a sistemas de inteligencia artificial para prevenir sesgos, comportamientos dañinos, fuga de información y uso indebido. Úsala en cualquier proyecto de IA que interactúe con usuarios o maneje datos sensibles.

## Flujo de trabajo
1. Identifica los riesgos del sistema de IA: sesgos, toxicidad, manipulación, fuga de datos o decisiones automatizadas perjudiciales.
2. Aplica mitigaciones técnicas: filtrado de entradas y salidas, alineación mediante RLHF, moderación de contenido y controles de acceso.
3. Evalúa el sistema con pruebas adversarias (red teaming) para descubrir comportamientos no deseados.
4. Implementa barreras de seguridad (guardrails) que bloqueen o revisen salidas peligrosas antes de llegar al usuario.
5. Documenta los riesgos residuales y establece un proceso de respuesta a incidentes de seguridad de IA.

## Reglas
- Nunca confíes ciegamente en la salida del modelo sin validación en decisiones críticas.
- Filtra tanto las entradas del usuario como las salidas del modelo para evitar contenido dañino.
- Incluye revisión humana en acciones de alto impacto o irreversibles.
- Realiza auditorías periódicas de equidad y sesgo en modelos que afecten a personas.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.