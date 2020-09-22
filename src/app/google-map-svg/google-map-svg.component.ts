import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// @ts-ignore
import paths from './paths.json';

@Component({
  selector: 'app-google-map-svg',
  templateUrl: './google-map-svg.component.html',
  styleUrls: ['./google-map-svg.component.scss'],
})
export class GoogleMapSvgComponent implements OnInit, AfterViewInit {
  @ViewChild('svgElement', { static: false }) svgElement: ElementRef<HTMLElement>;
  min = { latitude: 40.58058466412762, longitude: -98.4375 };
  max = { latitude: 40.51379915504414, longitude: -98.349609375 };

  debug = [
    { lat: -36.3871459262831, lng: -61.8264426654395 },
    { lat: -36.3868080271405, lng: -61.8241738989959 },
    { lat: -36.3840479207707, lng: -61.8206401931984 },
    { lat: -36.383725844305, lng: -61.8207401099872 },
    { lat: -36.3835339579268, lng: -61.8209499015239 },
    { lat: -36.3833160603036, lng: -61.8203740074777 },
    { lat: -36.3818683709283, lng: -61.819399341395 },
    { lat: -36.3765363650154, lng: -61.818629556296 },
    { lat: -36.3573601516748, lng: -61.84060899988685 },
    { lat: -36.3740481902967, lng: -61.82163261494365 },
    { lat: -36.371560015578, lng: -61.8246356735913 },
    { lat: -36.367391406552116, lng: -61.857770074274406 },
    { lat: -36.3799096718486, lng: -61.8352237665058 },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.init();
  }

  init() {
    const svgProps = this.poly_gm2svg();
    this.drawPoly(svgProps);
  }

  drawPoly(props) {
    const node = this.svgElement.nativeElement;
    const svg = node.cloneNode(false) as HTMLElement;
    const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    clipPath.setAttribute('id', 'polygon-path');
    rect.setAttribute('x', props.x);
    rect.setAttribute('y', props.y);
    rect.setAttribute('width', props.width);
    rect.setAttribute('height', props.height);
    rect.setAttribute('fill', 'red');
    rect.setAttribute('clip-path', 'url(#polygon-path)');
    image.setAttribute('x', props.x);
    image.setAttribute('y', props.y);
    image.setAttribute('height', props.height);
    image.setAttribute('width', props.width);
    image.setAttribute('clip-path', 'url(#polygon-path)');
    image.setAttribute('href', '../../assets/images/tileImage.png');
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

  poly_gm2svg() {
    const svgPaths = [];
    const { x: minX, y: minY } = this.latLng2point(this.min);
    const { x: maxX, y: maxY } = this.latLng2point(this.max);

    // const pointPath = [paths.data[0].splice(0, 1)];
    const pointPath = [...paths.data];
    pointPath.forEach((tile) => {
      tile.forEach((multipolygon) => {
        multipolygon.forEach((geometry) => {
          geometry.forEach((polygon) => {
            polygon.polygon.forEach((loops) => {
              loops.loop.forEach((points) => {
                if (this.checkPointPosition(points.point)) {
                  const svgPath = [];
                  points.point.forEach((point) => {
                    const p = this.latLng2point(point);
                    svgPath.push([p.x, p.y].join(','));
                  });
                  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                  path.setAttribute('d', 'M' + svgPath.join(' ') + 'z');
                  svgPaths.push(path);
                }
              });
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

  checkPointPosition(points: { longitude: number, latitude: number }[]) {
    const min = { latitude: this.max.latitude, longitude: this.min.longitude };
    const max = { latitude: this.min.latitude, longitude: this.max.longitude };
    return points.some((point) => {
      return point.longitude < max.longitude &&
        point.longitude > min.longitude &&
        point.latitude < max.latitude &&
        point.latitude > min.latitude;
    });
  }

  latLng2point(latLng) {
    return {
      x: (latLng.longitude + 180) * (256 / 360),
      y: (256 / 2) - (256 * Math.log(Math.tan((Math.PI / 4) + ((latLng.latitude * Math.PI / 180) / 2))) / (2 * Math.PI)),
    };
  }
}
