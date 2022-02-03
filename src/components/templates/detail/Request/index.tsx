import { Box, Button, Text } from '@/components/atoms';
import { BottomSheet } from '@/components/group';
import { useDisplayStore } from '@/store';
import { useExampleStore } from '@/store/settings/useExampleStore';
import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

export function RequestTemplate() {
  const { bSheetHomeRef, openBSheetHome, closeBSheetHome } = useDisplayStore();
  const { userData, getUserData, loadingGetUser } = useExampleStore();

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <Box className="flex-1 items-center justify-center">
      <Button className="bg-red-400 mb-6" label="open bottom sheet" onPress={closeBSheetHome} />
      <Button className="bg-green-500 mb-24" label="open bottom sheet" onPress={openBSheetHome} />

      <BottomSheet ref={bSheetHomeRef} snapPoints={['20%', '50%']}>
        <Box variant="scroll">
          {loadingGetUser ? (
            <ActivityIndicator />
          ) : (
            userData?.map?.(i => {
              return (
                <Box key={i.id} className="flex-row">
                  <Text className="capitalize">welcome to</Text>
                  <Text className="uppercase font-bold text-primary dark:text-primary600"> {i.name}</Text>
                </Box>
              );
            })
          )}
        </Box>
      </BottomSheet>
    </Box>
  );
}
