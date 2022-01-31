import { Box, SvgIcon } from '@/components/atoms';
import React from 'react';
import { ViewStyle } from 'react-native';
import RoundedCheckboxGroup, { ICheckboxButton } from 'react-native-rounded-checkbox-group';

const styles = {
  innerStyle: { height: 45, width: 45, borderRadius: 75 },
};

const _outerStyle = (borderColor: string): ViewStyle => ({
  width: 55,
  height: 55,
  marginLeft: 16,
  borderRadius: 60,
  borderColor: borderColor,
});

const staticData: ICheckboxButton[] = [
  {
    id: 0,
    text: '',
    checkedColor: '#ff7473',
    uncheckedColor: '#fbbfbb',
    outerStyle: _outerStyle('#fbbfbb'),
    innerStyle: styles.innerStyle,
  },
  {
    id: 1,
    text: '',
    checkedColor: '#5567e9',
    uncheckedColor: '#afb5f5',
    outerStyle: _outerStyle('#afb5f5'),
    innerStyle: styles.innerStyle,
  },
  {
    id: 2,
    text: '',
    checkedColor: '#a98ae7',
    uncheckedColor: '#cab6f4',
    outerStyle: _outerStyle('#cab6f4'),
    innerStyle: styles.innerStyle,
  },
  {
    id: 3,
    text: '',
    checkedColor: '#fcb779',
    uncheckedColor: '#ffd1a7',
    outerStyle: _outerStyle('#ffd1a7'),
    innerStyle: styles.innerStyle,
  },
];

export const RoundedCheckboxGroupTemplate = () => {
  const [, setSelectedItem] = React.useState<ICheckboxButton | undefined>(undefined);

  return (
    <Box className="items-center justify-center flex-1">
      <RoundedCheckboxGroup
        data={staticData}
        initial={2}
        onChange={(selectedItem: ICheckboxButton) => {
          setSelectedItem(selectedItem);
          console.log(selectedItem);
        }}
        component={(isActive: boolean) => isActive && <SvgIcon name="checkcircle" color={'white'} size={28} />}
      />
    </Box>
  );
};
