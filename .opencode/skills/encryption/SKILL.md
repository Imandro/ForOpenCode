---
name: encryption
description: Cifrado de datos en reposo y en tránsito: algoritmos y claves
metadata:
  opencode/slash: true
---

# Cifrado de datos

## Propósito
Configura y revisa el cifrado de datos tanto en reposo (almacenados en bases de datos, discos o archivos) como en tránsito (transmitidos por redes). Úsala para garantizar la confidencialidad e integridad de la información mediante algoritmos y prácticas de gestión de claves adecuadas.

## Flujo de trabajo
1. Clasifica los datos según su sensibilidad y requisitos de protección.
2. Selecciona algoritmos de cifrado adecuados (AES, RSA, ECC, etc.) para cada caso.
3. Cifra los datos en reposo en bases de datos, discos y archivos de respaldo.
4. Configura cifrado en tránsito usando TLS para todas las comunicaciones de red.
5. Implementa gestión segura de claves: generación, almacenamiento, rotación y revocación.
6. Verifica que las claves nunca se almacenen junto con los datos cifrados.

## Reglas
- Usa algoritmos y longitudes de clave recomendadas por estándares vigentes (NIST, etc.).
- Nunca cifres con algoritmos obsoletos o debilitados (DES, MD5, SHA1 para cifrado).
- Protege las claves maestras con un HSM o servicio de gestión de claves (KMS).
- Rotación de claves periódica y procedimiento de revocación documentado.
- No incluyas claves privadas en repositorios de código o backups sin cifrar.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.