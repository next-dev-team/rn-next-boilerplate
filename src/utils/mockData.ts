import faker from 'faker';

export const fakerData = (isDebug?: boolean) => {
  if (isDebug) {
    console.log('mock Arr', faker);
  }
  return faker;
};

export function genMockArr<T>({
  data,
  isDebug,
  length = 6,
}: {
  data: () => T;
  isDebug?: boolean;
  length?: number;
}): T[] {
  let getArr;
  if (data) {
    getArr = Array.from({ length }, data);
  }
  if (isDebug) {
    console.log('genArr', getArr);
  }
  return getArr as any;
}
