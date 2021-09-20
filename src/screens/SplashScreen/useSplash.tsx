import { navigateStack } from 'navigation/NavigationService';
import { useEffect } from 'react';
// import RNBootSplash from 'react-native-bootsplash';

const useSplashScreen = (): any => {
  useEffect(() => {
    const init = async (): Promise<void> => {
      try {
      } catch (error) {
        console.log('error something :', error);
      }
    };
    init().finally(() => {
      setTimeout(async () => {
        navigateStack('KittenList');
      }, 800);
    });
  }, []);

  return {};
};

export default useSplashScreen;
