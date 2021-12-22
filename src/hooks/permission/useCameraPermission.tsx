import { Platform } from 'react-native';
import { PERMISSIONS, request } from 'react-native-permissions';

export async function useCameraPermission() {
  const status = await request(
    Platform.select({
      android: PERMISSIONS.ANDROID.CAMERA,
      ios: PERMISSIONS.IOS.CAMERA,
    }) as any
  );
  return status;
}
