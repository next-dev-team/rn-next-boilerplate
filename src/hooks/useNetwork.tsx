import { addEventListener, useNetInfo } from '@react-native-community/netinfo';
import { useMemo } from 'react';

export const useNetWork = () => {
  const netInfo = useNetInfo();

  const isOnline = useMemo(
    () => netInfo.isConnected && netInfo.isInternetReachable,
    [netInfo.isConnected, netInfo.isInternetReachable]
  );

  return {
    netInfo,
    isOnline,
    addEventListener,
  };
};
