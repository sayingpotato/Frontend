import { useCallback, useRef } from 'react';

export const useDebounce = (callbackFunction, delay) => {
    const timeoutRef = useRef(null);
  
    return useCallback((...args) => {
      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        callbackFunction(...args);
      }, delay);
    }, [callbackFunction, delay]);
  };