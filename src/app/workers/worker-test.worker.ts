/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  console.log(`%cworker got message: ${data}`, 'color: red;');
  const count = fibonacci(data);
  postMessage(count);
});

const fibonacci = (n: number): number => {
  if (n <= 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};
