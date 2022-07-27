import { Component, OnInit } from '@angular/core';
import { Map } from 'immutable';

@Component({
  selector: 'angular-demo-app-immutable-data',
  templateUrl: './immutable-data.component.html',
  styleUrls: ['./immutable-data.component.scss']
})
export class ImmutableDataComponent implements OnInit {
  updatedMap: Map<string, number> = Map();
  anotherUpdatedMap: Map<string, number> = Map();

  sectionClass1 = {
    data: Map({ order: 1, name: 'section-1' })
  };

  sectionClass2 = {
    data: Map({ order: 1, name: 'section-2' })
  };

  constructor() {}

  ngOnInit(): void {
    const originalMap = Map({ a: 1, c: 3 });
    const test1 = originalMap.set('b', 1000);
    this.updatedMap = test1.set('d', 40);
    // New instance, leaving the original immutable.
    console.log(this.updatedMap !== originalMap);
    const test2 = originalMap.set('d', 40);
    this.anotherUpdatedMap = test2.set('b', 1000);
    // Despite both the results of the same operation, each created a new reference.
    console.log(this.anotherUpdatedMap !== this.updatedMap);
    // However the two are value equal.
    console.log('updatedMap', this.updatedMap);
    console.log('anotherUpdatedMap', this.anotherUpdatedMap);
    console.log(this.anotherUpdatedMap.equals(this.updatedMap));

    this.anotherUpdatedMap.mapKeys((key) => {
      console.log(`anotherUpdatedMap key: ${key} value: ${this.anotherUpdatedMap.get(key)}`);
    });

    this.updatedMap.mapKeys((key) => {
      console.log(`updatedMap key: ${key} value: ${this.updatedMap.get(key)}`);
    });
  }

  cloneSection(): void {
    const data = this.sectionClass1.data;
    this.sectionClass2.data = data.set('order', 2);
  }
}
