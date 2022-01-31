import { Box } from '@/components/atoms';
import { useTheme } from '@/store';
import BTSheet, { BottomSheetBackdrop, BottomSheetProps } from '@gorhom/bottom-sheet';
import React, { ReactNode, Ref, useCallback, useMemo } from 'react';
import CustomHandle from './bottomSheetHandler';

export type IBottomSheet = { children: ReactNode; enableBackdrop?: boolean } & Partial<BottomSheetProps>;

const BottomSheet = React.forwardRef(({ children, enableBackdrop, ...rest }: IBottomSheet, ref: Ref<any>) => {
  const { tw } = useTheme();

  // variables
  const snapPoints = useMemo(() => ['20%', '50%'], []);

  const renderBackdrop = useCallback(props => <BottomSheetBackdrop pressBehavior="none" {...props} />, []);
  // renders
  const renderCustomHandle = useCallback(props => <CustomHandle title="Welcome Sila" {...props} />, []);

  return (
    <BTSheet
      ref={ref}
      handleComponent={renderCustomHandle}
      backgroundStyle={tw`bg-white dark:bg-gray-800`}
      backdropComponent={enableBackdrop ? renderBackdrop : null}
      style={[tw`flex-1 shadow-radius-2 shadow-xl shadow-black dark:shadow-white rounded-tr-3xl rounded-tl-3xl`]}
      snapPoints={snapPoints}
      animateOnMount={true}
      {...rest}
    >
      <Box className="p-4">{children}</Box>
    </BTSheet>
  );
});

export default BottomSheet;
