import { Box, Button, Text } from '@/components/atoms';
import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal } from '@gorhom/bottom-sheet';
import { range } from 'lodash';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

export const ModalTemplate = () => {
  // state
  const [backdropPressBehavior, setBackdropPressBehavior] = useState<'none' | 'close' | 'collapse'>('collapse');
  // refs
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  //#region callbacks
  const handleDismiss = useCallback(() => {
    Alert.alert('Modal Been Dismissed');
  }, []);
  const handlePresentPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);
  const handleTogglePressBehavior = useCallback(() => {
    setBackdropPressBehavior(state => {
      switch (state) {
        case 'none':
          return 'close';
        case 'close':
          return 'collapse';
        case 'collapse':
          return 'none';
      }
    });
  }, []);
  const handleExpandPress = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);
  const handleCollapsePress = useCallback(() => {
    bottomSheetRef.current?.collapse();
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);
  //#endregion

  // renders
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => <BottomSheetBackdrop {...props} pressBehavior={backdropPressBehavior} />,
    [backdropPressBehavior]
  );

  return (
    <View style={styles.container}>
      <Box className="justify-evenly h-2/3">
        <Button className="bg-blue-400" label="Present Modal" onPress={handlePresentPress} />
        <Button
          className="bg-green-400"
          label={`Toggle Press Behavior: ${backdropPressBehavior}`}
          onPress={handleTogglePressBehavior}
        />
        <Button className="bg-green-400" label="Expand" onPress={handleExpandPress} />
        <Button className="bg-green-400" label="Collapse" onPress={handleCollapsePress} />
        <Button className="bg-red-400" label="Close" onPress={handleClosePress} />
      </Box>
      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        onDismiss={handleDismiss}
        // handleComponent={renderHeaderHandle}
        backdropComponent={renderBackdrop}
      >
        <Box variant="scroll" className="p-4 pb-6">
          {range(20).map((_, k) => {
            return (
              <Text key={k} className="text-red-400">
                hello
              </Text>
            );
          })}
        </Box>
      </BottomSheetModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
