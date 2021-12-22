import { useCreation } from 'ahooks';
import { fakerData } from '_app/utils/mockData';

export const useMock = () => {
  const mock = useCreation(() => fakerData(), [fakerData]);
  return { mock };
};
