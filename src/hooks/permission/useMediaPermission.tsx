import { Platform } from 'react-native';
import { PERMISSIONS, request } from 'react-native-permissions';

export async function useMediaPermission() {
  const statusRead = await request(
    Platform.select({
      android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      ios: PERMISSIONS.IOS.MEDIA_LIBRARY,
    }) as any
  );
  const statusWrite = await request(
    Platform.select({
      android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      ios: PERMISSIONS.IOS.MEDIA_LIBRARY,
    }) as any
  );
  return { statusRead, statusWrite };
}
