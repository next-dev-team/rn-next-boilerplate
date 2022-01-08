import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { DetailScreen, HomeOptions, HomeScreen } from '_app/screens';
import { useTheme } from '_app/store';

const Stack = createStackNavigator<AppStackParams>();

const AppNavigation = () => {
  const { tw } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="KittenList"
      // will apply to all option style except some screen has own own option
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardStyle: {
          ...tw`bg-white dark:bg-dark`,
        },
        headerStyle: {
          // ...tw`pt-3`,
        },
      }}
    >
      <Stack.Screen name="KittenList" component={HomeScreen} options={HomeOptions} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
