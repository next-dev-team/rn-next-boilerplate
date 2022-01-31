import { Box, SvgIcon, Text } from '@/components/atoms';
import { navigate } from '@/services';
import { useTheme } from '@/store';
import { StackHeaderProps, StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';

const RenderOption = (props: StackHeaderProps) => {
  const { twColor } = useTheme();
  const RouteParam = props.route?.params as any;
  const screenTitle = RouteParam?.state?.title;
  return (
    <>
      {/* ============= tailwind style ========= */}
      <Box className="px-4 flex-row justify-between items-center mb-2">
        <Box className="p-1 rounded-full bg-red-400" touchOpacity onPress={() => navigate('KittenList')}>
          <SvgIcon size={26} name="left" color={twColor(`bg-white`)} />
        </Box>
        {screenTitle && (
          <Box className="flex-1">
            <Text className="text-center capitalize">{screenTitle}</Text>
          </Box>
        )}
      </Box>
    </>
  );
};

const DetailOption: StackNavigationOptions = {
  header: props => <RenderOption {...props} />,
};

export default DetailOption;
