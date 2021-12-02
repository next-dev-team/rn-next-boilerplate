import { Box, Image, Text } from 'components/atoms';
import SvgIcon from 'components/atoms/svg-icon';
import React from 'react';
import { Alert } from 'react-native';
import { twColor } from 'utils';

const KittenListScreen = () => {
  return (
    <Box className="p-4">
      <Box touchOpacity>
        <Image
          className="h-44 rounded-xl mb-4 w-full"
          src="https://thecodingcompany.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1630913458778%2FvlDkZyXQc.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
        />
        <Text numberOfLines={2} className="font-medium text-base mb-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indus
        </Text>

        <Box
          className="flex-row items-center"
          touchOpacity
          onPress={() => {
            Alert.alert('hello');
          }}
        >
          <SvgIcon size={24} name="date" color={twColor(`bg-green-500`)} />
          <Text className="ml-1 text-caption">Next Dev</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default KittenListScreen;
