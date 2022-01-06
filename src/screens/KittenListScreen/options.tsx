import { StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Image, Text } from '_app/components/atoms';
import SvgIcon from '_app/components/atoms/svg-icon';
import { useSettingsStore } from '_app/store/settings/useSettingsStore';
import { useTheme } from '_app/store/useTheme';

const RenderOption = () => {
  const { colorScheme, setColorScheme, currentLocaleKey, setCurrentLocaleKey } = useSettingsStore();
  console.log('colorScheme', colorScheme);
  const { t } = useTranslation();
  const { twColor, tw } = useTheme();

  return (
    <>
      {/* ============= tailwind style ========= */}
      <Box className="px-4 flex-row justify-between items-center ">
        <Box className="flex-1 flex-row items-center border border-gray-200 rounded-full shadow-md bg-white dark:bg-gray-600 px-4 h-11">
          <Text>{t('settings.currentLanguage', { locale: currentLocaleKey })}</Text>
        </Box>
        <Box
          touchOpacity
          onPress={() => {
            setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
          }}
        >
          <SvgIcon name="day" color={twColor(`bg-black dark:bg-yellow-500`)} size={38} style={tw`mx-3`} />
        </Box>
        <Box
          touchOpacity
          onPress={() => {
            setCurrentLocaleKey(currentLocaleKey === 'en' ? 'km' : 'en');
          }}
          className="mr-3 bg-gray-300 dark:bg-yellow-700 h-9 w-9 rounded-full items-center justify-center border"
        >
          <Text className="uppercase font-bold text-black">{currentLocaleKey}</Text>
        </Box>

        <Image
          className="h-10 w-10 rounded-full border border-gray-300"
          src="https://thecodingcompany.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1630913458778%2FvlDkZyXQc.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
        />
      </Box>
    </>
  );
};

const KittenListOption: StackNavigationOptions = {
  header: () => <RenderOption />,
};

export default KittenListOption;
