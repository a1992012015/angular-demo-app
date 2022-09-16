import { ECardType, EContentType, ESectionType, EValueType } from '@angular-demo-app/data';

export interface ICardConfig {
  cardType: ECardType;
  uuid: string;
  contents: IContentConfig[];
}

export interface IContentConfig {
  contentType: EContentType;
  uuid: string;
  sections: ISectionConfig[];
}

export interface ISectionConfig {
  sectionType: ESectionType;
  uuid: string;
  values: IValueConfig[];
}

export interface IValueConfig {
  valueType: EValueType;
  uuid: string;
}
