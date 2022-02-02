import { CommonActions, createNavigationContainerRef, RouteProp, StackActions } from '@react-navigation/native';

export type IAppStackParamKey = keyof AppStackParams;
export type IRouteParam<T extends IAppStackParamKey> = RouteProp<AppStackParams, T>['params'];
export type IRouteName<T extends IAppStackParamKey> = RouteProp<AppStackParams, T>['name'];
export type IRoutePath<T extends IAppStackParamKey> = RouteProp<AppStackParams, T>['path'];
export type IRouteKey<T extends IAppStackParamKey> = RouteProp<AppStackParams, T>['key'];

export const navigationRef = createNavigationContainerRef<AppStackParams>();

export function navigate<T extends IAppStackParamKey>(name: IRouteName<T>, param?: IRouteParam<T>) {
  navigationRef?.navigate(name, param as any);
}

export function navigateAndFirstReset<T extends IAppStackParamKey>(name: IRouteName<T>, index = 0) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{ name }],
      })
    );
  }
}

export function navigateReplace<T extends IAppStackParamKey>(
  name: RouteProp<AppStackParams, T>['name'],
  param?: IRouteParam<T>
) {
  if (navigationRef.isReady()) {
    navigationRef?.dispatch(StackActions.replace(name, param));
  }
}

export const isCanGoBack = () => {
  return navigationRef.isReady() && navigationRef?.canGoBack();
};

export function goBack() {
  if (isCanGoBack()) {
    navigationRef?.goBack();
  }
}

export const popToTop = () => {
  if (navigationRef.isReady()) {
    navigationRef?.dispatch(StackActions.popToTop());
  }
};

export const navigateReset = (params: any) => {
  if (navigationRef.isReady()) {
    navigationRef?.reset(params);
  }
};

export function getCurrentRoute<T extends IAppStackParamKey>(
  name: IRouteName<T>,
  params?: IRouteParam<T>,
  path?: IRoutePath<T>,
  key?: IRouteKey<T>
) {
  if (navigationRef.isReady()) {
    return navigationRef?.getCurrentRoute() as unknown as {
      name: typeof name;
      params: typeof params;
      path: typeof path;
      key: typeof key;
    };
  }
  return false as unknown as undefined;
}

export const getCurrentState = (name: IAppStackParamKey) => {
  return getCurrentRoute(name as IAppStackParamKey)?.params?.state;
};

export const getCurrentParam = (name: IAppStackParamKey) => {
  return getCurrentRoute(name as IAppStackParamKey)?.params?.state;
};
