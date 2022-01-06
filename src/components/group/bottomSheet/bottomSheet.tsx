import BTSheet, { BottomSheetBackdrop, BottomSheetProps } from '@gorhom/bottom-sheet';
import { useMemoizedFn } from 'ahooks';
import React, { ReactNode, Ref, useMemo } from 'react';
import { Box } from '_app/components/atoms';
import { useTheme } from '_app/store/useTheme';
import CustomHandle from './bottomSheetHandler';

export type IBottomSheet = { children: ReactNode; enableBackdrop?: boolean } & Partial<BottomSheetProps>;

const BottomSheet = React.forwardRef(({ children, enableBackdrop, ...rest }: IBottomSheet, ref: Ref<any>) => {
  const { tw } = useTheme();

  // variables
  const snapPoints = useMemo(() => ['20%', '50%'], []);

  const renderBackdrop = useMemoizedFn(props => <BottomSheetBackdrop pressBehavior="none" {...props} />);
  // renders
  const renderCustomHandle = useMemoizedFn(props => <CustomHandle title="Welcome Sila" {...props} />);

  return (
    <BTSheet
      ref={ref}
      handleComponent={renderCustomHandle}
      backgroundStyle={tw`bg-white dark:bg-gray-900`}
      backdropComponent={enableBackdrop ? renderBackdrop : null}
      style={[tw`flex-1 shadow-radius-2 shadow-2xl shadow-black rounded-tr-3xl rounded-tl-3xl`]}
      snapPoints={snapPoints}
      animateOnMount={true}
      {...rest}
    >
      <Box className="p-4">{children}</Box>
    </BTSheet>
  );
});

export default BottomSheet;
