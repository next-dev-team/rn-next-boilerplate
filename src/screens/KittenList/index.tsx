import React from 'react';
import { Box, Image, Text, TextBg } from '_app/components/atoms';
import SvgIcon from '_app/components/atoms/svg-icon';
import { useSettingsStore } from '_app/store/settings/useSettingsStore';
import { useTailwind } from '_app/store/useTailwind';

const KittenListScreen = () => {
  const { setCounter, counter } = useSettingsStore();
  const { twColor } = useTailwind();

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
          className="bg-yellow-500 rounded-lg px-4 py-2 flex-row justify-center"
          touchOpacity
          onPress={() => {
            setCounter(2);
          }}
        >
          <TextBg>-</TextBg>
        </Box>
        <Text>{counter}</Text>
        <Box
          className="bg-green-500 rounded-lg px-4 py-2 flex-row justify-center"
          touchOpacity
          onPress={() => {
            setCounter(1);
          }}
        >
          <TextBg>+</TextBg>
        </Box>
      </Box>
    </Box>
  );
};

export default KittenListScreen;
