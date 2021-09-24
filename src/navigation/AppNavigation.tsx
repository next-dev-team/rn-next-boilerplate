import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { KittenItemOption, KittenList, KittenListOption } from 'screens';
import KittenItem from 'screens/KittenItem';
import { KittenSlice } from 'store/kittenSlice';

const Stack = createStackNavigator<AppStackParams>();

export type AppStackParams = {
  Splash: undefined;
  KittenList: undefined;
  KittenItem: { state?: KittenSlice['kittenList'][0] };
};

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="KittenList"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      {/* <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} /> */}
      <Stack.Screen name="KittenList" component={KittenList} options={KittenListOption} />
      <Stack.Screen name="KittenItem" component={KittenItem} options={KittenItemOption} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
