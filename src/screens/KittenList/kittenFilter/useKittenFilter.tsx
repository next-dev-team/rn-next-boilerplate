import { selFilterData, selFilterValue, setFilterValue } from 'store/kittenSlice';
import { useAppDispatch, useAppSelector } from 'store/useStore';

export type FilterData = {
  value: number;
};

const useKittenFilter = () => {
  const dispatch = useAppDispatch();
  const filterData = useAppSelector(selFilterData);
  const filterValue = useAppSelector(selFilterValue);

  const onSetFilterValue = (value: number) => {
    dispatch(setFilterValue(value));
  };

  return { filterValue, filterData, onSetFilterValue };
};

export default useKittenFilter;
