import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UnitSystem } from '../dictionary/context.dictonary';
import { SystemContextInterface } from '../interface/context.interface';
import { unitSymbos } from '../dictionary/crop-type.dictionary';

/**
 * system context
 */
@Injectable({
  providedIn: 'root'
})
export class SystemContextService {
  private systemContext: SystemContextInterface;

  getUnitSystemIdentifier(): UnitSystem {
    return this.systemContext?.unitSystem === undefined
      ? UnitSystem.IMPERIAL
      : this.systemContext.unitSystem;
  }

  getUnitSymbolByKey(unitKey: string): string {
    const unitConfig = unitSymbos[unitKey];
      const unitSystemId = this.getUnitSystemIdentifier();
    if (unitConfig && unitSystemId !== undefined) {
      if (unitConfig.i18n && unitConfig.i18n[environment.localeId]) {
        let unitSymbol: string = unitConfig[unitSystemId];
        unitConfig.i18n[environment.localeId].forEach((str) => {
          unitSymbol = unitSymbol.replace('$', str);
        });
        return unitSymbol;
      } else {
        return unitConfig[unitSystemId];
      }
    } else {
      return unitKey;
    }
  }

  getRequestUnitSymbol(): string {
    const unitSystemIdentifier = this.getUnitSystemIdentifier();
    switch (unitSystemIdentifier) {
      case UnitSystem.IMPERIAL:
        return 'imperial';
      case UnitSystem.METRIC:
      default:
        return 'metric';
    }
  }
}
