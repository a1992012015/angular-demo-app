/**
 * feature routing dictionary
 */
export const featureRoute = {
  features: {
    root: 'features',
    init: 'core',
    children: {
      dashboard: 'dashboard',
      formField: 'form-field',
      cssSelector: 'css-selector',
      animationFrame: 'animation-frame',
      multipleInstance: 'multiple-instance',

      remCompute: 'rem-compute',
      chartTest: 'chart-test',
      webWorker: 'web-worker',
      selectFilter: 'select-filter',
      toastMassage: 'toast-massage',
      googleMap: 'google-map',
      dynamicComponent: 'dynamic-component',
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
