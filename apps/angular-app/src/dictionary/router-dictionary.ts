/**
 * feature routing dictionary
 */
export const featureRoute = {
  features: {
    root: 'features',
    init: 'core',
    children: {
      todosApi: 'todos-api',
      dashboard: 'dashboard',
      formField: 'form-field',
      webWorker: 'web-worker',
      cssSelector: 'css-selector',
      animationFrame: 'animation-frame',
      multipleInstance: 'multiple-instance',
      dynamicComponent: 'dynamic-component'
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
