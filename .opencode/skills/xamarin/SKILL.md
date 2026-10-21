---
name: xamarin
description: Desarrollo multiplataforma con Xamarin: .NET y C# para móviles
metadata:
  opencode/slash: true
---

# Desarrollo multiplataforma con Xamarin

## Propósito
Esta skill guía el desarrollo de aplicaciones móviles multiplataforma (iOS y Android) con Xamarin y .NET usando C#. Úsala cuando necesites crear apps que compartan lógica de negocio en .NET mientras acceden a APIs nativas de cada plataforma.

## Flujo de trabajo
1. Crea el proyecto en Visual Studio con una solución Xamarin.Forms o Xamarin.Native (iOS/Android separados).
2. Comparte código en un proyecto .NET Standard o biblioteca de clases compartida (ViewModels, modelos, servicios).
3. Diseña la interfaz con XAML en Xamarin.Forms (`ContentPage`, `StackLayout`, `Grid`, `ListView`, `Button`, `Entry`) o de forma nativa en cada plataforma.
4. Implementa el patrón MVVM con `INotifyPropertyChanged`, comandos (`ICommand`) y enlace de datos (`Binding`).
5. Navega entre páginas con `NavigationPage`, `Shell` o `INavigation` según la estructura de la app.
6. Accede a funcionalidad nativa con `DependencyService` o el nuevo modelo de inyección de dependencias de .NET MAUI/Xamarin Essentials (sensores, almacenamiento, conectividad).
7. Compila y despliega en emuladores o dispositivos físicos desde Visual Studio (Windows o Mac), y genera paquetes IPA/APK para distribución.

## Reglas
- Compartir la mayor cantidad posible de lógica en el proyecto común (.NET Standard); limitar el código específico de plataforma a los proyectos iOS y Android.
- Usar MVVM para separar la interfaz de la lógica de negocio y facilitar pruebas unitarias.
- Notificar cambios de propiedades implementando `INotifyPropertyChanged` en los ViewModels.
- No acceder a APIs de UI desde hilos secundarios; usar `MainThread` o `Device.BeginInvokeOnMainThread`.
- Solicitar permisos de plataforma (cámara, ubicación, almacenamiento) antes de usarlos en iOS y Android.
- Tener en cuenta que Xamarin.Forms está en transición a .NET MAUI; valorar MAUI para nuevos proyectos de largo plazo.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.