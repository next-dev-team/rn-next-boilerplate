import { Box } from 'components/atoms';
import { Profile1 } from 'components/molecules';
import React from 'react';

const KittenListScreen = () => {
  // const [dark, setDark] = useState<ColorSchemeName>('dark');

  // const toggleDark = () => {
  //   tw.setColorScheme(dark);
  //   setDark(dark === 'light' ? 'dark' : 'light');
  // };

  return (
    <Box className="px-3">
      <Profile1 />
    </Box>
  );
};

export default KittenListScreen;
