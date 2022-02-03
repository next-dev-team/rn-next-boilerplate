/**
 * credit
 * https://github.com/thundersdata-frontend/rn-template/blob/main/src/utils/string.ts
 */

import produce from 'immer';

export const convertToHttps = (url: string | undefined) => url?.replace(/^http:/, 'https:');

export const onChangeAlias = (value: string | number): string => {
  let str = value + '';
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\\=|\\<|\\>|\?|\/|,|\.|\\:|\\;|\\'|\\"|\\&|\\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    ' '
  );
  str = str.replace(/ + /g, ' ');
  str = str.trim();
  return str;
};

export const padStart = (value: any, maxPad = 2, stringPad = '0') => {
  const stringP = Array(maxPad).fill(stringPad).join('');
  return String(stringP + value).slice(-maxPad);
};

export const padEnd = (value: any, maxPad = 2, stringPad = '0') => {
  const stringP = Array(maxPad).fill(stringPad).join('');
  return String(value + stringP).slice(0, maxPad);
};

export const replaceAll = (source = '', textReplace = '', textInstead = '') => {
  return source.split(textReplace).join(textInstead);
};

export const removeHtmlTag = (source = '') => {
  return source.replace(/<\/?[^>]+(>|$)/g, '');
};

export const removeChar = (source = '') => {
  return source.replace(/[^0-9]/g, '');
};

export const trimArray = (sourceArr: Array<unknown> = []): Array<unknown> => {
  const newArr = sourceArr.map((element: any) => {
    if (Array.isArray(element)) {
      return trimArray(element);
    }
    switch (typeof element) {
      case 'string':
        return element.trim();
      case 'object':
        return trimObject(element);
      default:
        return element;
    }
  });
  return newArr;
};

export const trimObject = (source: any) => {
  if (!source) {
    return source;
  }
  const newObject = source;
  Object.keys(newObject).forEach((key: string) => {
    if (Array.isArray(newObject[key])) {
      newObject[key] = trimArray(newObject[key]);
    }
    if (typeof newObject[key] === 'string') {
      newObject[key] = newObject[key].trim();
    }
    if (typeof newObject[key] === 'object') {
      newObject[key] = trimObject(newObject[key]);
    }
  });
  return newObject;
};
export const toFullWidth = (value: any) => {
  return (
    value +
    ''.replace(/[A-Za-z0-9]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) + 0xfee0);
    })
  );
};

interface ResultHandleTagToArrayText {
  text: string;
  bold: boolean;
}
export const onHandleTagToArrayText = (source = '', char = '#'): Array<ResultHandleTagToArrayText> => {
  const textSplit = source.split(' ');
  const arrText: ResultHandleTagToArrayText[] = [];
  textSplit.forEach((text: string, i: number) => {
    const textData = { text: text, bold: false };
    if (text[0] === char) {
      textData.bold = true;
      arrText.push(textData);
    } else {
      arrText.push({ text: text, bold: false });
    }
    if ((text === '' && i !== textSplit.length - 1) || i !== textSplit.length - 1) {
      arrText.push({ text: ' ', bold: false });
    }
  });
  return arrText;
};
type TextUrl = {
  isLink: boolean;
  source: string;
};
export const onDetectUrlInTextToArray = (text: string): Array<TextUrl> => {
  const detectUrls =
    /((?:[a-z]+:\/\/)?(?:(?:[a-z0-9\-]+\.)+(?:[a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(?::[0-9]{1,5})?(?:\/[a-z0-9_\-.~]+)*(?:\/(?:[a-z0-9_\-.]*)(?:\?[a-z0-9+_\-.%=&amp;]*)?)?(?:#[a-zA-Z0-9!$&'(?:)*+.=-_~:@/?]*)?)(?:\s+|$)/;
  return text
    .split(detectUrls)
    .map(x => (detectUrls.test(x) ? { isLink: true, source: x } : { isLink: false, source: x }));
};
export const removeJapanChar = (text = '') => {
  const regex =
    /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g;
  return text.replace(regex, '');
};
export const randomUniqueId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // eslint-disable-next-line no-bitwise
    const r = (Math.random() * 16) | 0,
      // eslint-disable-next-line no-bitwise
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * Used to automatically intercept and add characters whose length exceeds the specified number...
 */
export const textEllipsis = (text: string, length: number) => {
  if (text.length > length && length > 0) {
    return `${text.substring(0, length)}...`;
  }
  return text;
};

export function convertNullToEmptyString<T>(obj: T) {
  return produce(obj, draft => {
    Object.entries(draft).forEach(([key, val]) => {
      if (val === null || val === undefined) {
        draft[key] = '';
      }
    });
  });
}

/**
 * format numbers
 * @param value
 * @param dots decimal places
 */
export const formatNumber = (value?: number | string, dots = 4) => {
  if (value) {
    if (typeof value === 'string' && !Number.isNaN(+value)) {
      return Number(value).toFixed(dots);
    } else if (typeof value === 'number') {
      return Number(value).toFixed(dots);
    }
  }
  return '0';
};

/**
 * Get the last string after the specified delimiter point
 * @param (sourceStr splitStr) source string trim character node
 * @returns {string} The string after the last trim character
 */
export const getLastSubstring = (sourceStr = '', splitStr = ''): string => {
  return sourceStr.substring(sourceStr.lastIndexOf(splitStr) + splitStr.length, sourceStr.length);
};

/**
 * value formatted as string
 * @param value
 */
export function valueToString(value: any | any[]) {
  if (typeof value === 'string') {
    return value;
  }
  return JSON.stringify(value);
}
