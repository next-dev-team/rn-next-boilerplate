import { useCreation } from 'ahooks';
import { fakerData } from '_app/utils';

export const useMock = () => {
  const mock = useCreation(() => fakerData(), [fakerData]);
  return { mock };
};
