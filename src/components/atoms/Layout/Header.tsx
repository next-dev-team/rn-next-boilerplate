import { CusBox, CusButton, CusText } from 'components/atoms';
import { useNetWork } from 'hooks/useNetwork';
import { goBack, isCanGoBack } from 'navigation/NavigationService';
import React, { ReactNode } from 'react';
import { SpacingTheme } from 'themes/spacing';
import { ifIphoneX } from 'utils/dimension';

export type CusHeaderProps = {
  center?: string | boolean | ReactNode;
  left?: ReactNode | string | boolean;
  right?: ReactNode | boolean;
};

const CusHeader = (props: CusHeaderProps) => {
  const { netInfo } = useNetWork();
  const { center, left = true, right = true } = props;

  return (
    <CusBox
      bg="primary400"
      height={50}
      alignItems="center"
      paddingHorizontal="l"
      flexDirection="row"
      mt={ifIphoneX<SpacingTheme>('x40', 'none')}
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
