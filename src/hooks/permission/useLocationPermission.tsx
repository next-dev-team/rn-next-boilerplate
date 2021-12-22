import { Platform } from 'react-native';
import { PERMISSIONS, request } from 'react-native-permissions';

export async function useLocationPermission() {
  const status = await request(
    Platform.select({
      android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    }) as any
  );
  return status;
}
