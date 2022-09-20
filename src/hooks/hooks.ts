import { useEffect, useState } from 'react'

export const useMount = (callback: Function) => {
    useEffect(() => {
        callback();
    }, [])
}

export const useDebounce = <V>(value: V, delay = 200) => {
    const [debounceValue, setDebounceValue]=useState(value);
    
    useEffect(() => {
      const timeout = setTimeout(()=> setDebounceValue(value), delay);
      return ()=> clearTimeout(timeout)
    }, [value, delay])
    
    return debounceValue;
  }