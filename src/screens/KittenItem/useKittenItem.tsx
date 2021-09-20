import { getCurrentRoute } from 'navigation/NavigationService';

const useKittenItem = () => {
  const routes = getCurrentRoute('KittenItem');
  return { routes };
};

export default useKittenItem;
