import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import cloneDeep from 'lodash-es/cloneDeep';
import publicPath from './public-path-point.json';
import privatePath from './private-path-point.json';

import {
  NDVIImageTileInterface,
  TileDataInterface,
  WorkerResponseInterface
} from '../interfaces/chart-polygon.interface';
import { createAllTileImageSvg } from '../../../workers/private-ndvi-workeflow';

/**
 * map svg cut component
 */
@Component({
  selector: 'app-map-svg-cut',
  templateUrl: './map-svg-cut.component.html',
  styleUrls: ['./map-svg-cut.component.scss']
})
export class MapSvgCutComponent implements OnInit {
  @ViewChild('privateSvgElement', { static: false }) privateSvgElement?: ElementRef<HTMLElement>;
  @ViewChild('publicSvgElement', { static: true }) publicSvgElement?: ElementRef<HTMLElement>;

  publicTileData: TileDataInterface = { coord: { x: 928, y: 1542 }, zoom: 12 };
  privateTileData: TileDataInterface = { coord: { x: 1347, y: 2493 }, zoom: 12 };

  private workerJobSequence = 0;
  private ndviImageWorker?: Worker;
  private tileImageList: { [key: string]: NDVIImageTileInterface } = {
    publicTile: {
      feature: cloneDeep(publicPath).shift(),
      tileData: cloneDeep(this.publicTileData)
    },
    privateTile: {
      feature: cloneDeep(privatePath).shift(),
      tileData: cloneDeep(this.privateTileData)
    }
  };

  ngOnInit(): void {
    console.log('undefined');
    if (typeof Worker !== 'undefined') {
      console.log(new URL('../../../workers/private-ndvi-worker.worker', import.meta.url));
      this.ndviImageWorker = new Worker(
        new URL('../../../workers/private-ndvi-worker.worker', import.meta.url),
        { type: 'module' }
      );

      this.ndviImageWorker.onmessage = ({ data }) => {
        console.log('onmessage imageList', data.imageList);
        this.addImageToDom(data.imageList);
      };

      this.ndviImageWorker.onerror = (error) => {
        console.log('onmessage error', error);
      };

      this.handleImageCutChange();
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
      this.handleImageCutChange();
    }
  }

  handleImageCutChange() {
    Promise.all([
      this.convertImgToBase64('../../../assets/images/publicTileImage.png'),
      this.convertImgToBase64('../../../assets/images/privateTileImage.png')
    ]).then(([img1, img2]) => {
      this.tileImageList['publicTile'].image = img1 as Blob;
      this.tileImageList['privateTile'].image = img2 as Blob;

      console.log('hImage', this.ndviImageWorker);
      if (typeof Worker !== 'undefined' && this.ndviImageWorker) {
        this.ndviImageWorker?.postMessage({
          workerJobSequence: this.workerJobSequence,
          tileImageList: this.tileImageList
        });
      } else {
        const imageList = createAllTileImageSvg(this.tileImageList);
        console.log('imageList', imageList);
        this.addImageToDom(imageList);
      }
    });

  }

  addImageToDom(imageList: WorkerResponseInterface[]) {
    imageList.forEach((svg, index) => {
      const doc = new DOMParser().parseFromString(svg.svgElement, 'text/xml');
      if (index === 0) {
        this.publicSvgElement?.nativeElement.appendChild(doc.documentElement);
      } else {
        this.privateSvgElement?.nativeElement.appendChild(doc.documentElement);
      }
    });
  }

  base64ToBlob({ b64data = '', contentType = '', sliceSize = 512 } = {}) {
    return new Promise((resolve) => {
      // 使用 atob() 方法将数据解码
      const byteCharacters = atob(b64data);
      const byteArrays = [];
      for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);
        const byteNumbers = [];
        for (let i = 0; i < slice.length; i++) {
          byteNumbers.push(slice.charCodeAt(i));
        }
        // 8 位无符号整数值的类型化数组。内容将初始化为 0。
        // 如果无法分配请求数目的字节，则将引发异常。
        byteArrays.push(new Uint8Array(byteNumbers));
      }
      let result = new Blob(byteArrays, {
        type: contentType
      });
      result = Object.assign(result, {
        // 这里一定要处理一下 URL.createObjectURL
        preview: URL.createObjectURL(result),
        name: `XXX.png`
      });
      resolve(result);
    });
  }

// url转base64
  convertImgToBase64(url: string) {
    return new Promise((resolve) => {
      const canvas = document.createElement('CANVAS') as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
      const img = new Image;
      img.crossOrigin = 'Anonymous'; // 图片跨域
      img.onload = () => {
        canvas.height = img.height;
        canvas.width = img.width;
        ctx?.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL('image/base64');
        const base64 = dataURL.split(',')[1];
        this.base64ToBlob({ b64data: base64, contentType: 'image/png' }).then((image) => {
          resolve(image);
        });
      };
      img.src = url;
    });
  }
}
