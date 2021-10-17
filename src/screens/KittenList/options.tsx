import { StackNavigationOptions } from '@react-navigation/stack';
import { CusButton, CusText, Flex } from 'components/atoms';
import Header from 'components/atoms/Layout/Header';
import SvgIcon from 'components/atoms/svg-icon';
import { useNetWork } from 'hooks/useNetwork';
import { useAppTheme } from 'hooks/useTheme';
import React from 'react';
import { TextInput } from 'react-native';
import { SCREEN_WIDTH } from 'utils/dimension';

const RenderHeader = () => {
  const { colors, spacing } = useAppTheme();
  const { netInfo } = useNetWork();

  return (
    <Header
      boxProps={{ bg: 'gray100' }}
      left={
        <>
          <TextInput
            placeholder="Search Post..."
            style={{
              width: SCREEN_WIDTH * 0.65,
              paddingHorizontal: spacing.m,
              height: 38,
              borderWidth: 1,
              borderColor: colors.gray200,
              borderRadius: 16,
              backgroundColor: 'white',
            }}
          />
        </>
      }
      right={
        <Flex>
          <CusButton mr="s" bg="white" borderRadius="full">
            <SvgIcon name="plus" size={35} />
          </CusButton>
          <CusText>{netInfo?.isConnected && netInfo?.isInternetReachable ? 'Online' : 'Offline'}</CusText>
          {/* <FastImage
            source={{ uri: convertToHttps(fakerData().random.image()) }}
            style={{ width: 40, height: 40, borderRadius: 40 / 2, borderWidth: 1.5, borderColor: colors.gray600 }}
          /> */}
        </Flex>
      }
    />
  );
};
const KittenListOption: StackNavigationOptions = {
  header: () => <RenderHeader />,
};

export default KittenListOption;
