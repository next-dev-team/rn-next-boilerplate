import React from 'react';
import { Box, Button, Text } from '_app/components/atoms';
import { BottomSheet } from '_app/components/group';
import { useDisplayStore } from '_app/store';

export function BottomSheetTemplate() {
  const { bSheetHomeRef, openBSheetHome, closeBSheetHome } = useDisplayStore();

  return (
    <Box className="flex-1 items-center justify-center">
      <Button className="bg-red-400 mb-6" label="open bottom sheet" onPress={closeBSheetHome} />
      <Button className="bg-green-500 mb-24" label="open bottom sheet" onPress={openBSheetHome} />

      <BottomSheet ref={bSheetHomeRef} snapPoints={['20%', '50%']}>
        <Text className="capitalize">welcome to bottom sheet</Text>
      </BottomSheet>
    </Box>
  );
}
