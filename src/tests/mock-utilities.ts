import { TestBedStatic } from '@angular/core/testing';

/**
 * AnyBase
 */
export type AnyBase = string | number | object | symbol | boolean | null | undefined;

/**
 * AnyObject
 */
export interface AnyObject {
  [key: string]: AnyType | AnyObject;
}

/**
 * AnyType
 */
export type AnyType = AnyBase[] | AnyBase | AnyObject;


/**
 * For each
 */
export const forEach = <T>(
  collection: { [key: string]: T },
  iteratee: (
    arg0: T,
    arg1?: string,
    arg2?: { [key: string]: T },
  ) => { [key: string]: T } | void,
) => {
  const keys = Object.keys(collection);

  keys.forEach(key => {
    iteratee(collection[key], key, collection);
  });

  return collection;
};

/**
 * MockedServicesObjInterface
 */
export interface MockedServicesObjInterface {
  providers: Array<{
    provide: AnyObject;
    useValue: AnyObject;
  }>;
  mockedServices: AnyObject;
  originServices: AnyObject;
}

/**
 * Create mock service
 */
export function createMockServices(servicesObj: AnyObject): MockedServicesObjInterface {
  const providers: MockedServicesObjInterface['providers'] = [];
  const mockedServices: MockedServicesObjInterface['mockedServices'] = {};

  forEach(servicesObj, (serviceClass, serviceName) => {
    const mockedService = {};
    providers.push({
      provide: serviceClass as AnyObject,
      useValue: mockedService,
    });
    if (serviceName) {
      mockedServices[serviceName] = mockedService;
    }
  });

  return {
    providers,
    mockedServices,
    originServices: servicesObj,
  };
}

/**
 * Attach default method for mock service
 */
export function setDefaultMethodsToMocks(
  mockServicesObj: MockedServicesObjInterface,
  methods: AnyObject,
): void {
  forEach(methods as { [key: string]: AnyObject }, (serviceMethods: AnyObject, serviceName) => {
    forEach(serviceMethods, (method, methodName) => {
      if (serviceName && methodName) {
        const service = mockServicesObj.mockedServices[serviceName] as AnyObject;
        service[methodName] = method;
      }
    });
  });
}

/**
 * Over write default method for mock service
 */
export function overwriteMethodsToMocks(
  testBed: TestBedStatic,
  mockServicesObj: MockedServicesObjInterface,
  methods: AnyObject,
): AnyObject {
  const services: AnyObject = {};
  forEach(methods, (serviceMethods, serviceName) => {
    if (serviceName) {
      const className = mockServicesObj.originServices[serviceName];
      // @ts-ignore
      const serviceMockInstance = testBed.inject(className);
      services[serviceName] = serviceMockInstance;
      forEach(serviceMethods as { [key: string]: AnyObject }, (method, methodName) => {
        if (methodName) {
          serviceMockInstance[methodName] = method;
        }
      });
    }
  });

  return services;
}
