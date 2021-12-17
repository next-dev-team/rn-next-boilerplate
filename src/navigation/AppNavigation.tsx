import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { KittenList, KittenListOption } from '_app/screens';
import { tw } from '_app/utils';

const Stack = createStackNavigator<AppStackParams>();

export type AppStackParams = {
  Splash: undefined;
  KittenList: undefined;
  PostDetail: { state: PostsApi.Datum };
};

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="KittenList"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardStyle: tw`bg-gray-200 dark:bg-primary`,
      }}
    >
      <Stack.Screen name="KittenList" component={KittenList} options={KittenListOption} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
