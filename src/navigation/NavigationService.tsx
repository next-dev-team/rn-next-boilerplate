import { NavigationContainerRef, RouteProp, StackActions } from '@react-navigation/native';
import * as React from 'react';

const navigationRef = React.createRef<NavigationContainerRef<AppStackParams>>();

function navigateStack<T extends keyof AppStackParams>(
  name: RouteProp<AppStackParams, T>['name'],
  param?: RouteProp<AppStackParams, T>['params']
) {
  navigationRef.current?.navigate(name, param as any);
}

function navigateReplaceStack<T extends keyof AppStackParams>(
  name: RouteProp<AppStackParams, T>['name'],
  param?: RouteProp<AppStackParams, T>['params']
) {
  navigationRef.current?.dispatch(StackActions.replace(name, param));
}

const isCanGoBack = () => {
  return navigationRef.current?.canGoBack();
};

function goBack() {
  if (isCanGoBack()) {
    navigationRef.current?.goBack();
  }
}

function getCurrentRoute<T extends keyof AppStackParams>(
  name: RouteProp<AppStackParams, T>['name'],
  params?: RouteProp<AppStackParams, T>['params'],
  path?: RouteProp<AppStackParams, T>['path'],
  key?: RouteProp<AppStackParams, T>['key']
) {
  return navigationRef.current?.getCurrentRoute() as unknown as {
    name: typeof name;
    params: typeof params;
    path: typeof path;
    key: typeof key;
  };
}

export { navigateStack, goBack, navigationRef, getCurrentRoute, navigateReplaceStack, isCanGoBack };
