import { EContainerType, IDynamicParams } from '@angular-demo-app/data';
import { ICardConfig } from '@angular-demo-app/data';

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

  get mergeConfig(): Map<string, ICardConfig> {
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
