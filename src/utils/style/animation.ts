import { isArray } from 'lodash';

export const transformOrigin = ({ x, y }: any, ...transformations: any[]) => {
  'worklet';
  return [
    { translateX: x || 0 },
    { translateY: y || 0 },
    ...(isArray(transformations) ? transformations : []),
    { translateX: (x || 0) * -1 },
    { translateY: (y || 0) * -1 },
  ];
};
