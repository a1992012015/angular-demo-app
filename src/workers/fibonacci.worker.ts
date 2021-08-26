/// <reference lib="webworker" />

import { fibonacci } from './fibonacci-workeflow';

addEventListener('message', ({ data }) => {
  console.log(`%c worker got message: ${data}`, 'color: red;');
  const count = fibonacci(data);
  postMessage(count);
});
