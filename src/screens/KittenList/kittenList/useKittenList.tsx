import { useNetWork } from 'hooks/useNetwork';
import { navigateStack } from 'navigation/NavigationService';
import { useEffect } from 'react';
import { getKittenImg, KittenSlice, selFilterValue, selKittenList } from 'store/kittenSlice';
import { useAppDispatch, useAppSelector } from 'store/useStore';

export type FilterData = {
  value: number;
};

const useKittenList = () => {
  const dispatch = useAppDispatch();
  const kittenList = useAppSelector(selKittenList);
  const filterValue = useAppSelector(selFilterValue);
  const { addEventListener } = useNetWork();

  const navigateKittenItem = (state: KittenSlice['kittenList'][0]) => {
    navigateStack('KittenItem', { state });
  };

  useEffect(() => {
    const removeNetInfoSubscription = addEventListener(() => {
      dispatch(getKittenImg({ height: 100, width: 200, filterCount: filterValue }));
    });

    return () => removeNetInfoSubscription();
  }, [addEventListener, dispatch, filterValue]);

  return { kittenList, navigateKittenItem };
};

export default useKittenList;
