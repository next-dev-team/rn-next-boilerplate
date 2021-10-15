import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { KittenList, KittenListOption } from 'screens';
import PostDetail from 'screens/PostDetail';
import PostDetailOption from 'screens/PostDetail/options';

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
      }}
    >
      {/* <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} /> */}
      <Stack.Screen name="KittenList" component={KittenList} options={KittenListOption} />
      <Stack.Screen name="PostDetail" component={PostDetail} options={PostDetailOption} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
