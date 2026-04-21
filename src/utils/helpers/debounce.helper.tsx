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
