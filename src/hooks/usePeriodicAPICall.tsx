import { useCallback, useEffect, useRef, useState } from 'react';

const usePeriodicAPICall = <T,>(dep: any[], callback: Function, delay: number) => {
  const [data, setData] = useState<T>();
  const savedCallback = useRef<Function>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const tick = useCallback(async () => {
    const call = savedCallback.current as Function;
    const res = await call();
    setData(res);
  }, []);

  // Set up the interval.
  useEffect(() => {
    tick();
    if (delay !== null) {
      const interval = setInterval(tick, delay);
      return () => {
        clearInterval(interval);
      };
    }
  }, [delay, tick]);

  useEffect(() => {
    // tick();
  }, [dep, tick]);

  return data;
};

export default usePeriodicAPICall;
