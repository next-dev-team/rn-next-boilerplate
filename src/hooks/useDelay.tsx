import { useEffect, useState } from 'react';

export const useDelay = (ms = 200) => {
  const [delayLoad, setDelay] = useState(true);

  function delayLoading(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }

  useEffect(() => {
    async () => {
      setDelay(!(await delayLoading()));
    };
  }, []);

  return { delayLoad };
};
