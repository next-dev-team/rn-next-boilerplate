import { Box, Button, Text } from '@/components/atoms';
import { BottomSheet } from '@/components/group';
import { useDisplayStore } from '@/store';
import React from 'react';

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
