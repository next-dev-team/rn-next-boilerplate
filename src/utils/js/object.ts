import { isNull, isUndefined, omitBy } from 'lodash';

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
