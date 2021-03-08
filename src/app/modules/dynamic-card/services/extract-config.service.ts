import { Injectable } from '@angular/core';

import {
  CardConfigInterface,
  DataTraitInterface,
  ExtractType,
  RuleType,
  SectionConfigInterface
} from '../interfaces/card-config.interface';
import {
  ExtractDataInterface,
  ExtractValueInterface,
  MetadataInterface,
  SectionInterface
} from '../interfaces/extract-config.interface';
import { DictionaryInterface, DisplayType } from '../interfaces/dictionary.interface';
import { googlex, schema2, google } from '../../../utilities/protobuf/defines';
import IMetadata = schema2.IMetadata;
import IApiData = google.xagility.agriculture.v1alpha1.IApiData;
import ITargetAndResult = googlex.agility.hopper2.ITargetAndResult;
import ISubstanceMeasure = googlex.agility.hopper2.ISubstanceMeasure;

/**
 * extract config
 */
@Injectable()
export class ExtractConfigService {
  extractMetadata(metadata: IMetadata[], configs: CardConfigInterface[]): MetadataInterface[] {
    const viewMetadata: MetadataInterface[] = [];
    configs.forEach((config) => {
      const sections: SectionInterface[][] = [];
      metadata.forEach((data) => {
        const section = this.extractCardData(data?.data || [], config);
        sections.push(section);
      });
      if (sections.some((s) => s.length)) {
        viewMetadata.push({
          cardType: config.cardType,
          cardTitle: config.cardTitle,
          sectionView: sections,
          cardFooter: config.cardFooter
        });
      }
    });
    return viewMetadata;
  }

  protected filterApiDataByDataTrait(data: IApiData[], trait: DataTraitInterface[]): IApiData[] {
    return data.filter((metadata) => {
      return this.filterDataTypeApiData(trait, metadata);
    });
  }

  protected filterDataTypeApiData(dataTrait: DataTraitInterface[], metadata: IApiData): boolean {
    return dataTrait.every((trait) => {
      switch (trait.rule) {
        case RuleType.INCLUDED:
          return trait.value.some((k) => {
            return metadata[trait.key].toString().includes(k.toString());
          });
        case RuleType.NOT_INCLUDED:
          return trait.value.every((k) => {
            return !metadata[trait.key].toString().includes(k.toString());
          });
        case RuleType.DAY_LINE:
          const startDay = metadata[trait.key]?.start?.seconds || 0;
          const endDay = metadata[trait.key]?.end?.seconds || 0;
          return endDay - startDay === 86400;
        case RuleType.MONTH_LINE:
          const startMonth = metadata[trait.key]?.start?.seconds || 0;
          const endMonth = metadata[trait.key]?.end?.seconds || 0;
          return endMonth - startMonth > 86400;
        case RuleType.SOC:
          const notSocData = metadata.payload?.soil_organic_matter?.soil_organic_matter[0];
          return !!notSocData?.soil_depth_range;
        case RuleType.CARBON_ATTRIBUTE:
          const socData = metadata.payload?.soil_organic_matter?.soil_organic_matter[0];
          return !!socData?.soil_mositure_m3_per_m3;
        case RuleType.EQUAL:
          return trait.value.includes(metadata[trait.key]);
        default:
          return false;
      }
    });
  }

  protected findObjectByDataPath(data: object, path: string[]): object {
    const dataPath = [...path] as Array<keyof typeof data>;
    const key = dataPath.shift();
    if (key && data[key]) {
      if (dataPath.length) {
        return this.findObjectByDataPath(data[key], dataPath);
      } else {
        return data[key];
      }
    } else {
      return undefined;
    }
  }

  protected extractValueByExtractKey(data: object, keys: string[]): ExtractValueInterface[] {
    if (data) {
      return keys.reduce((current: ExtractValueInterface[], key) => {
        if (data[key]) {
          current.push({ [key]: data[key] });
        }
        return current;
      }, []);
    } else {
      return [];
    }
  }

  protected checkExtractData(
    data: ExtractDataInterface[],
    section: SectionConfigInterface
  ): ExtractDataInterface[] {
    const filterData: ExtractDataInterface[] = [];
    data.forEach((extract) => {
      const extractData: ExtractValueInterface[] = [];
      extract.extractData.forEach((value) => {
        const key = Object.keys(value).shift();
        const dictionary = this.findDictionaryByKey(section.dictionary, key);
        if (dictionary && this.checkExtractValueComplete(value[key], dictionary)) {
          extractData.push(value);
        }
      });
      if (extractData.length) {
        filterData.push({ ...extract, extractData });
      }
    });
    return filterData;
  }

  protected checkExtractValueComplete(
    v: number | string | object,
    d: DictionaryInterface
  ): boolean {
    switch (d.displayType) {
      case DisplayType.TARGET_RESULT:
        const valueTR = v as ITargetAndResult;
        return valueTR.hasOwnProperty('target') || valueTR.hasOwnProperty('result');
      case DisplayType.MULTI_SELECT:
        return !!(v as string[]).length;
      case DisplayType.VOLUME_MASS:
        const valueVM = v as ISubstanceMeasure;
        return valueVM.hasOwnProperty('volume_liter') || valueVM.hasOwnProperty('mass_kg');
      default:
        return v !== null && v !== undefined && v !== '';
    }
  }

  protected findDictionaryByKey(
    dictionary: DictionaryInterface[],
    key: string
  ): DictionaryInterface | undefined {
    return dictionary.find((dic) => dic.attrKey === key);
  }

  private extractCardData(data: IApiData[], config: CardConfigInterface): SectionInterface[] {
    const sections: SectionInterface[] = [];
    config.sectionConfig.forEach((section) => {
      sections.push(...this.extractSectionData(data, section));
    });
    return sections;
  }

  private extractSectionData(
    data: IApiData[],
    section: SectionConfigInterface
  ): SectionInterface[] {
    switch (section.extractType) {
      case ExtractType.ALONE_API_DATA_TO_ALONE_SECTION:
        return this.aloneApiDataToAloneSection(data, section);
      case ExtractType.NOT_EXTRACT:
        return this.notExtract(section);
      default:
        return [];
    }
  }

  private aloneApiDataToAloneSection(
    data: IApiData[],
    section: SectionConfigInterface
  ): SectionInterface[] {
    const extractData: ExtractDataInterface[] = [];
    section.extractParams.forEach((params) => {
      const apiData = this.filterApiDataByDataTrait(data, params.dataTrait);
      apiData.forEach((api, index) => {
        const findObject = this.findObjectByDataPath(api, params.dataPath);
        const extractValue = this.extractValueByExtractKey(findObject, params.extractKey);
        if (extractData[index]) {
          extractData[index].extractData.push(...extractValue);
          if (!extractData[index].apiData.some((d) => d.uuid === api.uuid)) {
            extractData[index].apiData.push(api);
          }
        } else {
          extractData.push({
            extractData: extractValue,
            apiData: [api]
          });
        }
      });
    });
    const extractSectionData = this.checkExtractData(extractData, section);
    return extractSectionData.map((extract) => {
      return { ...section, ...extract };
    });
  }

  private notExtract(section: SectionConfigInterface): SectionInterface[] {
    const extractData = [];
    section.dictionary.forEach((dictionary) => {
      if (dictionary.displayName[dictionary.attrKey]) {
        extractData.push({ [dictionary.attrKey]: dictionary.displayName[dictionary.attrKey] });
      }
    });
    const newSection: SectionInterface = {
      ...section,
      extractData,
      apiData: []
    };
    return newSection.extractData.length ? [newSection] : [];
  }
}
