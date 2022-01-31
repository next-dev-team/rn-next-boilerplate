import { NavigationContainerRef, RouteProp, StackActions } from '@react-navigation/native';
import * as React from 'react';

export type IAppStackParamKey = keyof AppStackParams;
export type IRouteParam<T extends IAppStackParamKey> = RouteProp<AppStackParams, T>['params'];
export type IRouteName<T extends IAppStackParamKey> = RouteProp<AppStackParams, T>['name'];
export type IRoutePath<T extends IAppStackParamKey> = RouteProp<AppStackParams, T>['path'];
export type IRouteKey<T extends IAppStackParamKey> = RouteProp<AppStackParams, T>['key'];

export const navigationRef = React.createRef<NavigationContainerRef<AppStackParams>>();

export function navigate<T extends IAppStackParamKey>(name: IRouteName<T>, param?: IRouteParam<T>) {
  navigationRef.current?.navigate(name, param as any);
}

export function navigateReplace<T extends IAppStackParamKey>(
  name: RouteProp<AppStackParams, T>['name'],
  param?: IRouteParam<T>
) {
  navigationRef.current?.dispatch(StackActions.replace(name, param));
}

export const isCanGoBack = () => {
  return navigationRef.current?.canGoBack();
};

export function goBack() {
  if (isCanGoBack()) {
    navigationRef.current?.goBack();
  }
}

export const popToTop = () => {
  navigationRef.current?.dispatch(StackActions.popToTop());
};

export const navigateReset = (params: any) => {
  navigationRef.current?.reset(params);
};

export function getCurrentRoute<T extends IAppStackParamKey>(
  name: IRouteName<T>,
  params?: IRouteParam<T>,
  path?: IRoutePath<T>,
  key?: IRouteKey<T>
) {
  return navigationRef.current?.getCurrentRoute() as unknown as {
    name: typeof name;
    params: typeof params;
    path: typeof path;
    key: typeof key;
  };
}

export const getCurrentState = (name: IAppStackParamKey) => {
  return getCurrentRoute(name as IAppStackParamKey)?.params?.state;
};

export const getCurrentParam = (name: IAppStackParamKey) => {
  return getCurrentRoute(name as IAppStackParamKey)?.params?.state;
};
