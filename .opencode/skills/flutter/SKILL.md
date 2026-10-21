---
name: flutter
description: Apps móviles con Flutter/Dart: widgets, estado y navegación
metadata:
  opencode/slash: true
---

# Apps móviles con Flutter/Dart

## Propósito
Esta skill guía el desarrollo de aplicaciones móviles nativas compiladas con Flutter y Dart, cubriendo widgets, gestión de estado y navegación. Úsala cuando necesites crear, estructurar o depurar una app Flutter para iOS y Android desde una sola base de código.

## Flujo de trabajo
1. Crea el proyecto con `flutter create` y verifica el entorno con `flutter doctor`.
2. Construye la interfaz con widgets (`StatelessWidget`, `StatefulWidget`, `MaterialApp`, `Scaffold`, `AppBar`, `ListView`, `Column`, `Row`).
3. Gestiona el estado con `setState`, `Provider`, `Riverpod`, `Bloc` o `GetX` según la complejidad de la app.
4. Define la navegación con `Navigator` y rutas con nombre, o con `go_router` para navegación declarativa.
5. Aplica estilos con `ThemeData`, `TextStyle`, `BoxDecoration` y temas claro/oscuro.
6. Conecta la app con APIs y servicios mediante paquetes de pub.dev (HTTP, Firebase, almacenamiento local, cámara, geolocalización).
7. Ejecuta en emulador o dispositivo con `flutter run`, y compila con `flutter build apk` / `flutter build ios`.

## Reglas
- Todo en Flutter es un widget; no usar etiquetas HTML ni CSS directamente.
- Separar la lógica de negocio de la interfaz (capas de presentación, dominio y datos).
- Usar `const` en widgets inmutables para optimizar reconstrucciones.
- Manejar el ciclo de vida de `StatefulWidget` con `initState`, `dispose` y `didUpdateWidget` cuando corresponda.
- No realizar operaciones síncronas pesadas en el hilo principal de la UI; usar `isolates` o `async/await`.
- Probar en iOS y Android, revisando adaptaciones de diseño y plugins específicos de plataforma.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.