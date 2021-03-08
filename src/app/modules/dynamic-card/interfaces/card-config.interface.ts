import { SafeResourceUrl } from '@angular/platform-browser';

import { DictionaryInterface } from '../interfaces/dictionary.interface';

/**
 * card config interface
 */
export interface CardConfigInterface {
  cardType: CardType;
  cardTitle: CardTitleInterface;
  sectionConfig: SectionConfigInterface[];
  alwaysShow: boolean;
  cardFooter: FooterInterface;
}

/**
 * card type
 */
export enum CardType {
  COST_CARD,
  NOTE_CARD,
  CHAT_CARD,
  PROFILE_CARD,
  WEATHER_CARD,
  ANOMALY_CARD,
  SUMMARY_CARD,
  KEY_VALUE_CARD,
  YIELD_MATRIX_CARD,
  CROP_ROTATION_CARD,
  EVENT_TIMELINE_CARD,
  SOIL_COMPONENT_CARD,
  VERTICAL_KEY_VALUE_CARD,
  YIELD_DRIVER_MODEL_CARD
}

/**
 * title interface
 */
export interface CardTitleInterface {
  title: string;
  icon?: string;
  color?: string;
  tooltip?: string;
  subtitle?: string;
  titleClickable?: boolean;
  buttonType?: ButtonType;
}

/**
 * button type
 */
export enum ButtonType {
  BATE,
  ROTATION_3d,
  SELECT_YEAR,
  ADD_COST,
  SELECT_TYPE,
  SELECT_ROTATION,
  VIEW_MORE
}

/**
 * section title interface
 */
export interface SectionConfigInterface {
  sectionTitle: SectionTitleInterface;
  extractType: ExtractType;
  extractParams: ExtractParamsInterface[];
  sectionName: SectionName;
  dictionary: DictionaryInterface[];
  defaultEditKey: string[];
}

/**
 * section title
 */
export interface SectionTitleInterface {
  title: string;
  icon?: SafeResourceUrl;
  tooltip?: string;
  subtitle?: string;
  buttonType?: ButtonType;
}

/**
 * extract type
 */
export enum ExtractType {
  ALONE_API_DATA_TO_ALONE_SECTION, // extractObjectByArraySection
  AEZ_SECTION, // extractAEZSection
  NOT_EXTRACT
}

/**
 * extract function params
 */
export interface ExtractParamsInterface {
  dataPath: string[];
  dataTrait: DataTraitInterface[];
  extractKey: string[];
  editKey: string[];
}

/**
 * data trait
 */
export interface DataTraitInterface {
  key: string;
  rule: RuleType;
  value: Array<string | number>;
}

/**
 * rule type
 */
export enum RuleType {
  INCLUDED,
  NOT_INCLUDED,
  DAY_LINE,
  MONTH_LINE,
  SOC,
  CARBON_ATTRIBUTE,
  EQUAL
}

/**
 * section name
 */
export enum SectionName {
  COST,
  NOTE,
  EVENT,
  IMAGE,
  TABLE,
  MASSAGE,
  KEY_VALUE
}

/**
 * title interface
 */
export interface FooterInterface {
  title: string;
  buttonType?: ButtonType;
}
