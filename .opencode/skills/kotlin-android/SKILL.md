---
name: kotlin-android
description: Desarrollo Android nativo con Kotlin: actividades, fragmentos y Jetpack
metadata:
  opencode/slash: true
---

# Desarrollo Android nativo con Kotlin

## Propósito
Esta skill guía el desarrollo de aplicaciones nativas para Android con Kotlin, cubriendo actividades, fragmentos y el ecosistema Jetpack. Úsala cuando necesites crear, estructurar o depurar una app para Android usando Android Studio y el SDK oficial de Android.

## Flujo de trabajo
1. Crea el proyecto en Android Studio con lenguaje Kotlin y una plantilla adecuada (Empty Activity, Bottom Navigation, etc.).
2. Diseña la interfaz con XML o Jetpack Compose, usando `ConstraintLayout`, `RecyclerView`, `TextView`, `Button` y componentes de Material Design.
3. Implementa la navegación con el componente Navigation de Jetpack (`NavHost`, `NavController`, gráfico de navegación).
4. Gestiona el ciclo de vida con `Activity`, `Fragment`, `ViewModel` y `LiveData`/`StateFlow` para sobrevivir a cambios de configuración.
5. Accede a datos con Room (base de datos local), Retrofit o Ktor (red), y DataStore o SharedPreferences (preferencias).
6. Solicita permisos en tiempo de ejecución con `ActivityResultContracts` y declara los necesarios en `AndroidManifest.xml`.
7. Ejecuta en emulador o dispositivo físico desde Android Studio, y genera el APK/AAB para distribución con `./gradlew assembleRelease` o `bundleRelease`.

## Reglas
- Usar Kotlin como lenguaje principal; evitar mezclar Java innecesariamente.
- No realizar operaciones de red o disco en el hilo principal (UI thread); usar coroutines (`viewModelScope`, `lifecycleScope`).
- Seguir la arquitectura recomendada de Google (UI, dominio, datos) con un flujo de datos unidireccional.
- Usar `ViewModel` para retener datos ante cambios de configuración (rotación de pantalla).
- Declarar todos los permisos en `AndroidManifest.xml` y solicitarlos en tiempo de ejecución cuando sea obligatorio (Android 6.0+).
- Probar en diferentes niveles de API y tamaños de pantalla usando emuladores y dispositivos reales.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.