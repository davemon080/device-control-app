/**
 * Permissions Management Service
 * Handles all device permissions for the app
 */

import {
  check,
  request,
  PERMISSIONS,
  RESULTS,
  Permission,
  PermissionStatus,
} from 'react-native-permissions';
import { Platform } from 'react-native';

export enum PermissionType {
  // Hardware & Sensors
  CAMERA = 'CAMERA',
  MICROPHONE = 'MICROPHONE',
  PRECISE_LOCATION = 'PRECISE_LOCATION',
  APPROXIMATE_LOCATION = 'APPROXIMATE_LOCATION',
  BLUETOOTH = 'BLUETOOTH',
  BLUETOOTH_SCAN = 'BLUETOOTH_SCAN',

  // Personal Data & Files
  CONTACTS = 'CONTACTS',
  PHOTO_LIBRARY = 'PHOTO_LIBRARY',
  PHOTO_LIBRARY_ADD_ONLY = 'PHOTO_LIBRARY_ADD_ONLY',
  FILE_STORAGE = 'FILE_STORAGE',
  CALENDAR = 'CALENDAR',
  REMINDERS = 'REMINDERS',

  // Communication
  PHONE = 'PHONE',
  PHONE_STATE = 'PHONE_STATE',
  SMS = 'SMS',
  CALL_LOG = 'CALL_LOG',

  // System & Advanced
  NOTIFICATIONS = 'NOTIFICATIONS',
  OVERLAY = 'OVERLAY',
  ACCESSIBILITY = 'ACCESSIBILITY',
  DEVICE_ADMIN = 'DEVICE_ADMIN',
}

interface PermissionStatus {
  type: PermissionType;
  granted: boolean;
  status: string;
}

class PermissionsService {
  private permissionMap = this.getPermissionMap();

  private getPermissionMap(): Record<PermissionType, Permission | Permission[]> {
    if (Platform.OS === 'ios') {
      return {
        [PermissionType.CAMERA]: PERMISSIONS.IOS.CAMERA,
        [PermissionType.MICROPHONE]: PERMISSIONS.IOS.MICROPHONE,
        [PermissionType.PRECISE_LOCATION]:
          PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        [PermissionType.APPROXIMATE_LOCATION]:
          PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        [PermissionType.BLUETOOTH]: PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL,
        [PermissionType.BLUETOOTH_SCAN]: PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL,
        [PermissionType.CONTACTS]: PERMISSIONS.IOS.CONTACTS,
        [PermissionType.PHOTO_LIBRARY]: PERMISSIONS.IOS.PHOTO_LIBRARY,
        [PermissionType.PHOTO_LIBRARY_ADD_ONLY]:
          PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY,
        [PermissionType.FILE_STORAGE]: PERMISSIONS.IOS.DOCUMENTS,
        [PermissionType.CALENDAR]: PERMISSIONS.IOS.CALENDARS,
        [PermissionType.REMINDERS]: PERMISSIONS.IOS.REMINDERS,
        [PermissionType.PHONE]: PERMISSIONS.IOS.SIRI,
        [PermissionType.PHONE_STATE]: PERMISSIONS.IOS.SIRI,
        [PermissionType.SMS]: PERMISSIONS.IOS.SIRI,
        [PermissionType.CALL_LOG]: PERMISSIONS.IOS.SIRI,
        [PermissionType.NOTIFICATIONS]: PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY,
        [PermissionType.OVERLAY]: PERMISSIONS.IOS.USER_FACING_HEALTH,
        [PermissionType.ACCESSIBILITY]: PERMISSIONS.IOS.ACCESSIBILITY,
        [PermissionType.DEVICE_ADMIN]: PERMISSIONS.IOS.SIRI,
      };
    } else {
      // Android
      return {
        [PermissionType.CAMERA]: PERMISSIONS.ANDROID.CAMERA,
        [PermissionType.MICROPHONE]: PERMISSIONS.ANDROID.RECORD_AUDIO,
        [PermissionType.PRECISE_LOCATION]:
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        [PermissionType.APPROXIMATE_LOCATION]:
          PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
        [PermissionType.BLUETOOTH]: PERMISSIONS.ANDROID.BLUETOOTH,
        [PermissionType.BLUETOOTH_SCAN]: PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
        [PermissionType.CONTACTS]: PERMISSIONS.ANDROID.READ_CONTACTS,
        [PermissionType.PHOTO_LIBRARY]: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        [PermissionType.PHOTO_LIBRARY_ADD_ONLY]:
          PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        [PermissionType.FILE_STORAGE]: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        [PermissionType.CALENDAR]: PERMISSIONS.ANDROID.READ_CALENDAR,
        [PermissionType.REMINDERS]: PERMISSIONS.ANDROID.READ_CALENDAR,
        [PermissionType.PHONE]: PERMISSIONS.ANDROID.READ_PHONE_STATE,
        [PermissionType.PHONE_STATE]: PERMISSIONS.ANDROID.READ_PHONE_STATE,
        [PermissionType.SMS]: PERMISSIONS.ANDROID.READ_SMS,
        [PermissionType.CALL_LOG]: PERMISSIONS.ANDROID.READ_CALL_LOG,
        [PermissionType.NOTIFICATIONS]: PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
        [PermissionType.OVERLAY]: PERMISSIONS.ANDROID.SYSTEM_ALERT_WINDOW,
        [PermissionType.ACCESSIBILITY]: PERMISSIONS.ANDROID.ACCESSIBILITY,
        [PermissionType.DEVICE_ADMIN]: PERMISSIONS.ANDROID.DEVICE_ADMIN,
      };
    }
  }

  /**
   * Check if a specific permission is granted
   */
  async checkPermission(type: PermissionType): Promise<boolean> {
    try {
      const permission = this.permissionMap[type];
      if (!permission) return false;

      const status = await check(permission);
      return status === RESULTS.GRANTED;
    } catch (error) {
      console.error(`Error checking permission ${type}:`, error);
      return false;
    }
  }

  /**
   * Request a specific permission
   */
  async requestPermission(type: PermissionType): Promise<boolean> {
    try {
      const permission = this.permissionMap[type];
      if (!permission) return false;

      const status = await request(permission);
      return status === RESULTS.GRANTED;
    } catch (error) {
      console.error(`Error requesting permission ${type}:`, error);
      return false;
    }
  }

  /**
   * Request multiple permissions at once
   */
  async requestMultiplePermissions(
    types: PermissionType[]
  ): Promise<Record<PermissionType, boolean>> {
    const results: Record<PermissionType, boolean> = {} as any;

    for (const type of types) {
      results[type] = await this.requestPermission(type);
    }

    return results;
  }

  /**
   * Request all critical permissions needed for the app
   */
  async requestAllPermissions(): Promise<Record<PermissionType, boolean>> {
    const allPermissions = Object.values(PermissionType);
    return this.requestMultiplePermissions(allPermissions);
  }

  /**
   * Request essential permissions for device control
   */
  async requestEssentialPermissions(): Promise<
    Record<PermissionType, boolean>
  > {
    const essentialPermissions = [
      PermissionType.BLUETOOTH,
      PermissionType.BLUETOOTH_SCAN,
      PermissionType.PRECISE_LOCATION,
      PermissionType.NOTIFICATIONS,
    ];

    return this.requestMultiplePermissions(essentialPermissions);
  }

  /**
   * Get the status of all permissions
   */
  async getAllPermissionsStatus(): Promise<PermissionStatus[]> {
    const statuses: PermissionStatus[] = [];

    for (const type of Object.values(PermissionType)) {
      const granted = await this.checkPermission(type);
      statuses.push({
        type,
        granted,
        status: granted ? 'GRANTED' : 'DENIED',
      });
    }

    return statuses;
  }
}

export default new PermissionsService();
