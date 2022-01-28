import { LogBox } from 'react-native';

// ignore specific warnings

LogBox.ignoreLogs(['Require cycle:']);
LogBox.ignoreLogs(['warn - https://tailwindcss.com/docs/content-configuration']);
LogBox.ignoreLogs(['warn - The `content` option in your Tailwind CSS configuration is missing or empty.']);
LogBox.ignoreLogs(['warn - Configure your content sources or your generated CSS will be missing styles.']);
LogBox.ignoreLogs(["EventEmitter.removeListener('change', ...)"]);
LogBox.ignoreLogs(['']);

// some library still use old api so will show this warning
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
