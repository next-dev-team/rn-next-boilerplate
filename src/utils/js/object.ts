/**
 * credit
 * https://github.com/thundersdata-frontend/rn-template/blob/main/src/utils/object.ts
 */

import { isNull, isUndefined, omitBy } from 'lodash';
import equals from 'react-fast-compare';

/**
 * Delete the falsy key-value pair in the object
 * @param obj
 * @returns
 */
export function removeEmptyKey(obj: Record<string, any>) {
  return omitBy(
    {
      ...obj,
    },
    item => isNull(item) || isUndefined(item) || item == ''
  );
}

/**
 * Reverse the key and value of the object
 * @param obj
 */
export const reverseObj = (obj: Record<string, string | number>) => {
  const reversedObj: Record<string, string | number> = {};
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    reversedObj[value] = key;
  });
  return reversedObj;
};

export const compareValue = (val1: any, val2: any) => {
  return equals(val1, val2);
};
