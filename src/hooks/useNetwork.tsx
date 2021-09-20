import { addEventListener, useNetInfo } from '@react-native-community/netinfo';
import { useMemo } from 'react';

export const useNetWork = () => {
  const netInfo = useNetInfo();

  const offline = useMemo(
    () => !(netInfo.isConnected && netInfo.isInternetReachable),
    [netInfo.isConnected, netInfo.isInternetReachable]
  );

  return {
    netInfo,
    offline,
    addEventListener,
  };
};
