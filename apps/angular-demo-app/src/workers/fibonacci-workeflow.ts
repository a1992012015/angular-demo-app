import add from 'lodash-es/add';

export const fibonacci = (n: number): number => {
  if (n <= 1) {
    return 1;
  }
  return add(fibonacci(n - 1), fibonacci(n - 2));
};
