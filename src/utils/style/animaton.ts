export const transformOrigin = ({ x, y }: any, ...transformations: any[]) => {
  'worklet';
  return [{ translateX: x }, { translateY: y }, ...transformations, { translateX: x * -1 }, { translateY: y * -1 }];
};
