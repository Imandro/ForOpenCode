---
name: swift-ios
description: Desarrollo iOS nativo con Swift: UIKit, SwiftUI y Xcode
metadata:
  opencode/slash: true
---

# Desarrollo iOS nativo con Swift

## Propósito
Esta skill guía el desarrollo de aplicaciones nativas para iOS con Swift, cubriendo UIKit, SwiftUI y Xcode. Úsala cuando necesites crear apps para iPhone, iPad o visionOS con el SDK oficial de Apple, ya sea con interfaz declarativa (SwiftUI) o imperativa (UIKit).

## Flujo de trabajo
1. Crea el proyecto en Xcode seleccionando Swift como lenguaje y SwiftUI o UIKit como framework de interfaz.
2. Diseña la interfaz con SwiftUI (`View`, `VStack`, `HStack`, `List`, `NavigationStack`) o con UIKit (`UIViewController`, `UIView`, `UITableView`, `UICollectionView`, `Auto Layout`).
3. Gestiona el estado con `@State`, `@Binding`, `@ObservedObject`, `@EnvironmentObject` en SwiftUI, o con delegados y patrones MVC/MVVM en UIKit.
4. Implementa la navegación con `NavigationStack`/`NavigationLink` en SwiftUI, o con `UINavigationController`, segues y storyboards en UIKit.
5. Conecta con datos y redes mediante `URLSession`, `Combine`, `SwiftData`/`Core Data` o librerías de terceros.
6. Configura capacidades y permisos en el archivo `Info.plist` y en el panel Signing & Capabilities de Xcode.
7. Ejecuta en simulador o dispositivo físico desde Xcode, y compila para distribución con Archive y App Store Connect.

## Reglas
- Usar SwiftUI para interfaces modernas y declarativas; reservar UIKit para casos complejos o compatibilidad con iOS antiguo.
- Respetar el ciclo de vida de `UIViewController` (`viewDidLoad`, `viewWillAppear`, `viewDidDisappear`) en UIKit.
- Solicitar permisos en tiempo de ejecución (cámara, ubicación, notificaciones) antes de usarlos.
- No bloquear el hilo principal con operaciones de red o disco; usar `async/await` o `DispatchQueue`.
- Adaptar la interfaz a diferentes tamaños de pantalla con Size Classes y Auto Layout (UIKit) o `GeometryReader` (SwiftUI).
- Firmar la app con un equipo de desarrollador de Apple válido para instalar en dispositivos reales.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.