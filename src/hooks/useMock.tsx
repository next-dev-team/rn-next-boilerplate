import { fakerData } from '@/utils';
import { useCreation } from 'ahooks';

export const useMock = () => {
  const mock = useCreation(() => fakerData(), [fakerData]);
  return { mock };
};
