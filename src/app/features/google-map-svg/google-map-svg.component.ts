import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';

import { IGeometry, ILine, IPoint, MaxMinInterface, TileDataInterface } from '../../interface/worker.interface';
import * as privatePath from './private-path-point.json';
import * as publicPath from './public-path-point.json';

/**
 * sda
 */
@Component({
  selector: 'app-google-map-svg',
  templateUrl: './google-map-svg.component.html',
  styleUrls: ['./google-map-svg.component.scss'],
})
export class GoogleMapSvgComponent implements OnInit, AfterViewInit {
  @ViewChild('publicSvgElement', { static: false }) publicSvgElement: ElementRef<HTMLElement>;
  @ViewChild('privateSvgElement', { static: false }) privateSvgElement: ElementRef<HTMLElement>;

  publicTileData: TileDataInterface = { coord: { x: 928, y: 1542 }, zoom: 12 };
  privateTileData: TileDataInterface = { coord: { x: 1347, y: 2493 }, zoom: 12 };

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.init();
  }

  init(): void {
    const publicMaxMin = this.getPointMaxMin(this.publicTileData);
    const publicSvgProps = this.poly_gm2svg(publicPath.data, publicMaxMin);
    this.drawPoly(publicSvgProps, this.publicTileData, this.publicSvgElement, '../../../assets/images/publicTileImage.png');

    const privateMaxMin = this.getPointMaxMin(this.privateTileData);
    const privateSvgProps = this.poly_gm2svg(privatePath.data, privateMaxMin);
    this.drawPoly(privateSvgProps, this.privateTileData, this.privateSvgElement, '../../../assets/images/privateTileImage.png');
  }

  drawPoly(props, tileData: TileDataInterface, element, url: string): void {
    const node = element.nativeElement;
    const svg = node.cloneNode(false) as HTMLElement;
    const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    clipPath.setAttribute('id', `polygon-path-${tileData.coord.x}-${tileData.coord.y}`);
    rect.setAttribute('x', props.x);
    rect.setAttribute('y', props.y);
    rect.setAttribute('width', props.width);
    rect.setAttribute('height', props.height);
    rect.setAttribute('fill', 'red');
    rect.setAttribute('clip-path', `url(#polygon-path-${tileData.coord.x}-${tileData.coord.y})`);
    image.setAttribute('x', props.x);
    image.setAttribute('y', props.y);
    image.setAttribute('height', props.height);
    image.setAttribute('width', props.width);
    image.setAttribute('clip-path', `url(#polygon-path-${tileData.coord.x}-${tileData.coord.y})`);
    image.setAttribute('href', url);
    node.parentNode.replaceChild(svg, node);
    props.path.forEach((p) => {
      clipPath.appendChild(p);
    });
    defs.appendChild(clipPath);
    svg.appendChild(defs);
    svg.appendChild(image);
    // svg.appendChild(rect);
    svg.setAttribute('viewBox', [props.x, props.y, props.width, props.height].join(' '));
  }

  poly_gm2svg(pathData: IGeometry[][][][], maxMin: MaxMinInterface) {
    const svgPaths = [];
    const { x: minX, y: maxY } = this.latLng2point(maxMin.min);
    const { x: maxX, y: minY } = this.latLng2point(maxMin.max);

    // const pointPath = [[pathData[0][1]]];
    const pointPath = [...pathData];
    pointPath.forEach((tile) => {
      tile.forEach((multipolygon) => {
        multipolygon.forEach((geometry) => {
          geometry.forEach((polygon) => {
            polygon.polygon.forEach((loops) => {
              const result = this.checkPointPosition(loops.loop, maxMin);
              if (loops.loop.length && result) {
                const paths: string[] = [];
                loops.loop.forEach((points, index) => {
                  const svgPath = [];
                  points.point.forEach((point) => {
                    const p = this.latLng2point(point);
                    if (index === 0) {
                      svgPath.push([p.x, p.y].join(','));
                    } else {
                      svgPath.unshift([p.x, p.y].join(','));
                    }
                  });
                  paths.push(`M${svgPath.join(' ')}z`);
                });
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('fill-rule', 'evenodd');
                path.setAttribute('d', paths.join(' '));
                svgPaths.push(path);
              }
            });
          });
        });
      });
    });

    return {
      path: svgPaths,
      x: minX,
      y: minY,
      width: _.subtract(maxX, minX),
      height: _.subtract(maxY, minY),
    };
  }

  checkPointPosition(points: ILine[], maxMin: MaxMinInterface) {
    const outerBorder = points[0] || { point: [] };
    const { polygonBoundingBox, tileBoundingBox } = this.getBoundingBox(outerBorder.point, maxMin);
    return tileBoundingBox.right < polygonBoundingBox.left ||
      tileBoundingBox.left > polygonBoundingBox.right ||
      tileBoundingBox.bottom < polygonBoundingBox.top ||
      tileBoundingBox.top > polygonBoundingBox.bottom;
  }

  getBoundingBox(point: IPoint[], maxMin: MaxMinInterface) {
    const tileBoundingBox = {
      left: maxMin.min.longitude,
      right: maxMin.max.longitude,
      top: maxMin.max.latitude,
      bottom: maxMin.min.latitude,
    };
    const polygonBoundingBox = point.reduce((value, current) => {
      const { longitude, latitude } = _.cloneDeep(current);
      if (Object.keys(value).length) {
        if (longitude < value.left) {
          value.left = longitude;
        }
        if (longitude > value.right) {
          value.right = longitude;
        }
        if (latitude < value.bottom) {
          value.bottom = latitude;
        }
        if (latitude > value.top) {
          value.top = latitude;
        }
      } else {
        value.left = longitude;
        value.right = longitude;
        value.top = latitude;
        value.bottom = latitude;
      }
      return value;
    }, _.cloneDeep(tileBoundingBox));
    return { polygonBoundingBox, tileBoundingBox };
  }

  latLng2point(latLng) {
    return {
      // x: (latLng.longitude + 180) * (256 / 360),
      x: _.multiply(_.add(latLng.longitude, 180), _.divide(256, 360)),
      // y: (256 / 2) - (256 * Math.log(Math.tan((Math.PI / 4) + ((latLng.latitude * Math.PI / 180) / 2))) / (2 * Math.PI)),
      y: _.subtract(
        _.divide(256, 2),
        _.divide(
          _.multiply(
            256,
            Math.log(Math.tan(_.add(
              _.divide(Math.PI, 4),
              _.divide(_.divide(latLng.latitude * Math.PI, 180), 2),
            ))),
          ),
          _.multiply(2, Math.PI),
        ),
      ),
    };
  }

  getPointMaxMin(tileData: TileDataInterface) {
    const min = this.calculateLatLngFromCoords(
      { x: tileData.coord.x, y: tileData.coord.y + 1 },
      tileData.zoom,
    );
    const max = this.calculateLatLngFromCoords(
      { x: tileData.coord.x + 1, y: tileData.coord.y },
      tileData.zoom,
    );
    return { max, min };
  }

  calculateLatLngFromCoords(coords: { x: number; y: number }, zoom: number) {
    return {
      latitude: this.tile2lat(coords.y, zoom),
      longitude: this.tile2long(coords.x, zoom),
    };
  }

  tile2long(x: number, z: number) {
    // return (x / Math.pow(2, z)) * 360 - 180;
    return _.subtract(_.multiply(_.divide(x, Math.pow(2, z)), 360), 180);
  }

  tile2lat(y: number, z: number) {
    // const n = Math.PI - (2 * Math.PI * y) / Math.pow(2, z);
    const n = _.subtract(Math.PI, _.divide(_.multiply(_.multiply(2, Math.PI), y), Math.pow(2, z)));
    // return (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
    return _.multiply(_.divide(180, Math.PI), Math.atan(_.multiply(0.5, _.subtract(Math.exp(n), Math.exp(-n)))));
  }
}
