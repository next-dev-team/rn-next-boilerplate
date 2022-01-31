import {
  BottomSheetTemplate,
  ImageTemplate,
  RoundedCheckboxGroupTemplate,
  TailwindTemplate,
} from '@/components/templates';
import { getCurrentState } from '@/services';
import { useHomeStore } from '@/store';
import { useCreation } from 'ahooks';
import React from 'react';

export default function DetailScreen() {
  const { menusScreen, detailScreenTitle } = useHomeStore();

  const RouteState = getCurrentState('DetailScreen');

  const screenTitle = RouteState?.title || detailScreenTitle.TailwindCSS;

  const renderPage = useCreation(() => {
    //all detail menu here
    const menus = {
      [detailScreenTitle.TailwindCSS]: <TailwindTemplate />,
      [detailScreenTitle.BottomSheet]: <BottomSheetTemplate />,
      [detailScreenTitle.ProgressiveFastImage]: <ImageTemplate />,
      [detailScreenTitle.RoundedCheckboxGroup]: <RoundedCheckboxGroupTemplate />,
    };

    return menus?.[screenTitle] || menus[detailScreenTitle.TailwindCSS];
  }, [menusScreen, detailScreenTitle]);

  return renderPage;
}
