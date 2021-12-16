import { TextStyle } from 'react-native';
import { create } from 'twrnc';

export const tw = create(require('../../tailwind.config'));

/**get color from tw
 * usages: bg-green-500 or text-green-500 or green-500
 */
export const twStyle = tw.style;

export const twColor = (clx: string, clsKey: keyof TextStyle = 'color', isDefaultObj?: boolean): string => {
  const cls = twStyle(`${clx}`);
  return (isDefaultObj ? cls : cls?.[(clx.includes('bg') && 'backgroundColor') || clsKey]) as string;
};
