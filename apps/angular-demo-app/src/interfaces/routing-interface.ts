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
      chartTest: 'chart-test',
      animationFrame: 'animation-frame',
      webWorker: 'web-worker',
      selectFilter: 'select-filter',
      toastMassage: 'toast-massage',
      googleMap: 'google-map',
      multipleInstance: 'multiple-instance',
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
