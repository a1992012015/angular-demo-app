import { Component, OnInit } from '@angular/core';
import {
  ECardType,
  EContainerType,
  EContentType,
  ESectionType,
  EValueType,
  IDynamicParams
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
    config: new Map([
      [
        'first',
        {
          cardType: ECardType.DEFAULT,
          contents: [
            {
              contentType: EContentType.DEFAULT,
              sections: [
                {
                  sectionType: ESectionType.DEFAULT,
                  values: [
                    { value: 'First Value', valueType: EValueType.DEFAULT },
                    { value: 'Second Value', valueType: EValueType.DEFAULT }
                  ]
                },
                {
                  sectionType: ESectionType.DEFAULT,
                  values: [
                    { value: 'First Value', valueType: EValueType.DEFAULT }
                  ]
                }
              ]
            },
            {
              contentType: EContentType.DEFAULT,
              sections: [
                {
                  sectionType: ESectionType.DEFAULT,
                  values: [
                    { value: 'First Value', valueType: EValueType.DEFAULT },
                  ]
                },
                {
                  sectionType: ESectionType.DEFAULT,
                  values: [
                    { value: 'First Value', valueType: EValueType.DEFAULT },
                    { value: 'Second Value', valueType: EValueType.DEFAULT }
                  ]
                }
              ]
            }
          ]
        }
      ],
      [
        'second',
        {
          cardType: ECardType.DEFAULT,
          contents: [
            {
              contentType: EContentType.DEFAULT,
              sections: [
                {
                  sectionType: ESectionType.DEFAULT,
                  values: [
                    { value: 'First Value', valueType: EValueType.DEFAULT },
                  ]
                },
                {
                  sectionType: ESectionType.DEFAULT,
                  values: [
                    { value: 'First Value', valueType: EValueType.DEFAULT },
                    { value: 'Second Value', valueType: EValueType.DEFAULT }
                  ]
                }
              ]
            },
            {
              contentType: EContentType.DEFAULT,
              sections: [
                {
                  sectionType: ESectionType.DEFAULT,
                  values: [
                    { value: 'First Value', valueType: EValueType.DEFAULT },
                    { value: 'Second Value', valueType: EValueType.DEFAULT }
                  ]
                },
                {
                  sectionType: ESectionType.DEFAULT,
                  values: [
                    { value: 'First Value', valueType: EValueType.DEFAULT }
                  ]
                }
              ]
            }
          ]
        }
      ]
    ])
  };

  ngOnInit(): void {
    console.log('dynamicCard', this.dynamicCard);
  }
}
