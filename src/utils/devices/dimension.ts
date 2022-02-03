import { Dimensions, PixelRatio, Platform, StatusBar, StyleSheet } from 'react-native';
import { ifIphoneX, isIphoneX } from '.';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

// ? iPhone X Family
// iPhone X Dimension
export const iPhoneX_HEIGHT = 812;
// iPhone Xr Dimension
export const iPhoneXr_HEIGHT = 896;
// iPhone XS Dimension
export const iPhoneXs_HEIGHT = 896;
// iPhone XsMax Dimension
export const iPhoneXsMax_HEIGHT = 896;
// iPhone SE Dimension
export const iPhoneSE_HEIGHT = 568;
// ? iPhone 11 Family
// iPhone 11 Dimension
export const iPhone11_HEIGHT = 896;
// iPhone 11 Pro Dimension
export const iPhone11Pro_HEIGHT = 812;
// iPhone 11 Pro Max Dimension
export const iPhone11ProMax_HEIGHT = 896;
// ? iPhone 12 Family
// iPhone 12 Dimension
export const iPhone12_HEIGHT = 844;
// iPhone 12 Pro Dimension
export const iPhone12Pro_HEIGHT = 844;
// iPhone 12 Pro Max Dimension
export const iPhone12ProMax_HEIGHT = 926;
// iPhone 12 Mini Dimension
export const iPhone12Mini_HEIGHT = 812;

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
  spacing,
}: {
  index: number;
  numColumns: number;
  spacing?: number;
}) => ((index + 1) / numColumns === 0 ? 0 : spacing);

export const pxToNum = (px = '0px'): number => {
  const num = parseInt(px.replace('px', ''), 10);
  return PixelRatio.roundToNearestPixel(num * scale);
};

export function getStatusBarHeight(safe?: boolean) {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  });
}

export function getBottomSpace() {
  return isIphoneX() ? 34 : 0;
}

/** design based on iphone6 */
const defaultPixelRatio = 1;
const designWidth = 375;
const designHeight = 667;

// px is converted to dp
const dpWidth = designWidth / defaultPixelRatio;
const dpHeight = designHeight / defaultPixelRatio;

//Get zoom ratio
const scale = Math.min(SCREEN_HEIGHT / dpHeight, SCREEN_WIDTH / dpWidth);

export const ONE_PIXEL = StyleSheet.hairlineWidth;

export const screenHeight = SCREEN_HEIGHT;
export const screenWidth = SCREEN_WIDTH;

/**
 * A public method to adapt to the screen size and pixel density
 * @param size Design draft size
 * @param scaleWithSystem Whether to scale with the phone system font size
 */
export const px = (size: number) => {
  return PixelRatio.roundToNearestPixel(size * scale);
};
