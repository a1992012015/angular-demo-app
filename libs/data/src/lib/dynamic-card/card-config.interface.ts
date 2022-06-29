import { ECardType, EContentType, ESectionType, EValueType } from '@angular-demo-app/data';

export interface ICardConfig {
  cardType: ECardType;
  contents: IContentConfig[];
}

export interface IContentConfig {
  contentType: EContentType;
  sections: ISectionConfig[];
}

export interface ISectionConfig {
  sectionType: ESectionType;
  values: IValueConfig[];
}

export interface IValueConfig {
  value: string;
  valueType: EValueType;
}
