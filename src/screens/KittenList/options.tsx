import { StackNavigationOptions } from '@react-navigation/stack';
import { CusButton, CusText, Flex } from 'components/atoms';
import Header from 'components/atoms/Layout/Header';
import { useNetWork } from 'hooks/useNetwork';
import { useAppTheme } from 'hooks/useTheme';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'react-native';
import { SCREEN_WIDTH } from 'utils/dimension';

const RenderHeader = () => {
  const { colors, spacing } = useAppTheme();
  const { netInfo } = useNetWork();
  const { i18n } = useTranslation();

  return (
    <Header
      boxProps={{ bg: 'gray100' }}
      left={
        <>
          <TextInput
            placeholder="Search Post..."
            style={{
              width: SCREEN_WIDTH * 0.58,
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
          <CusText>{netInfo?.isConnected && netInfo?.isInternetReachable ? 'Online' : 'Offline'}</CusText>
          <CusButton
            ml="s"
            bg="white"
            alignItems="center"
            justifyContent="center"
            height={40}
            borderRadius="full"
            paddingHorizontal="xs"
            onPress={() => i18n.changeLanguage(i18n.language === 'ch' ? 'en' : 'ch')}
          >
            <CusText variant="caption" textTransform="uppercase">
              {i18n.language === 'ch' ? 'English' : '中国'}
            </CusText>
          </CusButton>
        </Flex>
      }
    />
  );
};
const KittenListOption: StackNavigationOptions = {
  header: () => <RenderHeader />,
};

export default KittenListOption;
