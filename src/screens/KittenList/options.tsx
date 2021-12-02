import { StackNavigationOptions } from '@react-navigation/stack';
import { Box, Image } from 'components/atoms';
import SvgIcon from 'components/atoms/svg-icon';
import React, { useState } from 'react';
import { ColorSchemeName } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { tw, twColor } from 'utils';

const RenderOption = () => {
  const [dark, setDark] = useState<ColorSchemeName>('dark');

  const toggleDark = () => {
    tw.setColorScheme(dark);
    setDark(dark === 'light' ? 'dark' : 'light');
  };
  return (
    <>
      {/* ============= tailwind style ========= */}
      <Box className="px-4 pt-4 flex-row justify-between items-center mb-4">
        <Box className="flex-1 flex-row items-center border border-gray-200 rounded-full shadow-md bg-white dark:bg-gray-600 px-4 h-11">
          <SvgIcon name="search" color={twColor(`bg-green-400`)} size={24} />
          <TextInput
            style={tw`ml-1 dark:text-white`}
            placeholder="Search..."
            placeholderTextColor={dark === 'light' ? twColor(`bg-white`) : twColor(`bg-black`)}
            underlineColorAndroid="transparent"
          />
        </Box>
        {dark === 'dark' ? (
          <SvgIcon onPress={toggleDark} name="day" color={twColor(`bg-yellow-400`)} size={28} style={tw`mx-3`} />
        ) : (
          <SvgIcon onPress={toggleDark} name="night" color={twColor(`bg-black`)} size={28} style={tw`mx-3`} />
        )}
        <Image
          className="h-10 w-10 rounded-full border border-gray-300"
          src="https://thecodingcompany.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1630913458778%2FvlDkZyXQc.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
        />
      </Box>

      {/* ============= inline style ========= */}
      {/* <Box
        style={{
          paddingHorizontal: 16,
          paddingTop: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Box
          style={{
            flex:1,
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 9999,
            backgroundColor: 'white',
            paddingHorizontal: 16,
            height: 44,
          }}
        >
          <SvgIcon name="search" color="green" size={24} />
          <TextInput
            style={{
              marginLeft: 4,
            }}
            placeholder="Search..."
            underlineColorAndroid="transparent"
          />
        </Box>
        <Image
          style={{
            height: 40,
            width: 40,
            borderRadius: 9999,
            marginBottom: 16,
            borderWidth: 1,
            borderColor: 'white',
          }}
          src="https://thecodingcompany.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1630913458778%2FvlDkZyXQc.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
        />
      </Box> */}
    </>
  );
};

const KittenListOption: StackNavigationOptions = {
  header: () => <RenderOption />,
};

export default KittenListOption;
