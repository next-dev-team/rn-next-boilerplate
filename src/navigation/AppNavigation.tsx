import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { KittenList, KittenListOption } from '_app/screens';
import { useTailwind } from '_app/store/useTailwind';

const Stack = createStackNavigator<AppStackParams>();

export type AppStackParams = {
  Splash: undefined;
  KittenList: undefined;
  PostDetail: { state: PostsApi.Datum };
};

const AppNavigation = () => {
  const { tw } = useTailwind();
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
      <Stack.Screen name="KittenList" component={KittenList} options={KittenListOption} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
