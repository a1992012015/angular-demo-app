import { Component, OnInit } from '@angular/core';
import { v5 as UUID } from 'uuid';
import {
  ECardType,
  EContainerType,
  EContentType,
  ESectionType,
  EValueType,
  ICardConfig,
  IContentConfig,
  IDynamicParams,
  ISectionConfig,
  IValueConfig
} from '@angular-demo-app/data';

@Component({
  selector: 'angular-demo-app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent implements OnInit {
  dynamicCard: IDynamicParams = {
    key: 'test-key',
    localeId: 'en-US',
    containerType: EContainerType.DEFAULT,
    config: new Map()
  };

  ngOnInit(): void {
    this.creatDynamicConfig();
    console.log('dynamicCard', this.dynamicCard);
  }

  private creatDynamicConfig(): void {
    const cardCount = 3;
    const contentCount = 2;
    const sectionCount = 2;
    const valueMax = 5;
    const card = new Map<string, ICardConfig>();

    for (let cardI = 0; cardI < cardCount; cardI++) {
      const content: IContentConfig[] = [];

      for (let contentI = 0; contentI < contentCount; contentI++) {
        const section: ISectionConfig[] = [];

        const valueCount = this.creatValueCount(valueMax, sectionCount);

        for (let sectionI = 0; sectionI < sectionCount; sectionI++) {
          const value: IValueConfig[] = [];

          for (let valueI = 0; valueI < valueCount[sectionI]; valueI++) {
            value.push({
              uuid: UUID(`value-${cardI}-${contentI}-${sectionI}-${valueI}`, UUID.URL),
              valueType: EValueType.DEFAULT
            });
          }

          section.push({
            values: value,
            uuid: UUID(`section-${cardI}-${contentI}-${sectionI}`, UUID.URL),
            sectionType: ESectionType.DEFAULT
          });
        }

        content.push({
          sections: section,
          uuid: UUID(`content-${cardI}-${contentI}`, UUID.URL),
          contentType: EContentType.DEFAULT
        });
      }

      card.set(UUID(`card-${cardI}`, UUID.URL), {
        cardType: ECardType.DEFAULT,
        uuid: `card-${cardI}`,
        contents: content
      });
    }

    this.dynamicCard.config = card;
  }

  private creatValueCount(max: number, count: number): number[] {
    let maxCount = max < count ? count : max;
    const valueCount: number[] = [];
    for (let i = 0; i < count; i++) {
      maxCount--;
      valueCount.push(1);
    }
    while (maxCount > 0) {
      const index = Math.floor(Math.random() * count);
      valueCount[index] = valueCount[index] + 1;
      maxCount--;
    }
    return valueCount;
  }
}
