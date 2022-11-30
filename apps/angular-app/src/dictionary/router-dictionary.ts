/**
 * feature routing dictionary
 */
export const featureRoute = {
  features: {
    root: 'features',
    init: 'core',
    children: {
      todosApi: 'todos-api',
      dragDrop: 'drag-drop',
      dashboard: 'dashboard',
      formField: 'form-field',
      chartDemo: 'chart-demo',
      webWorker: 'web-worker',
      cssSelector: 'css-selector',
      immutableData: 'immutable-data',
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
