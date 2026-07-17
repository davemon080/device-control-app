# Permissions Configuration

This document outlines all permissions requested by the Device Control App and their purposes.

## Hardware & Sensors

- **Camera** - Capture photos and videos from device cameras for monitoring and security
- **Microphone** - Record audio for two-way communication and voice features
- **Precise Location** - Determine exact location for location-based automation
- **Approximate Location** - Determine general location area for automation
- **Bluetooth (Scanning & Connecting)** - Discover and connect to Bluetooth smart devices
- **Motion & Fitness** - Track physical activity and motion for automation triggers

## Personal Data & Files

- **Contacts** - Access contacts for device sharing and multi-user features
- **Photos & Videos (Full Access)** - View and manage media from device cameras
- **Photos & Videos (Limited Access)** - Save photos and videos captured by devices
- **Files & Document Storage** - Access and store device configuration files
- **Calendar** - Schedule device automation and create calendar-based triggers
- **Reminders** - Create device-related reminders and notifications

## Communication

- **Phone / Phone State** - Detect phone calls for call-based automation
- **SMS / MMS** - Send and receive SMS commands for device control
- **Call Logs** - Access call history for automation triggers

## System & Advanced

- **Notifications** - Send real-time alerts about device status and events
- **Display Over Other Apps (Overlay)** - Show device notifications on top of other apps
- **Modify System Settings** - Adjust device settings from the app
- **Background App Refresh** - Keep app running in background for real-time updates
- **Accessibility Services** - Provide accessibility features for app control
- **Device Administrator** - Enable enterprise device management features

## Permission Groups by Use Case

### Essential (Required for Core Functionality)
- Bluetooth (Scanning & Connecting)
- Precise Location
- Notifications
- Microphone (for voice control)

### Recommended (Enhanced Experience)
- Camera (security cameras)
- Phone State (call-based automation)
- Calendar (event-based automation)
- Contacts (multi-user sharing)

### Optional (Advanced Features)
- SMS (SMS-based control)
- Photos/Videos (media library integration)
- Files (configuration backup)
- Reminders (reminder notifications)

## Platform-Specific Notes

### iOS
- Requires Info.plist entries for all permissions
- Prompts user on first request for each permission
- Background location requires "Always" selection
- HomeKit support for device integration

### Android
- Requires AndroidManifest.xml declarations
- Runtime permissions needed for Android 6.0+
- Some permissions require device admin activation
- Background location on Android 10+ requires special handling

## User Privacy

All permissions are requested with clear explanations of their purpose. Users can:
- Grant or deny individual permissions
- Revoke permissions at any time in system settings
- Use the app with limited permissions (some features may be unavailable)

## Data Usage

The app respects user privacy and:
- Does not track user location without permission
- Does not access contacts without explicit permission
- Does not collect biometric data without consent
- Does not share data with third parties
