import { check, Permission, RESULTS } from 'react-native-permissions';

export function checkPermission(
  permission: Permission,
  onUnAvailable?: Function,
  onDenied?: Function,
  onGranted?: Function,
  onBlocked?: Function
) {
  check(permission).then((result: IPermissionResult) => {
    switch (result) {
      case RESULTS.UNAVAILABLE:
        /*
              This feature is not available (on this device / in this context)
              */
        onUnAvailable && onUnAvailable();
        break;
      case RESULTS.DENIED:
        /*
              The permission has not been requested / is denied but requestable
              */
        onDenied && onDenied();
        break;
      case RESULTS.GRANTED:
        /*
             The permission is granted
              */
        onGranted && onGranted();
        break;
      case RESULTS.BLOCKED:
        /*
             The permission is denied and not requestable anymore
              */
        onBlocked && onBlocked();
        break;
    }
  });
}
