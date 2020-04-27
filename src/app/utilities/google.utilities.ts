import { GoogSafeUrlInterface, GoogStringConstInterface, GoogTrustedResourceUrlInterface } from '../interface/google.interface';

declare const goog: {
  dom: {
    safe: {
      setLocationHref: (loc: Location, url: GoogSafeUrlInterface | string) => void;
      setScriptSrc: (scriptElement: HTMLScriptElement, url: GoogTrustedResourceUrlInterface) => void;
      setImageSrc: (imageElement: HTMLImageElement, safeUrl: GoogSafeUrlInterface) => void;
      createImageFromBlob: (blob: Blob) => HTMLImageElement;
    };
    removeChildren: (node: Node) => void;
  };
  string: {
    Const: {
      from: (str: string) => GoogStringConstInterface
    }
  }
  html: {
    SafeUrl: {
      fromBlob: (blob: Blob) => GoogSafeUrlInterface;
      fromConstant: (url: GoogStringConstInterface) => GoogSafeUrlInterface;
    };
    TrustedResourceUrl: {
      fromConstant: (url: GoogStringConstInterface) => GoogTrustedResourceUrlInterface;
    }
  }
};

/**
 * googSetLocationHref
 */
export const googSetLocationHref = (loc: Location, url: GoogSafeUrlInterface | string): void => {
  goog.dom.safe.setLocationHref(loc, url);
};

/**
 * googSetScriptSrc
 */
export const googSetScriptSrc = (
  scriptElement: HTMLScriptElement,
  url: GoogTrustedResourceUrlInterface
): void => {
  return goog.dom.safe.setScriptSrc(scriptElement, url);
};

/**
 * googFromBlob
 */
export const googFromBlob = (blob: Blob): GoogSafeUrlInterface => {
  return goog.html.SafeUrl.fromBlob(blob);
};

/**
 * googChartScriptStringConstFrom
 */
export const googChartScriptStringConstFrom = (): GoogStringConstInterface => {
  return goog.string.Const.from(
    'https://www.gstatic.com/charts/loader.js'
  );
};

/**
 * googTrustedResourceUrlFromConstant
 */
export const googTrustedResourceUrlFromConstant = (
  url: GoogStringConstInterface
): GoogTrustedResourceUrlInterface => {
  return goog.html.TrustedResourceUrl.fromConstant(url);
};

/**
 * googSafeUrlFormConstant
 */
export const googSafeUrlFormConstant = (
  url: GoogStringConstInterface
): GoogSafeUrlInterface => {
  return goog.html.SafeUrl.fromConstant(url);
};

/**
 * googSetImageSrc
 */
export const googSetImageSrc = (
  imageElement: HTMLImageElement,
  safeUrl: GoogSafeUrlInterface
): void => {
  goog.dom.safe.setImageSrc(imageElement, safeUrl);
};

/**
 * googRemoveChildren
 */
export const googRemoveChildren = (node: Node) => {
  goog.dom.removeChildren(node);
};

/**
 * googCreateImageFromBlob
 */
export const googCreateImageFromBlob = (blob: Blob): HTMLImageElement => {
  return goog.dom.safe.createImageFromBlob(blob);
};
