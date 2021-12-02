import { create } from 'twrnc';

export const tw = create(require('../../tailwind.config'));

/**get color from tw
 * usages: bg-green-500 or text-green-500 or green-500
 */
export const twColor = tw.color;
export const twStyle = tw.style;
