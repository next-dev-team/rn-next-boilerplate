import { StackHeaderProps, StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import { Box, SvgIcon, Text } from '_app/components/atoms';
import { navigate } from '_app/services';
import { useTheme } from '_app/store';

const RenderOption = (props: StackHeaderProps) => {
  const { twColor } = useTheme();
  const RouteParam = props.route?.params as any;
  const screenTitle = RouteParam?.state?.title;
  return (
    <>
      {/* ============= tailwind style ========= */}
      <Box className="px-4 flex-row justify-between items-center ">
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
