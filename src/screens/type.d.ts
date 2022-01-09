type IMenus = { title: string; route?: keyof AppStackParams };

declare type AppStackParams = {
  KittenList: undefined;
  DetailScreen: { state: { title: string; menusScreen: IMenus[] } };
};
