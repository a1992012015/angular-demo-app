import { SimpleChanges } from '@angular/core';
import {
  COVER_CROP_COLORS,
  CROP_BUSHEL_CONVERSION_RATIO,
  CROP_COLORS,
  TILLAGE_COLORS, unitSymbos,
  US_AVG_CROP_YIELD_LB_PER_ACRE
} from '../dictionary/crop-type.dictionary';
import { googlex, schema2 } from './protobuf/defines';
import { UnitSystem } from '../dictionary/context.dictonary';
import ITimeRange = googlex.agility.hopper2.ITimeRange;
import CropType = schema2.CropType;
import { AreaInterface } from '../interface/unit.interface';
import cloneDeep from 'lodash-es/cloneDeep';
import divide from 'lodash-es/divide';

// tslint:disable
/**
 * Get unique id
 */
export const getUniqueId = (): string => {
  return '' + new Date().valueOf() + Math.random();
};

/**
 * getCropTypeColorByCropType
 */
export const getCropTypeColorByCropType = (type = ''): string => {
  const found = CROP_COLORS.filter(
    (item: { type: string; color: string }) =>
      item.type.toString().toUpperCase() === type.toUpperCase()
  );
  if (found[0]) {
    return found[0].color;
  } else {
    /*
    current red color is only for demo purpose, should be updated when crop type data injected in Africa dataset
    other optional color would be:
    original grey:  #929292
    darker green:   #567c5b
    lighter green:  #b5ff6b
     */
    return '#a01111';
  }
};

/**
 * getCropTypeColorByCropType
 */
export const getTillageTypeColorByTillageType = (type = ''): string => {
  const found = TILLAGE_COLORS.filter(
    (item: { type: string; color: string }) =>
      item.type.toString().toUpperCase() === type.toUpperCase()
  );
  if (found[0]) {
    return found[0].color;
  } else {
    return '#929292';
  }
};

/**
 * getCropTypeColorByCropType
 */
export const getCoverTypeColorByCoverType = (type = ''): string => {
  const found = COVER_CROP_COLORS.filter(
    (item: { type: string; color: string }) =>
      item.type.toString().toUpperCase() === type.toUpperCase()
  );
  if (found[0]) {
    return found[0].color;
  } else {
    return '#929292';
  }
};

/**
 * For each
 */
export const forEach = <T>(
  collection: { [key: string]: T },
  iteratee: (arg0: T, arg1?: string, arg2?: { [key: string]: T }) => { [key: string]: T } | void
) => {
  const keys = Object.keys(collection);

  keys.forEach((key) => {
    iteratee(collection[key], key, collection);
  });

  return collection;
};

/**
 * Big number multiply
 */
export const numMulti = (num1: number, num2: number) => {
  let baseNum = 0;
  try {
    baseNum += num1.toString().split('.')[1].length;
  } catch (e) {}
  try {
    baseNum += num2.toString().split('.')[1].length;
  } catch (e) {}
  return (
    (Number(num1.toString().replace('.', '')) * Number(num2.toString().replace('.', ''))) /
    Math.pow(10, baseNum)
  );
};

/**
 * changeAnyNumberBelow256
 */
export const changeAnyNumberBelow256 = (sum: number, offset: number): number => {
  const sinIntStr = Math.sin(sum + 1 + offset)
    .toString()
    .substr(6);
  return Math.floor(Number('0.' + sinIntStr) * 256);
};

/**
 * Color hash
 */
export const colorHash = (inputString: string, offset = 0) => {
  let sum = 0;

  for (let i = 0; i < inputString.length; i++) {
    sum += inputString.charCodeAt(i);
  }

  const r = changeAnyNumberBelow256(sum, offset + 1);
  const g = changeAnyNumberBelow256(sum, offset + 2);
  const b = changeAnyNumberBelow256(sum, offset + 3);
  const rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';

  let hex = '#';

  hex += ('00' + r.toString(16)).substr(-2, 2).toUpperCase();
  hex += ('00' + g.toString(16)).substr(-2, 2).toUpperCase();
  hex += ('00' + b.toString(16)).substr(-2, 2).toUpperCase();

  return {
    r,
    g,
    b,
    rgb,
    hex
  };
};

/**
 * Check OS is MacOS or not
 */
export const isMacOs = (): boolean => {
  return navigator.platform === 'MacIntel';
};

const cardDataColorSchema = [
  {
    valueBounds: [0.2, 100],
    color: '#E06109',
    fontIcon: 'arrow_downward'
  },
  {
    valueBounds: [0.1, 0.2],
    color: '#F4D944',
    fontIcon: 'remove'
  },
  {
    valueBounds: [0, 0.1],
    color: '#30CA58',
    fontIcon: 'arrow_upward'
  }
];

/**
 * get color by yield rate
 */
export const getCardPerformanceColorByRate = (rate: number): { color: string; icon: string } => {
  if (rate === 0) {
    return {
      color: cardDataColorSchema[2].color,
      icon: cardDataColorSchema[1].fontIcon
    };
  } else if (rate > 0) {
    return {
      color: cardDataColorSchema[2].color,
      icon: cardDataColorSchema[2].fontIcon
    };
  } else {
    rate = Math.abs(rate);
    let color = '#000000';
    cardDataColorSchema.forEach((config) => {
      if (rate > config.valueBounds[0] && rate <= config.valueBounds[1]) {
        color = config.color;
      }
    });
    return {
      color,
      icon: cardDataColorSchema[0].fontIcon
    };
  }
};

/**
 * convert meter
 */
export const convertMeter = (number: number, unitSystem: UnitSystem) => {
  const unitConfig = unitSymbos['m'];
  if (unitSystem === UnitSystem.IMPERIAL) {
    return {
      value: numMulti(number, 3.28084),
      unit: unitConfig[unitSystem]
    };
  } else if (unitSystem === UnitSystem.METRIC) {
    return {
      value: numMulti(number, 1),
      unit: unitConfig[unitSystem]
    };
  } else {
    return {
      value: number,
      unit: 'n/a'
    };
  }
};

/**
 * convert square meter
 */
export const convertSquareMeter = (number: number, unitSystem: UnitSystem): AreaInterface => {
  const unitConfig = unitSymbos['ha'];
  if (unitSystem === UnitSystem.IMPERIAL) {
    return {
      value: numMulti(number, 0.000247105),
      unit: unitConfig[unitSystem],
      acre: numMulti(number, 0.000247105)
    };
  } else if (unitSystem === UnitSystem.METRIC) {
    return {
      value: numMulti(number, 0.0001),
      unit: unitConfig[unitSystem],
      acre: numMulti(number, 0.000247105)
    };
  } else {
    return {
      value: number,
      unit: 'n/a',
      acre: numMulti(number, 0.000247105)
    };
  }
};

/**
 * convert string to rfc 4648 base64 encoding
 */
export const to4648Base64 = (str: string): string => {
  const b64 = btoa(str);
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
};

/**
 * convert rfc 4648 base64 encoding to string
 */
export const from4648Base64 = (str: string): string => {
  const b64 = str.replace(/-/g, '+').replace(/_/g, '/');

  return atob(b64);
};

/**
 * getParentEleByClass
 */
export const getParentEleByClass = (node: HTMLElement, className: string): HTMLElement | null => {
  let itemTarget: HTMLElement | null = node;

  while (itemTarget) {
    if (itemTarget.classList.contains(className)) {
      break;
    }

    itemTarget = itemTarget.parentElement;
  }

  return itemTarget;
};

/**
 * number
 */
export const isNumber = (key: string): boolean => {
  return /^(-?\d+)(\.\d+)?$/.test(key);
};

/**
 * fill thumbnail color
 */
export const fillThumbnailColor = (thumbnail: string, color: string): string => {
  return btoa(
    atob(thumbnail).replace(
      new RegExp('fill:#CCC;fill-rule:nonzero;stroke:black;stroke-width:1', 'g'),
      `fill:${color};fill-rule:nonzero;stroke:black;stroke-width:1`
    )
  );
};

/**
 * Use to check if whether the component input changed
 */
export const isInputChanged = (changes: SimpleChanges, attr: string) => {
  return !!changes[attr] && changes[attr].currentValue !== changes[attr].previousValue;
};

/**
 * Get UTC Date
 */
export const getUTCDate = (date: Date = new Date()) => {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();
  return new Date(Date.UTC(year, month, day));
};

/**
 * clear underline
 * @param value string
 */
export const clearUnderline = (value: string): string => {
  return value.replace(/_/g, ' ');
};

/**
 * get aez cluster level by hierarchy level
 */
export const convertAEZHierarchyLevelToClusterLevel = (hLevel: number): number => {
  return Math.pow(2, hLevel);
};

/**
 * convert bushels(bu) to pound(lb) for later unit conversion
 */
export const convertBushelToLbByCropType = (
  bushels: number,
  cropType: string
): number | undefined => {
  const config = CROP_BUSHEL_CONVERSION_RATIO.find((c) => {
    return c.type.toLowerCase() === cropType.toLowerCase();
  });
  if (!config) {
    return undefined;
  } else {
    return numMulti(bushels, config.ratio);
  }
};

/**
 * * convert pound(lb) to bushels(bu) for later unit conversion
 */
export const convertLbToBushelByCropType = (
  pounds: number,
  cropType: string
): number | undefined => {
  const config = CROP_BUSHEL_CONVERSION_RATIO.find((c) => {
    return c.type.toLowerCase() === cropType.toLowerCase();
  });
  if (!config) {
    return undefined;
  } else {
    return divide(pounds, config.ratio);
  }
};

/**
 * return a agri year by time range. Usually agri year looks like: 2019 or 2019-2020
 */
export const getAgriYearByTimeRange = (tr: ITimeRange): string => {
  const start = new Date(Number(tr.start?.seconds) * 1000);
  const end = new Date(Number(tr.end?.seconds) * 1000);
  if (start.getUTCFullYear() === end.getUTCFullYear()) {
    return start.getUTCFullYear().toFixed();
  } else {
    return `${start.getUTCFullYear().toFixed()}-${end.getUTCFullYear().toFixed()}`;
  }
};

/**
 * build a human readable string based on crop types
 */
export const buildCropTypeReadableStringByCropTypes = (cropType: CropType[]): string => {
  let str = 'N/A';
  if (cropType && cropType.length > 0) {
    str = cropType
      .map((c) => {
        return CropType[c];
      })
      .join(', ');
    str = clearUnderline(str);
  }
  return str;
};

/**
 * build admin level key with admin level and time
 */
export const buildAdminLevelKeyWithTime = (adminLevel: string, time: string): string => {
  return to4648Base64(adminLevel + '\t' + time);
};

/**
 * * build admin level key with admin level and time range
 */
export const buildAdminLevelKeyWithTimeRange = (
  adminLevel: string,
  start: Date,
  end: Date
): string => {
  const rawKey = `${adminLevel}\t${start.getTime() / 1000}\t${end.getTime() / 1000}`;
  return to4648Base64(rawKey);
};

/**
 * parse admin level key to admin level and time
 */
export const parseAdminLevelKeyWithTime = (key: string): { adminLevel: string; time: string } => {
  const str = from4648Base64(key);
  if (str.indexOf('\t') === -1) {
    throw new Error('parse admin level key: invalid key format');
  }
  const data = str.split('\t');
  return {
    adminLevel: data[0],
    time: data[1]
  };
};

/**
 * align Date object to first date in the given month and set time to 0:0:0
 */
export const alignToMonthStart = (d: Date): void => {
  d.setUTCDate(1);
  d.setUTCHours(0, 0, 0);
};

/**
 * convert hex color string to rgb
 */
export const hexToRGB = (h: string): { r: number; g: number; b: number } => {
  // tslint:disable-next-line:one-variable-per-declaration
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits
  if (h.length === 4) {
    r = Number('0x' + h[1] + h[1]);
    g = Number('0x' + h[2] + h[2]);
    b = Number('0x' + h[3] + h[3]);
    // 6 digits
  } else if (h.length === 7) {
    r = Number('0x' + (h[1].toString() + h[2].toString()));
    g = Number('0x' + (h[3].toString() + h[4].toString()));
    b = Number('0x' + (h[5].toString() + h[6].toString()));
  }

  return { r, g, b };
};

/**
 * convert hex color string to rgb
 */
export const rgbToHex = (rgb: string): string => {
  // 十六进制颜色值的正则表达式
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是rgb颜色表示
  if (/^(rgb|RGB)/.test(rgb)) {
    const aColor = rgb.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
    let strHex = '#';
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < aColor.length; i++) {
      let hex = Number(aColor[i]).toString(16);
      if (hex.length < 2) {
        hex = '0' + hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = rgb;
    }
    return strHex;
  } else if (reg.test(rgb)) {
    const aNum = rgb.replace(/#/, '').split('');
    if (aNum.length === 6) {
      return rgb;
    } else if (aNum.length === 3) {
      let numHex = '#';
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < aNum.length; i += 1) {
        numHex += aNum[i] + aNum[i];
      }
      return numHex;
    }
  }
  return rgb;
};

/**
 * check if given time range has intersection with given month
 */
export const isTimeRangeHasIntersectionWithMonth = (
  start: Date,
  end: Date,
  month: Date
): boolean => {
  const monthEnd = cloneDeep(month);
  alignToMonthStart(month);
  monthEnd.setUTCMonth(monthEnd.getUTCMonth() + 1);
  alignToMonthStart(monthEnd);

  return end > month && start < monthEnd;
};

/**
 * convert array buffer to base64
 */
export const arrayBufferToBase64 = (arrayBuffer: ArrayBuffer): string => {
  let binary = '';
  const bytes = new Uint8Array(arrayBuffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return `data:image/png;base64,${btoa(binary)}`;
};

/**
 * get field id from admin level
 */
export const getFieldIdFromAdminLevel = (adminLevel: string): string => {
  return adminLevel.split('/').pop() || '';
};

/**
 * build blob for protobuf with buffer
 */
export const buildPBBlobFromBuffer = (b: ArrayBuffer): Blob => {
  return new Blob([b], { type: 'application/x-protobuf' });
};

/**
 * calculate a middle value base on provided start and end Dates
 */
export const getMiddleDate = (start: Date, end: Date): Date => {
  if (start > end) {
    console.warn('getMiddleDate: calculating a middle value with start date GREATER than end date');
  }
  return new Date(start.getTime() + (end.getTime() - start.getTime()) / 2);
};

/**
 * check if given 2 ITimeRange overlaps
 */
export const overlappingTimeRange = (
  r1: { start: Date; end: Date },
  r2: { start: Date; end: Date }
): boolean => {
  return !(r1.end < r2.start || r1.start > r2.end);
};

/**
 * check if a given time range is legal against an agri year time range
 */
export const geoTimeRangeMostlyCoincideWithAgriYear = (
  agriTr: { start: Date; end: Date },
  geoTr: { start: Date; end: Date }
): boolean => {
  if (!overlappingTimeRange(agriTr, geoTr)) {
    return false;
  }
  const start1 = Number(agriTr.start.getTime()),
    end1 = Number(agriTr.end.getTime());
  const start2 = Number(geoTr.start.getTime()),
    end2 = Number(geoTr.end.getTime());
  let max: number = start1,
    min: number = end1;
  if (start2 > max) {
    max = start2;
  }
  if (end2 < min) {
    min = end2;
  }
  const threshold = 0.5;
  return (min - max) / (end2 - start2) >= threshold;
};

/**
 * calculate crop yield index by crop type in a very rough way
 */
export const getCropYieldIndexByCropTypeAndYear = (
  cropType: string,
  year: number,
  yieldLbPerAcre: number
): number => {
  const found = US_AVG_CROP_YIELD_LB_PER_ACRE.find(
    (config) => clearUnderline(config.type).toLowerCase() === clearUnderline(cropType).toLowerCase()
  );
  if (found) {
    const yearFound = (found.yield as Array<{ year: number; value: number }>).find(
      (y) => y.year === year
    );
    if (yearFound) {
      return yieldLbPerAcre / yearFound.value;
    }
  }
  return 1;
};
