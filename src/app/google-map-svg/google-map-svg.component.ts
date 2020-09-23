import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { IGeometry, IPoint, MaxMinInterface, TileDataInterface } from '../interface/worker.interface';
import * as privatePath from './private-path-point.json';
import * as publicPath from './public-path-point.json';

@Component({
  selector: 'app-google-map-svg',
  templateUrl: './google-map-svg.component.html',
  styleUrls: ['./google-map-svg.component.scss'],
})
export class GoogleMapSvgComponent implements OnInit, AfterViewInit {
  @ViewChild('publicSvgElement', { static: false }) publicSvgElement: ElementRef<HTMLElement>;
  @ViewChild('privateSvgElement', { static: false }) privateSvgElement: ElementRef<HTMLElement>;

  publicTileData: TileDataInterface = { coord: { x: 928, y: 1542 }, zoom: 12 };
  privateTileData: TileDataInterface = { coord: { x: 1344, y: 2493 }, zoom: 12 };

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.init();
  }

  init() {
    const publicMaxMin = this.getPointMaxMin(this.publicTileData);
    const publicSvgProps = this.poly_gm2svg(publicPath.data, publicMaxMin);
    this.drawPoly(publicSvgProps, this.publicTileData, this.publicSvgElement, '../../assets/images/publicTileImage.png');

    const privateMaxMin = this.getPointMaxMin(this.privateTileData);
    const privateSvgProps = this.poly_gm2svg(privatePath.data, privateMaxMin);
    this.drawPoly(privateSvgProps, this.privateTileData, this.privateSvgElement, '../../assets/images/privateTileImage.png');
  }

  drawPoly(props, tileData: TileDataInterface, element, url: string) {
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

    // const pointPath = [pointPaths.data[0].splice(0, 1)];
    const pointPath = [...pathData];
    pointPath.forEach((tile) => {
      tile.forEach((multipolygon) => {
        multipolygon.forEach((geometry) => {
          geometry.forEach((polygon) => {
            polygon.polygon.forEach((loops) => {
              const paths: string[] = [];
              loops.loop.forEach((points, index) => {
                if (this.checkPointPosition(points.point, maxMin)) {
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
                }
              });
              const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
              path.setAttribute('fill-rule', 'evenodd');
              path.setAttribute('d', paths.join(' '));
              svgPaths.push(path);
            });
          });
        });
      });
    });

    return {
      path: svgPaths,
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY,
    };
  }

  checkPointPosition(points: IPoint[], maxMin: MaxMinInterface) {
    return points.some((point) => {
      return (
        point.longitude < maxMin.max.longitude &&
        point.longitude > maxMin.min.longitude &&
        point.latitude < maxMin.max.latitude &&
        point.latitude > maxMin.min.latitude
      );
    });
  }

  latLng2point(latLng) {
    return {
      x: (latLng.longitude + 180) * (256 / 360),
      y: (256 / 2) - (256 * Math.log(Math.tan((Math.PI / 4) + ((latLng.latitude * Math.PI / 180) / 2))) / (2 * Math.PI)),
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
    return (x / Math.pow(2, z)) * 360 - 180;
  }

  tile2lat(y: number, z: number) {
    const n = Math.PI - (2 * Math.PI * y) / Math.pow(2, z);
    return (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
  }
}
