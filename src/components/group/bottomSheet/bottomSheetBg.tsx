import { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet';
import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { interpolateColor, useAnimatedStyle } from 'react-native-reanimated';
import { useTheme } from '_app/store/useTheme';

interface CustomBackgroundProps extends BottomSheetBackgroundProps {}

const BottomSheetBg: React.FC<CustomBackgroundProps> = ({ style, animatedIndex }) => {
  const { tw } = useTheme();
  //#region styles
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(animatedIndex.value, [0, 1], ['#ffffff', '#a8b5eb']),
  }));
  const containerStyle = useMemo(
    () => [styles.container, style, containerAnimatedStyle],
    [style, containerAnimatedStyle]
  );
  // render
  return <Animated.View pointerEvents="none" style={containerStyle} />;
};

export default BottomSheetBg;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
  },
});
