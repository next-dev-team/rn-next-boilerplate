import React from 'react';
import { Box, Image, Text, TextBg } from '_app/components/atoms';
import SvgIcon from '_app/components/atoms/svg-icon';
import { useSettingsStore } from '_app/store/settings/useSettingsStore';
import { useTheme } from '_app/store/useTheme';

const KittenListScreen = () => {
  const { inc, dec, counter } = useSettingsStore();
  const { twColor } = useTheme();

  console.log('counter', counter);

  return (
    <Box className="p-4">
      <Box>
        <Image
          className="h-44 rounded-xl mb-4 w-full"
          src="https://thecodingcompany.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1630913458778%2FvlDkZyXQc.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
        />
        <Text numberOfLines={2} className="font-medium text-base mb-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indus
        </Text>

        <Box className="flex-row items-center" touchOpacity>
          <SvgIcon size={24} name="date" color={twColor(`bg-green-500`)} />
          <Text className="ml-1 text-caption">Next Dev</Text>
        </Box>
      </Box>
      <Box className="h-20 flex-row flex justify-center items-center">
        <Box
          className={`${
            counter > 0 ? 'bg-yellow-500' : 'bg-gray-400'
          } rounded-full flex-row justify-center items-center h-12 w-12`}
          touchOpacity={counter > 0}
          onPress={() => {
            dec(1);
          }}
        >
          <TextBg>-</TextBg>
        </Box>
        <Text className="mx-4">{counter}</Text>
        <Box
          className="bg-green-500 rounded-full flex-row justify-center items-center h-12 w-12"
          touchOpacity
          onPress={() => {
            inc(1);
          }}
        >
          <TextBg>+</TextBg>
        </Box>
      </Box>
    </Box>
  );
};

export default KittenListScreen;
