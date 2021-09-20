import { CusBox, CusText } from 'components';
import { useAppTheme } from 'hooks/useTheme';
import React from 'react';
import { ActivityIndicator, Modal } from 'react-native';
import { SCREEN_HEIGHT } from 'utils/dimension';

const Spinning = ({ visible }: { visible: boolean }) => {
  const { colors } = useAppTheme();
  return (
    <Modal statusBarTranslucent transparent visible={visible}>
      <CusBox height={SCREEN_HEIGHT} justifyContent="center" alignItems="center" bg="fgRegular" opacity={0.8}>
        <CusBox
          bg="bgSubdued"
          width={85}
          height={70}
          alignItems="center"
          justifyContent="center"
          borderRadius="s"
          pt="l"
          pb="m"
        >
          <ActivityIndicator color={colors.fgSuccess} size="large" />
          <CusBox height={2} />
          <CusText variant="body" fontSize={13} color="fgRegular">
            LOADING...
          </CusText>
        </CusBox>
      </CusBox>
    </Modal>
  );
};

export default Spinning;
