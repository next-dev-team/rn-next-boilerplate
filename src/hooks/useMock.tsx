import { useCreation } from 'ahooks';
import { fakerData } from 'utils/mockData';

export const useMock = () => {
  const mock = useCreation(() => fakerData(), []);
  return { mock };
};
