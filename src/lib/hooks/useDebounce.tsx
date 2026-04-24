'use client'
import { useEffect, useState } from "react";
export const debounce = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number,
) => {
  let timer: ReturnType<typeof setTimeout>;
  const debounced = (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
  debounced.cancel = () => {
    clearTimeout(timer);
  };
  return debounced;
};
export const useDebounce = <T,>(data: T, delay = 300) => {
  const [debounced, setDebounced] = useState<T>(data);
  useEffect(() => {
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => setDebounced(data), delay)
    return () => clearTimeout(timer);
  }, [data, delay])
  return debounced;
}