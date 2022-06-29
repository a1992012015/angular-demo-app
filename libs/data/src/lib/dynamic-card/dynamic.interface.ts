import { EContainerType } from './dynamic-container';
import { ICardConfig } from './card-config.interface';

export interface IDynamicParams {
  key: string;
  localeId: string;
  config: Map<string, ICardConfig>;
  containerType: EContainerType;
}
