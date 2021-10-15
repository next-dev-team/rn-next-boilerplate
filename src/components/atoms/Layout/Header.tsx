import { CusBox, CusButton, CusText } from 'components/atoms';
import { useNetWork } from 'hooks/useNetwork';
import { goBack, isCanGoBack } from 'navigation/NavigationService';
import React, { ReactNode } from 'react';
import { SpacingTheme } from 'themes/spacing';
import { ifIphoneX, SCREEN_HEIGHT } from 'utils/dimension';
import { BoxProps } from '../Box';

export type CusHeaderProps = {
  center?: string | boolean | ReactNode;
  left?: string | boolean | ReactNode;
  right?: ReactNode | boolean;
  isFullImg?: boolean;
  children?: ReactNode;
  boxProps?: BoxProps;
};

const CusHeader = (props: CusHeaderProps) => {
  const { netInfo } = useNetWork();
  const { center, left = true, right = true, isFullImg, children, boxProps } = props;

  if (isFullImg) {
    return (
      <CusBox position="absolute" top={0} width="100%" bg="mask1" height={SCREEN_HEIGHT} {...boxProps}>
        {children}
      </CusBox>
    );
  }
  return (
    <CusBox
      height={50}
      alignItems="center"
      paddingHorizontal="l"
      flexDirection="row"
      mt={ifIphoneX<SpacingTheme>('x40', 'none')}
      {...boxProps}
    >
      <CusBox flex={1} flexDirection="row" alignItems="center" justifyContent="flex-start">
        {typeof left === 'boolean' && left && isCanGoBack() ? (
          <CusButton onPress={goBack} flexDirection="row" alignItems="center">
            <CusText variant="subHead" opacity={0.9}>
              &#60;&nbsp;
            </CusText>
            <CusText variant="body" opacity={0.9}>
              Back
            </CusText>
          </CusButton>
        ) : (
          left
        )}
      </CusBox>

      <CusBox flex={1} justifyContent="center" alignItems="center">
        {typeof center === 'string' ? (
          <CusText variant="body" opacity={0.9} textAlign="center">
            {center}
          </CusText>
        ) : (
          center
        )}
      </CusBox>

      <CusBox flex={1} justifyContent="flex-end">
        {typeof right === 'boolean' ? (
          <CusText variant="body" opacity={0.9} textAlign="right">
            {netInfo?.isConnected ? 'Online' : 'Offline'}
          </CusText>
        ) : (
          right
        )}
      </CusBox>
    </CusBox>
  );
};

export default CusHeader;
