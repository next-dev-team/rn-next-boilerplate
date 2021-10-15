import { CusBox, CusText } from 'components/atoms';
import { useAppTheme } from 'hooks/useTheme';
import React from 'react';
import { ActivityIndicator, Modal } from 'react-native';
import { SCREEN_HEIGHT } from 'utils/dimension';
export type SpinningProps = {
  visible?: boolean;
};
const Spinning = ({ visible = false }: SpinningProps) => {
  const { colors } = useAppTheme();
  return (
    <Modal statusBarTranslucent transparent visible={visible}>
      <CusBox height={SCREEN_HEIGHT} justifyContent="center" alignItems="center" bg="mask">
        <CusBox
          bg="white"
          width={85}
          height={70}
          alignItems="center"
          justifyContent="center"
          borderRadius="s"
          pt="l"
          pb="m"
        >
          <ActivityIndicator color={colors.primary100} size="large" />
          <CusBox height={2} />
          <CusText variant="body" fontSize={12} color="black">
            LOADING...
          </CusText>
        </CusBox>
      </CusBox>
    </Modal>
  );
};

export default Spinning;
