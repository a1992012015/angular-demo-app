import cloneDeep from 'lodash-es/cloneDeep';

/**
 * NDVI image tile interface
 */
export interface NDVIImageTileInterface {
  image?: Blob;
  feature?: IGeometry[][][];
  tileData: TileDataInterface;
}

/**
 * tile data
 */
export interface TileDataInterface {
  coord: { x: number; y: number };
  zoom: number;
  time?: string;
}

/**
 * max min
 */
export interface MaxMinInterface {
  max: IPoint;
  min: IPoint;
}

/**
 * point
 */
export interface IPoint {
  /** Point latitude */
  latitude: number;

  /** Point longitude */
  longitude: number;

  /** Point altitude */
  altitude?: number | null;
}

/**
 * IGeometry
 */
export interface IGeometry {
  /** Geometry polygon */
  polygon?: IPolygon[] | null;

  /** Geometry encoded_polygon */
  encoded_polygon?: Uint8Array[] | null;
}

/**
 * IPolygon
 */
interface IPolygon {
  /** Polygon loop */
  loop?: ILine[] | null;
}

/**
 * ILine
 */
export interface ILine {
  /** Line point */
  point?: IPoint[] | null;
}

/* eslint-disable */
/**
 * Generate images
 */
export const createAllTileImageSvg = (tileImageList: { [key: string]: NDVIImageTileInterface }) => {
  console.log('============================createAllTileImageSvg============================');
  const polygonPoint = getPolygonPointList(tileImageList);
  return Object.keys(tileImageList).map((key) => {
    const { image, tileData } = tileImageList[key];
    const maxMin = getPointMaxMin(tileData);
    const clipPath = createImageClipPath(polygonPoint, maxMin, tileData);
    const svgElement = createTileSvgImage(image as Blob, clipPath, maxMin, tileData);
    return { svgElement, key };
  });
};

/**
 * Generate Svg
 */
const createTileSvgImage = (
  image: Blob,
  clipPath: string,
  maxMin: MaxMinInterface,
  tileData: TileDataInterface
): string => {
  const { x: minX, y: maxY } = latLng2point(maxMin.min);
  const { x: maxX, y: minY } = latLng2point(maxMin.max);
  const blobUrl = URL.createObjectURL(new Blob([image]));
  const width = maxX - minX;
  const height = maxY - minY;
  const viewBox = [minX, minY, width, height].join(' ');
  return `<svg viewBox="${viewBox}" width="256" height="256" xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink">
            ${clipPath}
            <image xlink:href="${blobUrl}" x="${minX}" y="${minY}" height="${height}" width="${width}" clip-path="url(#polygon-path-${tileData.coord.x}-${tileData.coord.y})"/>
          </svg>`;
};

/**
 * Generate clipPath
 */
const createImageClipPath = (
  polygonPaths: IGeometry[][][][],
  maxMin: MaxMinInterface,
  tileData: TileDataInterface
) => {
  const pathElement: string[] = [];
  polygonPaths.forEach((tile) => {
    (tile || []).forEach((multipolygon) => {
      multipolygon.forEach((geometry) => {
        geometry.forEach((polygon) => {
          (polygon.polygon || []).forEach((loops) => {
            if (loops.loop && loops.loop.length && checkPointPosition(loops.loop, maxMin)) {
              const paths: string[] = [];
              loops.loop.forEach((points, index) => {
                const svgPath: string[] = [];
                (points.point || []).forEach((point) => {
                  const p = latLng2point(point);
                  if (index === 0) {
                    svgPath.push([p.x, p.y].join(','));
                  } else {
                    svgPath.unshift([p.x, p.y].join(','));
                  }
                });
                paths.push(`M${svgPath.join(' ')}z`);
              });
              const path = `<path fill-rule="evenodd" d="${paths.join(' ')}"></path>`;
              pathElement.push(path);
            }
          });
        });
      });
    });
  });
  return `<defs>
            <clipPath id="polygon-path-${tileData.coord.x}-${tileData.coord.y}">
              ${pathElement.join('')}
            </clipPath>
          </defs>`;
};

/**
 * Get all Polygon
 */
const getPolygonPointList = (tileImageList: {
  [key: string]: NDVIImageTileInterface;
}): IGeometry[][][][] => {
  return Object.values(tileImageList).map((imageData: NDVIImageTileInterface) => {
    return imageData.feature || [];
  });
};

/**
 * Check if Polygon is in Tile
 */

const checkPointPosition = (points: ILine[], maxMin: MaxMinInterface) => {
  const outerBorder = points[0] || { point: [] };
  const { polygonBoundingBox, tileBoundingBox } = getBoundingBox(outerBorder.point || [], maxMin);
  return (
    tileBoundingBox.right < polygonBoundingBox.left ||
    tileBoundingBox.left > polygonBoundingBox.right ||
    tileBoundingBox.bottom < polygonBoundingBox.top ||
    tileBoundingBox.top > polygonBoundingBox.bottom
  );
};

const getBoundingBox = (point: IPoint[], maxMin: MaxMinInterface) => {
  const tileBoundingBox = {
    left: maxMin.min.longitude,
    right: maxMin.max.longitude,
    top: maxMin.max.latitude,
    bottom: maxMin.min.latitude
  };
  const polygonBoundingBox = point.reduce((value, current) => {
    const { longitude, latitude } = cloneDeep(current);
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
  }, cloneDeep(tileBoundingBox));
  return { polygonBoundingBox, tileBoundingBox };
};

/**
 * Convert Max Point and Min Point
 */
const getPointMaxMin = (tileData: TileDataInterface) => {
  const min = calculateLatLngFromCoords(
    { x: tileData.coord.x, y: tileData.coord.y + 1 },
    tileData.zoom
  );
  const max = calculateLatLngFromCoords(
    { x: tileData.coord.x + 1, y: tileData.coord.y },
    tileData.zoom
  );
  return { max, min };
};

/**
 * Convert Point to SVG PATH
 */
const latLng2point = (latLng: IPoint) => {
  const value = Math.log(Math.tan(Math.PI / 4 + (latLng.latitude * Math.PI) / 180 / 2));
  return {
    x: (latLng.longitude + 180) * (256 / 360),
    y: 256 / 2 - (256 * value) / (2 * Math.PI)
  };
};

/**
 * convert tile coordinates to lat lng coordinates
 */
const calculateLatLngFromCoords = (coords: { x: number; y: number }, zoom: number) => {
  return {
    latitude: tile2lat(coords.y, zoom),
    longitude: tile2long(coords.x, zoom)
  };
};

/**
 * convert tile x value to longitude
 */
const tile2long = (x: number, z: number) => {
  return (x / Math.pow(2, z)) * 360 - 180;
};

/**
 * convert tile y value to latitude
 */
const tile2lat = (y: number, z: number) => {
  const n = Math.PI - (2 * Math.PI * y) / Math.pow(2, z);
  return (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
};
