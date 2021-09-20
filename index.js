import { AppRegistry, LogBox } from 'react-native';
import { name as appName } from './app.json';
import App from './src/app';

// LogBox.ignoreLogs([
//   'Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle',
// ]);

LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => App);
