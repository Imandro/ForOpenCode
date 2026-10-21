---
name: react-native
description: Apps móviles con React Native: componentes, navegación y estilos
metadata:
  opencode/slash: true
---

# Apps móviles con React Native

## Propósito
Esta skill guía el desarrollo de aplicaciones móviles multiplataforma (iOS y Android) con React Native, cubriendo componentes, navegación y estilos. Úsala cuando necesites crear, estructurar o depurar una app React Native usando JavaScript o TypeScript.

## Flujo de trabajo
1. Inicializa el proyecto con `npx @react-native-community/cli` o Expo según el caso de uso.
2. Diseña la interfaz con componentes nativos (`View`, `Text`, `FlatList`, `ScrollView`, `TouchableOpacity`) y componentes personalizados.
3. Configura la navegación con `@react-navigation/native` y sus stacks o pestañas según la arquitectura de pantallas.
4. Aplica estilos con `StyleSheet` y `StyleSheet.create`, usando Flexbox y unidades relativas coherentes entre plataformas.
5. Gestiona el estado con `useState`, `useEffect`, Context API o librerías externas como Redux/Zustand cuando sea necesario.
6. Integra APIs nativas mediante módulos nativos o librerías de la comunidad (cámara, geolocalización, notificaciones, almacenamiento).
7. Ejecuta en emulador/simulador o dispositivo físico con `npx react-native run-android` / `run-ios`, y depura con React Developer Tools o Flipper.

## Reglas
- No mezclar componentes de React DOM (`div`, `span`) con componentes de React Native.
- Todas las vistas deben envolverse en un contenedor único (`View` o `SafeAreaView`) dentro de un componente.
- Usar `key` estable en listas renderizadas con `map`.
- Preferir `StyleSheet.create` sobre estilos en línea para mejorar rendimiento y mantenimiento.
- Probar en iOS y Android, ya que algunos componentes y APIs difieren entre plataformas.
- Mantener las dependencias actualizadas y verificar compatibilidad con la versión de React Native instalada.

## Rutas
Todos los paths escritos dentro de esta skill son relativos al directorio que contiene este SKILL.md.