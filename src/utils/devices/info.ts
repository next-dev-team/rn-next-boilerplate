import { Dimensions, Platform, ScaledSize } from 'react-native';
import {
  iPhone11ProMax_HEIGHT,
  iPhone11Pro_HEIGHT,
  iPhone11_HEIGHT,
  iPhone12Mini_HEIGHT,
  iPhone12ProMax_HEIGHT,
  iPhone12Pro_HEIGHT,
  iPhone12_HEIGHT,
  iPhoneSE_HEIGHT,
  iPhoneXr_HEIGHT,
  iPhoneXsMax_HEIGHT,
  iPhoneXs_HEIGHT,
  iPhoneX_HEIGHT,
} from '.';

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
// Credit
// https://github.com/WrathChaos/react-native-helpers/blob/master/lib/helpers/notch/Notch.ts

/**
 * This and hasNotch functions are the same,
 * just want to make two functions with different names
 * hasNotch is more accurate name
 */

const detection = (): boolean => {
  const dim = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (isIPhoneX(dim) ||
      isIPhoneXr(dim) ||
      isIPhoneXs(dim) ||
      isIPhoneXsMax(dim) ||
      isIPhone11(dim) ||
      isIPhone11Pro(dim) ||
      isIPhone11ProMax(dim) ||
      isIPhone12(dim) ||
      isIPhone12Pro(dim) ||
      isIPhone12ProMax(dim))
  );
};

export const isIPhoneNotchFamily = (): boolean => {
  return detection();
};

export const isIPhoneXFamily = (): boolean => {
  return detection();
};

export const hasNotch = (): boolean => {
  return detection();
};

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const PlatformVersion = Platform.Version;

export const isIPhoneSE = (dim: ScaledSize) => dim.height === iPhoneSE_HEIGHT;
// ? iPhone X Family
export const isIPhoneX = (dim: ScaledSize) => dim.height === iPhoneX_HEIGHT;
export const isIPhoneXr = (dim: ScaledSize) => dim.height === iPhoneXr_HEIGHT;
export const isIPhoneXs = (dim: ScaledSize) => dim.height === iPhoneXs_HEIGHT;
export const isIPhoneXsMax = (dim: ScaledSize) => dim.height === iPhoneXsMax_HEIGHT;
// ? iPhone 11 Family
export const isIPhone11 = (dim: ScaledSize) => dim.height === iPhone11_HEIGHT;
export const isIPhone11Pro = (dim: ScaledSize) => dim.height === iPhone11Pro_HEIGHT;
export const isIPhone11ProMax = (dim: ScaledSize) => dim.height === iPhone11ProMax_HEIGHT;
// ? iPhone 12 Family
export const isIPhone12 = (dim: ScaledSize) => dim.height === iPhone12_HEIGHT;
export const isIPhone12Pro = (dim: ScaledSize) => dim.height === iPhone12Pro_HEIGHT;
export const isIPhone12ProMax = (dim: ScaledSize) => dim.height === iPhone12ProMax_HEIGHT;
export const isIPhone12Mini = (dim: ScaledSize) => dim.height === iPhone12Mini_HEIGHT;
