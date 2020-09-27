
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
 * worker response
 */
export interface WorkerResponseInterface {
  svgElement: string;
  key: string;
}

export interface IPoint {
  /** Point latitude */
  latitude: number;

  /** Point longitude */
  longitude: number;

  /** Point altitude */
  altitude?: number | null;
}

export interface IGeometry {
  /** Geometry polygon */
  polygon?: IPolygon[] | null;

  /** Geometry encoded_polygon */
  encoded_polygon?: Uint8Array[] | null;
}

interface IPolygon {
  /** Polygon loop */
  loop?: ILine[] | null;
}

export interface ILine {
  /** Line point */
  point?: IPoint[] | null;
}
