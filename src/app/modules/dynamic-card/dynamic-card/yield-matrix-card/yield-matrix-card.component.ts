import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import divide from 'lodash-es/divide';
import cloneDeep from 'lodash-es/cloneDeep';

import { SectionName } from '../../interfaces/card-config.interface';
import { DictionaryInterface } from '../../interfaces/dictionary.interface';
import {
  SelectOptionInterface,
  YieldMatrixInterface
} from '../../interfaces/dynamic-card.interface';
import {
  ExtractValueInterface,
  MetadataInterface,
  SectionInterface
} from '../../interfaces/extract-config.interface';
import { google, googlex } from '../../../../utilities/protobuf/defines';
import {
  clearUnderline,
  convertBushelToLbByCropType,
  convertLbToBushelByCropType,
  getCropTypeColorByCropType,
} from '../../../../utilities/common.utilities';
import { UnitSystem } from '../../../../dictionary/context.dictonary';
import IPerCropYield = googlex.agility.hopper2.IPerCropYield;
import CropType = googlex.agility.hopper2.CropType;
import ITimestamp = google.protobuf.ITimestamp;

/**
 * yield matrix card
 */
@Component({
  selector: 'app-yield-matrix-card',
  templateUrl: './yield-matrix-card.component.html',
  styleUrls: ['./yield-matrix-card.component.scss']
})
export class YieldMatrixCardComponent implements OnInit, OnChanges, OnDestroy {
  @Input() metadata?: MetadataInterface;
  @Input() selected = -1;
  @Input() index = -1;

  viewSections: SectionInterface[][] = [];
  allSections: YieldMatrixInterface[] = [];
  years: SelectOptionInterface[] = [];
  selectYear = 0;
  sectionName = SectionName;

  private compareSub?: Subscription;
  private unitSystemId = UnitSystem.IMPERIAL;

  constructor(
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    console.log('metadata yield matrix card', cloneDeep(this.metadata));
    // this.compareSub = this.compareSelect.getCloseCompareMetadataSub().subscribe((index) => {
    //   const allSection: YieldMatrixInterface[] = [];
    //   this.allSection.forEach((section) => {
    //     const yieldSectionData = section.yieldSectionData.filter((d, i) => i !== index);
    //     if (yieldSectionData.some((d) => d.length)) {
    //       allSection.push({ ...section, yieldSectionData });
    //     }
    //   });
    //   this.allSection = allSection;
    //
    //   this.getSelectYears();
    //
    //   this.filterViewSection();
    // });
    this.initDisplaySection(this.metadata);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('yield changes', changes);
    console.log(
      changes['selectCard'] && this.index === changes['selectCard']['currentValue']['index']
    );
    if (changes['selectCard'] && this.index === changes['selectCard']['currentValue']['index']) {
      this.filterViewSection();
    } else {
      this.initDisplaySection(this.metadata);
    }
  }

  ngOnDestroy() {
    if (this.compareSub) {
      this.compareSub.unsubscribe();
    }
  }

  changeCardView() {
    if (this.viewSections.length) {
      this.viewSections = [];
    } else {
      this.filterViewSection();
    }
  }

  changeCardYear(year: number) {
    this.selectYear = year;
    this.filterViewSection();
  }

  private initDisplaySection(metadata: MetadataInterface) {
    const yieldMatrixData: YieldMatrixInterface[] = [];
    metadata.sectionView.forEach((sections, index) => {
      const extractSections: SectionInterface[] = [];
      let sectionsYear = 0;
      sections.forEach((section) => {
        if (section.sectionName === SectionName.KEY_VALUE) {
          const data = section.extractData;
          const cropData = data.find((d) => Object.keys(d).shift() === 'per_crop_yield') || {};
          const yieldSection: SectionInterface = {
            ...section,
            sectionTitle: { title: '' },
            extractData: data.filter((d) => {
              return (
                Object.keys(d).shift() !== 'per_crop_yield' && Object.keys(d).shift() !== 'start'
              );
            }),
            dictionary: cloneDeep(section.dictionary)
          };

          if (yieldSection.extractData.length) {
            extractSections.push(yieldSection);
          }

          ((cropData['per_crop_yield'] || []) as IPerCropYield[]).forEach((crop) => {
            const matrixKeys = Object.keys(crop['yield_matrix']);
            const matrixData: ExtractValueInterface[] = matrixKeys.map((key) => {
              return { [key]: (crop['yield_matrix'] || {})[key] };
            });
            const cropType = crop['crop_type'] ? clearUnderline(CropType[crop['crop_type']]) : '';
            if (matrixData.length) {
              extractSections.push({
                ...section,
                sectionTitle: {
                  title: cropType,
                  icon: this.getSVGIconTemplateByCropType(cropType)
                },
                extractData: matrixData,
                dictionary: cloneDeep(section.dictionary)
              });
            }
          });

          const value = section.extractData.find((d) => Object.keys(d).shift() === 'start');
          const start = ((value['start'] as ITimestamp)?.seconds as number) || 0;
          sectionsYear = new Date(start * 1000).getUTCFullYear();
        } else {
          extractSections.push(section);
        }
      });

      if (sectionsYear) {
        const matrixIndex = yieldMatrixData.findIndex((d) => d.year === sectionsYear);
        if (matrixIndex === -1) {
          yieldMatrixData.push({
            year: sectionsYear,
            yieldSections: new Array(index + 1).fill(index).map((item, i) => {
              return index === i ? this.sortYieldMatrixData(extractSections) : [];
            })
          });
        } else {
          for (let i = 0; i <= index; i++) {
            if (index === i) {
              yieldMatrixData[matrixIndex].yieldSections[i] = this.sortYieldMatrixData(
                extractSections
              );
            } else if (!yieldMatrixData[matrixIndex].yieldSections[i]) {
              yieldMatrixData[matrixIndex].yieldSections[i] = [];
            }
          }
        }
      }
    });

    const count = metadata.sectionView.length;
    yieldMatrixData.forEach((d) => {
      for (let i = 0; i < count; i++) {
        if (!d.yieldSections[i]) {
          d.yieldSections[i] = [];
        }
      }
    });
    this.allSections = this.formatYieldMatrixData(yieldMatrixData);
    this.getSelectYears();
    this.filterViewSection();
  }

  private formatYieldBushels(
    key: string,
    data: ExtractValueInterface,
    dictionary: DictionaryInterface,
    cropType: string
  ): { value: ExtractValueInterface; unit: string } {
    if (this.unitSystemId === UnitSystem.IMPERIAL) {
      return {
        value: data,
        unit: dictionary.unit[key]
      };
    } else {
      const lbs = convertBushelToLbByCropType(data[key] as number, cropType);
      if (lbs === undefined) {
        if (key === 'yield_per_acre_in_bushels') {
          return {
            value: { [key]: divide(data[key] as number, 0.4046858) },
            unit: 'bu/ha'
          };
        } else {
          return {
            value: data,
            unit: dictionary.unit[key]
          };
        }
      } else {
        return {
          value: { [key]: lbs },
          unit: dictionary.unit[key]
        };
      }
    }
  }

  private formatYieldKg(
    key: string,
    data: ExtractValueInterface,
    dictionary: DictionaryInterface,
    cropType: string
  ): { value: ExtractValueInterface; unit: string } {
    if (this.unitSystemId === UnitSystem.IMPERIAL) {
      const bushel = convertLbToBushelByCropType(data[key] as number, cropType);
      if (bushel === undefined) {
        if (key === 'yield_per_hacter_in_kg') {
          return {
            value: data,
            unit: 'lb/ac'
          };
        } else {
          return {
            value: data,
            unit: 'lb'
          };
        }
      } else {
        return {
          value: { [key]: bushel },
          unit: dictionary.unit[key]
        };
      }
    } else {
      return {
        value: data,
        unit: dictionary.unit[key]
      };
    }
  }

  private getSelectYears() {
    const years = new Set(this.allSections.map((d) => d.year));
    const viewYears = Array.from(years).sort((f, s) => f - s);
    const selectYear = viewYears[viewYears.length - 1] || 0;
    this.years = viewYears.map((year) => {
      return { value: year, view: year.toString() };
    });
    const findYear = this.years.find((year) => year.value === this.selectYear);
    this.selectYear = findYear ? this.selectYear : selectYear;
  }

  private sortYieldMatrixData(data: SectionInterface[]): SectionInterface[] {
    const yieldData = data.slice(0, 1);
    const sortData = data.slice(1);
    const d = sortData.sort((first, second) => {
      const firstP = this.sortFindDataByKey(first, 'planted_area_in_acres');
      const firstH = this.sortFindDataByKey(first, 'harvest_area_in_acres');
      const secondP = this.sortFindDataByKey(second, 'planted_area_in_acres');
      const secondH = this.sortFindDataByKey(second, 'harvest_area_in_acres');
      const firstV = firstP || firstH;
      const secondV = secondP || secondH;
      return secondV - firstV;
    });
    return yieldData.concat(d);
  }

  private sortFindDataByKey(data: SectionInterface, key: string): number {
    return (
      ((data.extractData.find((item) => {
        return (Object.keys(item)[0] || '') === key;
      }) || {})[key] as number) || 0
    );
  }

  private filterViewSection() {
    const section = this.allSections.find((d) => d.year === this.selectYear);
    this.viewSections = section?.yieldSections || [];
  }

  private getSVGIconTemplateByCropType(cropType: string): SafeResourceUrl {
    const color = getCropTypeColorByCropType(cropType);
    // tslint:disable-next-line:max-line-length
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' style='fill: ${color}'/></svg>`;
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/svg+xml;base64,' + btoa(svg));
  }

  private formatYieldMatrixData(yieldMatrix: YieldMatrixInterface[]) {
    const yieldBushels = ['yield_total_in_bushels', 'yield_per_acre_in_bushels'];
    const yieldKg = ['yield_total_in_kg', 'yield_per_hacter_in_kg'];
    return yieldMatrix.map((matrix) => {
      matrix.yieldSections = matrix.yieldSections.map((sections) => {
        return sections.map((section) => {
          section.extractData = section.extractData.map((data) => {
            const dataKey = Object.keys(data)[0] || '';
            const cropType = section.sectionTitle;
            const dic = section.dictionary.find((d) => d.attrKey === dataKey);
            if (yieldBushels.includes(dataKey)) {
              const value = this.formatYieldBushels(dataKey, data, dic, cropType.title);
              section.dictionary = this.modifyDictionary(dataKey, value.unit, section.dictionary);
              return value.value;
            } else if (yieldKg.includes(dataKey)) {
              const value = this.formatYieldKg(dataKey, data, dic, cropType.title);
              section.dictionary = this.modifyDictionary(dataKey, value.unit, section.dictionary);
              return value.value;
            } else {
              return data;
            }
          });
          return section;
        });
      });
      return matrix;
    });
  }

  private modifyDictionary(key: string, unit: string, dictionary: DictionaryInterface[]) {
    return dictionary.map((dic) => {
      if (dic.attrKey === key) {
        dic.unit[key] = unit;
      }
      return dic;
    });
  }
}
