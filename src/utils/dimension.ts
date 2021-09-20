import { Dimensions, Platform, StatusBar } from 'react-native';
import { spacingSize } from 'themes';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const getnBymHeight = (width = SCREEN_WIDTH, n = 16, m = 9) => (width * m) / n;

export const getGridItemWidth = ({
  containerWidth = SCREEN_WIDTH,
  spacing = 16,
  numColumns,
}: {
  containerWidth?: number;
  spacing?: number;
  numColumns: number;
}) => (containerWidth - spacing * 2 - (numColumns - 1) * spacing) / numColumns;

export const getGridItemMarginRight = ({
  index,
  numColumns,
  spacing = spacingSize.m,
}: {
  index: number;
  numColumns: number;
  spacing?: number;
}) => ((index + 1) / numColumns === 0 ? 0 : spacing);

export const pxToNum = (px = '0px') => {
  return parseInt(px.replace('px', ''), 10);
};

export function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 780 ||
      dimen.width === 780 ||
      dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.width === 926)
  );
}

export function ifIphoneX<T extends Object>(iphoneXStyle: T, regularStyle: T): T {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

export function getStatusBarHeight(safe: boolean) {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  });
}

export function getBottomSpace() {
  return isIphoneX() ? 34 : 0;
}
