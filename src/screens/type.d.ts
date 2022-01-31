declare type IAppStackParamKey = keyof AppStackParams;
declare type IRouteParam<T extends IAppStackParamKey> = RouteProp<AppStackParams, T>['params'];
declare type IRouteName<T extends IAppStackParamKey> = RouteProp<AppStackParams, T>['name'];
declare type IRoutePath<T extends IAppStackParamKey> = RouteProp<AppStackParams, T>['path'];
declare type IRouteKey<T extends IAppStackParamKey> = RouteProp<AppStackParams, T>['key'];

type IMenus = { title: string; route?: keyof AppStackParams };

declare type AppStackParams = {
  KittenList: undefined;
  DetailScreen: { state: { title: string; menusScreen: IMenus[] } };
};
