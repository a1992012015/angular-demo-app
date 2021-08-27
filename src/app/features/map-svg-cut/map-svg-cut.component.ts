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
import { CommonService } from '../../shares/common.service';

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

  constructor(private commonService: CommonService) {
  }

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
      this.commonService.convertImgToBase64('../../../assets/images/publicTileImage.png'),
      this.commonService.convertImgToBase64('../../../assets/images/privateTileImage.png')
    ]).then(([img1, img2]) => {
      this.tileImageList['publicTile'].image = img1;
      this.tileImageList['privateTile'].image = img2;

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
}
