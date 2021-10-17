import { CusBox, CusButton, CusText } from 'components/atoms';
import { goBack, isCanGoBack } from 'navigation/NavigationService';
import React, { ReactNode } from 'react';
import { getStatusBarHeight, px } from 'utils/dimension';
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
  const { center, left = true, right = true, boxProps } = props;

  return (
    <CusBox
      bg="white"
      alignItems="center"
      paddingHorizontal="l"
      flexDirection="row"
      pb="s"
      style={{ paddingTop: getStatusBarHeight() + px(15) }}
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
        {typeof right === 'string' ? (
          <CusText variant="body" opacity={0.9} textAlign="right">
            {right}
          </CusText>
        ) : (
          <CusBox alignSelf="flex-end">{right}</CusBox>
        )}
      </CusBox>
    </CusBox>
  );
};

export default CusHeader;
