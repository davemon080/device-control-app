import 'package:permission_handler/permission_handler.dart';

/// Permissions enumeration for all app features
enum AppPermissionType {
  // Hardware & Sensors
  camera,
  microphone,
  location,
  locationAlways,
  bluetooth,
  bluetoothScan,
  activityRecognition,
  sensors,

  // Personal Data & Files
  contacts,
  mediaLibrary,
  calendar,
  reminders,
  documents,

  // Communication
  phone,
  sms,
  callLogs,

  // System & Advanced
  notifications,
  overlay,
  accessibility,
  settings,
}

/// Permissions Service for Flutter
/// Manages all app permissions across iOS and Android
class PermissionsService {
  static final PermissionsService _instance = PermissionsService._internal();

  factory PermissionsService() {
    return _instance;
  }

  PermissionsService._internal();

  /// Get the appropriate permission for the platform
  Permission _getPermission(AppPermissionType type) {
    switch (type) {
      case AppPermissionType.camera:
        return Permission.camera;
      case AppPermissionType.microphone:
        return Permission.microphone;
      case AppPermissionType.location:
        return Permission.location;
      case AppPermissionType.locationAlways:
        return Permission.locationAlways;
      case AppPermissionType.bluetooth:
        return Permission.bluetooth;
      case AppPermissionType.bluetoothScan:
        return Permission.bluetoothScan;
      case AppPermissionType.activityRecognition:
        return Permission.activityRecognition;
      case AppPermissionType.sensors:
        return Permission.sensors;
      case AppPermissionType.contacts:
        return Permission.contacts;
      case AppPermissionType.mediaLibrary:
        return Permission.photos;
      case AppPermissionType.calendar:
        return Permission.calendar;
      case AppPermissionType.reminders:
        return Permission.reminders;
      case AppPermissionType.documents:
        return Permission.storage;
      case AppPermissionType.phone:
        return Permission.phone;
      case AppPermissionType.sms:
        return Permission.sms;
      case AppPermissionType.callLogs:
        return Permission.accessMediaLocation;
      case AppPermissionType.notifications:
        return Permission.notification;
      case AppPermissionType.overlay:
        return Permission.systemAlertWindow;
      case AppPermissionType.accessibility:
        return Permission.accessibilityServices;
      case AppPermissionType.settings:
        return Permission.manageExternalStorage;
    }
  }

  /// Check if a permission is granted
  Future<bool> checkPermission(AppPermissionType type) async {
    final permission = _getPermission(type);
    final status = await permission.status;
    return status.isGranted;
  }

  /// Request a single permission
  Future<bool> requestPermission(AppPermissionType type) async {
    final permission = _getPermission(type);
    final status = await permission.request();
    return status.isGranted;
  }

  /// Request multiple permissions
  Future<Map<AppPermissionType, bool>> requestMultiplePermissions(
    List<AppPermissionType> types,
  ) async {
    final result = <AppPermissionType, bool>{};

    for (final type in types) {
      result[type] = await requestPermission(type);
    }

    return result;
  }

  /// Request all permissions
  Future<Map<AppPermissionType, bool>> requestAllPermissions() async {
    return requestMultiplePermissions(AppPermissionType.values);
  }

  /// Request essential permissions for device control
  Future<Map<AppPermissionType, bool>>
      requestEssentialPermissions() async {
    final essentialPermissions = [
      AppPermissionType.bluetooth,
      AppPermissionType.bluetoothScan,
      AppPermissionType.location,
      AppPermissionType.notifications,
    ];
    return requestMultiplePermissions(essentialPermissions);
  }

  /// Get status of all permissions
  Future<Map<AppPermissionType, bool>> getAllPermissionsStatus() async {
    final result = <AppPermissionType, bool>{};

    for (final type in AppPermissionType.values) {
      result[type] = await checkPermission(type);
    }

    return result;
  }

  /// Open app settings
  static Future<void> openAppSettings() async {
    await openAppSettings();
  }
}
