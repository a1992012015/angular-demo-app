import {
  CardType,
  FooterInterface,
  SectionConfigInterface,
  CardTitleInterface
} from './card-config.interface';
import { google } from '../../../utilities/protobuf/defines';
import IApiData = google.xagility.agriculture.v1alpha1.IApiData;

/**
 * extract metadata
 */
export interface MetadataInterface {
  cardType: CardType;
  cardTitle: CardTitleInterface;
  sectionView: SectionInterface[][];
  cardFooter: FooterInterface;
}

/**
 * extract section
 */
export interface SectionInterface extends SectionConfigInterface, ExtractDataInterface {}

/**
 * extract data
 */
export interface ExtractDataInterface {
  extractData: ExtractValueInterface[];
  apiData: IApiData[];
}

/**
 * extract value
 */
export interface ExtractValueInterface {
  [key: string]: ExtractValueType;
}

export type ExtractValueType = number | string | object;

/**
 * anomaly extract metadata
 */
export interface AnomalyViewSectionInterface {
  sectionTitle: AnomalyTitleInterface;
  viewSections: AnomalyExtractSectionInterface[][];
}

/**
 * anomaly extract section
 */
export interface AnomalyExtractSectionInterface {
  key: string;
  value: number;
  valueStatus: string;
  isAnomaly: boolean;
}

/**
 * anomaly card title
 */
export interface AnomalyTitleInterface extends CardTitleInterface {
  showExpansion: boolean;
  relatedKey: string;
}
