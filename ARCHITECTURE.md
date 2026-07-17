# Device Control App - Architecture

## Overview

This is a cross-platform mobile application for remotely controlling devices and accessories with a modern, glassy iOS-style UI using **glassmorphism** design patterns.

## Project Structure

### React Native
- **`src/components/`** - Reusable UI components (GlassCard, DeviceCard)
- **`src/screens/`** - App screens (Dashboard, Device Control)
- **`src/theme/`** - Design system (colors, spacing, typography)
- **`src/utils/`** - Helper functions and utilities

### Flutter
- **`lib/widgets/`** - Reusable widgets (GlassCard, DeviceCard)
- **`lib/screens/`** - App screens (Dashboard, Device Control)
- **`lib/theme/`** - Design system (colors, spacing)
- **`lib/models/`** - Data models

## Design System

### Glassmorphism

The app uses modern glassmorphism design with:
- **Frosted glass effects** using backdrop blur
- **Semi-transparent backgrounds** (0.3-0.7 opacity)
- **Subtle borders** to define UI elements
- **Layered depth** for visual hierarchy

### Color Palette

#### Primary Colors
- **Primary**: `#007AFF` (iOS Blue)
- **Success**: `#34C759` (iOS Green)
- **Warning**: `#FF9500` (iOS Orange)
- **Error**: `#FF3B30` (iOS Red)

#### Glass Colors
- Light glass: `rgba(255, 255, 255, 0.7)`
- Medium glass: `rgba(255, 255, 255, 0.5)`
- Dark glass: `rgba(255, 255, 255, 0.3)`

### Spacing Scale

```
xs:   4px
sm:   8px
md:   12px
lg:   16px
xl:   24px
xxl:  32px
xxxl: 48px
```

### Border Radius

```
sm:   8px
md:   12px
lg:   16px
xl:   20px
full: 999px
```

## Key Components

### GlassCard
A frosted glass card component with backdrop blur effect. Used as the base for all card-based UI elements.

**Features:**
- Configurable blur intensity
- Semi-transparent background
- Border definition
- Ripple/tap effect

### DeviceCard
A specialized card showing individual device status and control.

**Features:**
- Device icon (emoji-based)
- Status indicator (online/offline/error)
- Device name
- Toggle switch for on/off
- Tap to open device details

### DashboardScreen
Main screen showing all devices grouped by room.

**Features:**
- Device list grouped by room
- Quick statistics (Active, Online, Total)
- Glass-effect header and footer
- Real-time device status
- Device control toggles

## Device Types

- 💡 **Light** - Smart bulbs and lighting
- 🌡️ **Thermostat** - Temperature control
- 📹 **Camera** - Security cameras
- 🔊 **Speaker** - Smart speakers
- 🔒 **Lock** - Smart locks
- 🔌 **Plug** - Smart plugs

## Device Status

- **Online**: Device is connected and responsive
- **Offline**: Device is not responding
- **Error**: Device has encountered an issue

## Future Enhancements

- [ ] Device control details screen
- [ ] Automation/scheduling system
- [ ] Voice control integration
- [ ] Location-based automation
- [ ] Real-time notifications
- [ ] Device grouping and scenes
- [ ] Analytics and usage tracking
- [ ] User authentication
- [ ] Multi-user support
- [ ] Cloud sync

## Getting Started

### React Native
```bash
cd react-native
npm install
npm start
```

### Flutter
```bash
cd flutter
flutter pub get
flutter run
```

## Dependencies

### React Native
- `expo-blur` - Blur effect for glassmorphism
- `react-native-reanimated` - Animation library
- `@react-navigation` - Navigation

### Flutter
- `flutter_glassmorphism` - Glassmorphism effects
- `google_fonts` - Typography
- `cached_network_image` - Image caching

## Design Principles

1. **Glassmorphism First** - Modern, elegant glass-effect design
2. **iOS-Inspired** - Follow Apple's Human Interface Guidelines
3. **Accessibility** - Ensure all interactive elements are accessible
4. **Performance** - Optimize animations and blur effects
5. **Consistency** - Maintain design system across all screens

## Notes

- Use consistent spacing from the spacing scale
- Apply glass effects to card-based components
- Maintain color accessibility (AA standard minimum)
- Test blur effects on various device capabilities
- Use proper loading states for async operations
