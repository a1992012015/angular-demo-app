import { Injectable } from '@angular/core';
import cloneDeep from 'lodash-es/cloneDeep';

import { CardConfigInterface, SectionConfigInterface } from '../interfaces/card-config.interface';
import { DictionaryInterface, ValidationRulesInterface } from '../interfaces/dictionary.interface';

/**
 * merge config
 */
@Injectable()
export class MergeConfigService {
  mergeMetadata(
    cardConfig: CardConfigInterface[],
    dictionary: DictionaryInterface[]
  ): CardConfigInterface[] {
    return cardConfig.map((config) => {
      const sectionView: SectionConfigInterface[] = [];
      config.sectionConfig.forEach((section) => {
        const cardDic = this.mergeDictionary(section.dictionary, dictionary);
        if (cardDic.length) {
          sectionView.push({ ...section, dictionary: cardDic });
        }
      });
      return { ...config, sectionConfig: sectionView };
    });
  }

  private mergeDictionary(
    dictionary: DictionaryInterface[],
    defaultDictionary: DictionaryInterface[]
  ): DictionaryInterface[] {
    const mergeDictionary: DictionaryInterface[] = [];
    dictionary.forEach((dic) => {
      const defaultDic = defaultDictionary.find((d) => d.attrKey === dic.attrKey);
      const mergeDic = cloneDeep(defaultDic ? Object.assign({}, defaultDic, dic) : dic);
      mergeDictionary.push({
        ...mergeDic,
        displayName: this.filterDictionaryKey(mergeDic.displayName, mergeDic.requiredKey),
        unit: this.filterDictionaryKey(mergeDic.unit, mergeDic.requiredKey),
        validationRules: this.filterDictionaryKey(mergeDic.validationRules, mergeDic.requiredKey)
      });
    });
    return mergeDictionary;
  }

  private filterDictionaryKey(
    data: { [key: string]: string | ValidationRulesInterface[] },
    requiredKey: string[]
  ) {
    if (data) {
      return Object.keys(data)
        .filter((key) => requiredKey.includes(key))
        .reduce((previous, key) => {
          if (data[key]) {
            previous[key] = data[key];
          }
          return previous;
        }, {});
    } else {
      return {};
    }
  }
}
