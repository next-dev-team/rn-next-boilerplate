import { useHeaderHeight as useHeaderHeight1 } from '@react-navigation/elements';
export const useHeaderHeight = () => {
  const headerHeight = useHeaderHeight1();

  return { headerHeight };
};
