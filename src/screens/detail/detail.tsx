import { useCreation } from 'ahooks';
import React from 'react';
import { BottomSheetTemplate, TailwindTemplate } from '_app/components/templates';
import { getCurrentRoute } from '_app/navigation';
import { useHomeStore } from '_app/store/home/useHomeStore';

export default function DetailScreen() {
  const { menusScreen, detailScreenTitle } = useHomeStore();

  const RouteState = getCurrentRoute('DetailScreen')?.params?.state;

  const screenTitle = RouteState?.title || detailScreenTitle.TailwindCSS;

  const renderPage = useCreation(() => {
    //all detail menu here
    const menus = {
      [detailScreenTitle.TailwindCSS]: <TailwindTemplate />,
      [detailScreenTitle.BottomSheet]: <BottomSheetTemplate />,
    };

    return menus?.[screenTitle] || menus[detailScreenTitle.TailwindCSS];
  }, [menusScreen, detailScreenTitle]);

  return renderPage;
}
