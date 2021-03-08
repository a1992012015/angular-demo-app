import { Injectable } from '@angular/core';

import { DictionaryInterface, DisplayType } from '../interfaces/dictionary.interface';
import { ExtractValueInterface } from '../interfaces/extract-config.interface';
import { FormatToViewInterface } from '../interfaces/format-to-view.interface';
import { SystemContextService } from '../../../service/system-context.service';
import { clearUnderline } from '../../../utilities/common.utilities';

/**
 * format to view
 */
@Injectable()
export class FormatToViewService {
  constructor(private systemContext: SystemContextService) {}

  formatViewValue(
    value: ExtractValueInterface,
    dictionary: DictionaryInterface[],
    costTotal = 0
  ): FormatToViewInterface | null {
    const key = Object.keys(value).shift() || '';
    const dic = this.findDictionaryByKey(dictionary, key);
    switch (dic?.displayType) {
      case DisplayType.NUMBER:
        return this.formatNumberView(key, value, dic);
      default:
        return null;
    }
  }

  private formatNumberView(
    key: string,
    value: ExtractValueInterface,
    dictionary: DictionaryInterface
  ): FormatToViewInterface {
    const v = value[key];
    const isNumber = typeof v === 'number';
    return {
      displayKey: key,
      displayName: this.formatDisplayName(dictionary, key),
      displayType: dictionary.displayType,
      displayOrder: dictionary.order,
      displayValue: {
        benchmarkValue: { value: v, key },
        value: isNumber ? (v as number) * (dictionary.modifier || 1) : (v as string),
        unit: this.formatDisplayUnit(dictionary, key),
        decimal: dictionary.decimal || 0,
        modifier: dictionary.modifier || 1,
        tooltip: dictionary.tooltip || ''
      }
    };
  }

  private findDictionaryByKey(
    dictionary: DictionaryInterface[],
    key: string
  ): DictionaryInterface | undefined {
    return dictionary.find((dic) => dic.attrKey === key);
  }

  private formatDisplayName(dictionary: DictionaryInterface, key: string): string {
    const displayName = clearUnderline((dictionary.displayName || {})[key] || '');
    const displayUnit = (dictionary.nameUnit || {})[key] || [];
    return displayUnit.reduce((t, u) => {
      const unit = this.systemContext.getUnitSymbolByKey(u);
      t = t.replace('$', unit);
      return t;
    }, displayName);
  }

  private formatDisplayUnit(dictionary: DictionaryInterface, key: string): string {
    const superScriptUnits = [
      { trait: 'm2', superScriptUnicode: '\u00b2', main: 'm' },
      { trait: 'ft2', superScriptUnicode: '\u00b2', main: 'ft' }
    ];
    let formattedUnit = this.systemContext.getUnitSymbolByKey((dictionary.unit || {})[key]) || '';
    superScriptUnits.forEach((unit) => {
      if (formattedUnit && formattedUnit.search(unit.trait) !== -1) {
        formattedUnit = formattedUnit.replace(unit.trait, unit.main + unit.superScriptUnicode);
      }
    });
    return formattedUnit;
  }
}
