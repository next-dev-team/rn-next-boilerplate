import { useMemo, useRef } from 'react';

/**
 * Hook of persistent function, in theory, useMemoizedFn can be used instead of useCallback completely.
 * In some scenarios, we need to use useCallback to remember a function, but when the second parameter deps changes, the function will be regenerated, causing the function address to change.
 * Using useMemoizedFn, you can omit the second parameter deps, while ensuring that the function address will never change.
 * @param fn function
 * @returns
 */
export default function useMemoizedFn<T extends Func>(fn: T) {
  if (process.env.NODE_ENV !== 'production') {
    if (typeof fn !== 'function') {
      throw new Error(`useMemoizedFn expected parameter is a function, got ${typeof fn}`);
    }
  }

  const fnRef = useRef<T>(fn);
  // https://github.com/alibaba/hooks/issues/728
  fnRef.current = useMemo(() => fn, [fn]);

  const memoizedFn = useRef<T>();
  if (!memoizedFn.current) {
    memoizedFn.current = ((...args: any) => fnRef.current(args)) as unknown as T;
  }

  return memoizedFn.current;
}
