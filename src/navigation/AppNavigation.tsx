import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { KittenListOption, KittenListScreen } from '_app/screens';
import { useTheme } from '_app/store/useTheme';

const Stack = createStackNavigator<AppStackParams>();

export type AppStackParams = {
  Splash: undefined;
  KittenList: undefined;
  PostDetail: { state: PostsApi.Datum };
};

const AppNavigation = () => {
  const { tw } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="KittenList"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardStyle: {
          ...tw`bg-white dark:bg-dark`,
        },
      }}
    >
      <Stack.Screen name="KittenList" component={KittenListScreen} options={KittenListOption} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
