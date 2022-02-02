import {
  BottomSheetTemplate,
  ImageTemplate,
  ModalTemplate,
  RecyclerFlatListTemplate,
  RoundedCheckboxGroupTemplate,
  TailwindTemplate,
} from '@/components/templates';
import { getCurrentState } from '@/services';
import { useHomeStore } from '@/store';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React from 'react';

export default function DetailScreen() {
  const { detailScreenTitle } = useHomeStore();

  const RouteState = getCurrentState('DetailScreen');

  const screenTitle = RouteState?.title || detailScreenTitle.TailwindCSS;

  const renderPage = () => {
    //all detail menu here
    const menus = {
      [detailScreenTitle.TailwindCSS]: <TailwindTemplate />,
      [detailScreenTitle.BottomSheet]: <BottomSheetTemplate />,
      [detailScreenTitle.ProgressiveFastImage]: <ImageTemplate />,
      [detailScreenTitle.RoundedCheckboxGroup]: <RoundedCheckboxGroupTemplate />,
      [detailScreenTitle.RecyclerFlatList]: <RecyclerFlatListTemplate />,
      [detailScreenTitle.ModalTemplate]: (
        <BottomSheetModalProvider>
          <ModalTemplate />
        </BottomSheetModalProvider>
      ),
    };

    return menus?.[screenTitle] || menus[detailScreenTitle.TailwindCSS];
  };

  return renderPage();
}
