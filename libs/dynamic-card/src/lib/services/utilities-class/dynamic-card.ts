import { IDynamicParams } from '../../interfaces/dynamic.interface';
import { EContainerType } from '../../dynamic-container/container-dictionary';


export interface IDynamicCard {
  init(): void;
}

export class DynamicCard implements IDynamicCard {
  private dynamicData?: IDynamicParams;

  constructor(params?: IDynamicParams) {
    this.init(params);
  }

  get key(): string {
    return this.dynamicData?.key || '';
  }

  get localeId(): string {
    return this.dynamicData?.localeId || '';
  }

  get mergeConfig(): Map<string, object> {
    return this.dynamicData?.config || new Map();
  }

  get container(): EContainerType {
    return this.dynamicData?.containerType || EContainerType.UNKNOWN;
  }

  init(params?: IDynamicParams): void {
    console.log('params', params);
    this.dynamicData = params;
  }
}
