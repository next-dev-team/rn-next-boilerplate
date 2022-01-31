import { fakerData, genMockArr } from '@/utils/mockData';

/**
 * fakerData
 */
test('it should get fakerData correctly', () => {
  const mockData = fakerData();
  expect(typeof mockData).toBe('object');
});

test('it should get findName correctly', () => {
  const mockData = fakerData().name.findName();
  expect(typeof mockData).toBe('string');
});

/**
 * genMockArr
 */
test('it should create array correctly length', () => {
  const mockArr = genMockArr({
    data: () => {
      return { id: 1 };
    },
    length: 5,
  });

  expect(mockArr.length).toBe(5);
});

test('it should create array with correct id value', () => {
  const mockArr = genMockArr({
    data: () => {
      return { id: 2 };
    },
    length: 2,
  });
  expect(mockArr[0].id).toBe(2);
});

test('it should create array with expect result', () => {
  const mockArr = genMockArr({
    data: () => {
      return { id: 2, name: 'sila' };
    },
    length: 1,
  });
  expect(mockArr).toEqual([{ id: 2, name: 'sila' }]);
});
