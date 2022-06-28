/// <reference lib="webworker" />

import { createAllTileImageSvg } from './private-ndvi-workeflow';

addEventListener('message', ({ data }) => {
  const { workerJobSequence, tileImageList } = data;
  console.log('addEventListener tileImageList', tileImageList);
  const imageList = createAllTileImageSvg(tileImageList);
  console.log('addEventListener imageList', imageList);
  postMessage({ workerJobSequence, imageList });
});
