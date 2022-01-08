import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React, { FC } from 'react';

const withModalProvider = (Component: FC) => () =>
  (
    <BottomSheetModalProvider>
      <Component />
    </BottomSheetModalProvider>
  );

export default withModalProvider;
