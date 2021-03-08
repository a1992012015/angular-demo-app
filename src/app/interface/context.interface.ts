import { UnitSystem } from '../dictionary/context.dictonary';

/**
 * dataset config
 */
export interface LayerDatasetConfigInterface {
  datasets: string[];
  mapTypeId: MapTypeId;
  layerIds: LayerId[];
  tag: DatasetLayerTag;
  activeDataset: string;
}

/**
 * map layer tag in dataset config (API: /profile response)
 */
export enum DatasetLayerTag {
  SEARCH = 'fieldsearch',
  OWNER = 'owner',
  MAJOR_TOWN = 'city',
  SSURGO = 'ssurgo',
  BREEDER = 'breeder',
  PRIVATE_CROP = 'field',
  VT_DEBUG = 'vtdebug'
}

/**
 * system context interface
 */
export interface SystemContextInterface {
  activeLayerId?: LayerId;
  datasets?: LayerDatasetConfigInterface[];
  unitSystem?: UnitSystem;
  mapConfig?: {
    location: {
      lat: number;
      lng: number;
      zoom: number;
    };
  };
}

/**
 * map type id, used in google map, a map type could be used by multiple layer
 */
export enum MapTypeId {
  PUBLIC_CROP,
  PUBLIC_CROP_GL,
  PRIVATE_CROP,
  PRIVATE_NDVI,
  BREEDER,
  SERENUS,
  SENTINEL,
  DSM,
  NDVI,
  OWNER,
  SSURGO,
  MAJOR_TOWN,
  DEBUG,
  TDEBUG_1,
  TDEBUG_2,
  COORDS,
  SERENUS_MASK,
  SERENUS_JPEG,
  SCOUTING,
  VTDEBUG,
  VTDEBUG2
}

/**
 * layer id, layer is build on top of map type, a map type could be used by multiple layer
 */
export enum LayerId {
  PUBLIC_CROP_TYPE,
  PUBLIC_CROP_GL_TYPE,
  PUBLIC_CROP_YIELD,
  PUBLIC_CROP_SOC,
  PUBLIC_CROP_ROTATION,
  PUBLIC_CROP_TILLAGE,
  PUBLIC_CROP_COVER_CROP,
  PUBLIC_CROP_AEZ,
  PUBLIC_CROP_GL_AEZ,
  BREEDER,
  PRIVATE_CROP_TYPE,
  PRIVATE_CROP_YIELD,
  PRIVATE_CROP_SOC,
  PRIVATE_CROP_ROTATION,
  PRIVATE_NDVI_MASK,
  SERENUS,
  MAJOR_TOWN,
  SENTINEL,
  DSM,
  NDVI,
  OWNER,
  SSURGO,
  DEBUG,
  TDEBUG_1,
  TDEBUG_2,
  COORDS,
  SERENUS_MASK,
  SERENUS_JPEG,
  SCOUTING,
  VTDEBUG,
  VTDEBUG2
}
