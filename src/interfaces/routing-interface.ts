/**
 * feature routing dictionary
 */
export const featureRoute = {
  features: {
    root: 'features',
    init: 'core',
    children: {
      dashboard: 'dashboard',
      remCompute: 'rem-compute',
      cssSelector: 'css-selector',
      googleChart: 'google-chart',
      animationFrame: 'animation-frame',
      mapSvgCut: 'map-svg-cut',
      selectFilter: 'select-filter',
      toastMassage: 'toast-massage',
      googleMap: 'google-map',
      multipleSelect: 'multiple-select',
      multipleInstance: 'multiple-instance'
    }
  }
};

/**
 * other routing dictionary
 */
export const otherRoute = {
  other: {
    root: 'other',
    init: 'core',
    children: {
      dashboard: 'dashboard',
      printTest: 'print-test'
    }
  }
};
