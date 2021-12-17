import { convertToHttps } from '_app/utils/string';

const url = 'http:';

describe('fakerData', () => {
  test('it render func  correctly', () => {
    expect(typeof convertToHttps).toBe('function');
  });

  test('it convertToHttps correctly', () => {
    const conHttps = convertToHttps(url);
    expect(conHttps).toBe('https:');
  });
});
