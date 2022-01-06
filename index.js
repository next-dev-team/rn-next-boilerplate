// @ts-ignore
import { enableLogging } from '@gorhom/bottom-sheet';
import { Alert, AppRegistry, LogBox } from 'react-native';
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';
import 'react-native-gesture-handler';
//@ts-ignore
import RNRestart from 'react-native-restart';
import { enableScreens } from 'react-native-screens';
import { name as appName } from './app.json';
import App from './src/app';

enableScreens(true)
enableLogging();


LogBox.ignoreLogs(['Require cycle:']);
// ignore warnings
LogBox.ignoreLogs(["EventEmitter.removeListener('change', ...)"]);

/**
 * Uncaught JS exception
 */
setJSExceptionHandler((error, isFatal) => {
  if (isFatal) {
    Alert.alert(
      'Unknown exception',
      `
        Error: ${isFatal ? 'Fatal:' : ''} ${error.name} ${error.message}
        App needs to be restarted
      `,
      [
        {
          text: 'Restart',
          onPress: () => {
            RNRestart.Restart();
          },
        },
      ]
    );
  } else {
    console.log(error); // So that we can see it in the ADB logs in case of Android if needed
  }
}, false);

/**
 * Uncaught native exception
 */
setNativeExceptionHandler(
  exceptionString => {
    console.log(exceptionString);
  },
  false,
  true
);

AppRegistry.registerComponent(appName, () => App);
