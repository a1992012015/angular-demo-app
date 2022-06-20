import { Component, OnInit } from '@angular/core';

/**
 * dashboard component
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'angular-demo-app';
  mapEntries: Array<[string, number]> = [
    ['b', 1],
    ['a', 12],
    ['a', 12],
    ['c', 11],
    ['d', 13]
  ];

  const;
  testOrder = {
    '7b2d5bde-1eb1-5b1b-8963-dbf121fd8eda': { 'CARD_SHOW': true, CARD_ORDER: 3 },
    '0d8d7807-ba4e-51b0-9f8c-ccbe5599b1f0': { 'CARD_SHOW': false, CARD_ORDER: 1 },
    '0809e3ca-e888-56ad-9e53-897934e546b6': { 'CARD_SHOW': false, CARD_ORDER: 3 },
    'b7a98249-d4da-58aa-af84-9d3eac7ea6fc': { 'CARD_SHOW': false },
    'b7c36eac-b312-5f00-af39-e18de9b35139': { 'CARD_SHOW': false, CARD_ORDER: 2 },
    'b219f6b3-8c93-5dfe-bef2-6391289c242b': { 'CARD_SHOW': false }
  };
  testMap = new Map([
    ['7b2d5bde-1eb1-5b1b-8963-dbf121fd8eda', { name: 1 }],
    ['efbca6f6-6673-532a-9ea2-3cc87d8d065e', { name: 2 }],
    ['79c78bb9-6eff-5160-a219-4c123c5e2081', { name: 3 }],
    ['0d8d7807-ba4e-51b0-9f8c-ccbe5599b1f0', { name: 4 }],
    ['1026f207-8a0e-54b4-a08e-687e282fd2fa', { name: 5 }],
    ['2fa18844-94eb-59ed-9812-098b167ef84f', { name: 6 }],
    ['0809e3ca-e888-56ad-9e53-897934e546b6', { name: 7 }],
    ['b7a98249-d4da-58aa-af84-9d3eac7ea6fc', { name: 8 }],
    ['88ac1a27-d8da-5d6e-b81c-8b826e01f8c1', { name: 9 }],
    ['b7c36eac-b312-5f00-af39-e18de9b35139', { name: 10 }],
    ['4fac9ac3-0087-5126-8919-b338dd52b5e4', { name: 11 }],
    ['d75dfeb2-a1cf-581c-91f1-702de4dba602', { name: 12 }],
    ['b219f6b3-8c93-5dfe-bef2-6391289c242b', { name: 13 }]
  ]);

  ngOnInit(): void {
    // const checkMap = new Map(this.checkMapEntries(this.mapEntries));

    // console.log('checkMap', checkMap);

    for (let i = 0; i < this.testMap.size; i++) {

    }

    const sortTestOrder = new Map();
    const keys: string[] = [];
    this.testMap.forEach((value, key, map) => {
      keys.push(key);
    });
    console.log('keys', keys);
    const orderKeys = keys.map((key, index) => ({ index, key }));
    const sortKeys = orderKeys.sort((first, second) => {
      const firstIndex = this.testOrder[first.key]?.CARD_ORDER || first.index;
      const secondIndex = this.testOrder[second.key]?.CARD_ORDER || second.index;
      return firstIndex - secondIndex;
    });
    console.log('testOrder', this.testOrder);
    console.log('testMap', this.testMap);
    console.log('sortKeys', sortKeys);
    sortKeys.forEach((value) => {
      sortTestOrder.set(value.key, this.testMap.get(value.key));
    });

    sortTestOrder.forEach((value, key, map) => {
      console.log('==================');
      console.log('value', value);
      console.log('key', key);
      console.log('map', map);
    });

    console.log('sortTestOrder', sortTestOrder);
    console.log('sortTestOrder => 5', sortTestOrder.get('0809e3ca-e888-56ad-9e53-897934e546b6'));
  }

  checkMapEntries(entries: Array<[string, number]>): Array<[string, number]> {
    const keys = entries.map(([first]) => first);
    if (keys.length === new Set(keys).size) {
      return entries;
    } else {
      throw new Error(('previous has a duplicate key'));
    }
  }
}
