import { Component, OnInit } from '@angular/core';
import { merge } from 'lodash-es';

/**
 * card base
 */
interface ICardBaseConfig {
  name: string;
}

const weatherLocationCard: ICardBaseConfig = { name: 'weatherLocationCard' };

const yieldEffectCard: ICardBaseConfig = { name: 'yieldEffectCard' };

const stringArray = ['weatherLocationCard', 'yieldEffectCard'];

export namespace Card {
  type TNumberArray = [686, 999];

  export type TMapItem = [string, ICardBaseConfig];

  export type TMapArray<T extends TMapItem = TMapItem> = T[];

  export type TMapList = TMapItem[];

  type TTestMap = [['weatherLocationCard', ICardBaseConfig], ['yieldEffectCard', ICardBaseConfig], ['yieldEffectCard', ICardBaseConfig]];

  type TFirst<A> = A extends [F: infer FI, ...S: infer SO] ? FI : never;

  type TLeftover<A> = A extends [F: infer FI, ...S: infer SO] ? SO : A;

  type TCreatLength<L, T, R extends T[] = []> = R['length'] extends L ? R : TCreatLength<L, T, [T, ...R]>;

  type test1 = TFirst<TTestMap>;
  type test3 = TFirst<TFirst<TMapList>>;
  type test4 = TFirst<(typeof testMap)[number]>;
  type test5 = TCreatLength<3, TMapItem>;

  // tslint:disable-next-line:max-line-length
  type TFirstKey<A extends TMapList = [], RESULT extends string[] = []> = A['length'] extends 0 ? RESULT : TFirstKey<TLeftover<A>, [...RESULT, TFirst<TFirst<A>> extends string ? TFirst<TFirst<A>> : never]>;

  // tslint:disable-next-line:max-line-length
  type TKeys<A extends TMapList, RESULT extends string[] = []> = A['length'] extends 0 ? RESULT : TKeys<TLeftover<A>, [...RESULT, TFirstKey<A> extends string ? TFirstKey<A> : never]>;

  // type TTest1 = TFirstKey<TTestMap>;
  // type TTest2 = TKeys<TTestMap>;
  // type TTest3 = TLeftover<TMapList>;
  //
  type TCheckArray<C extends TMapItem, A extends TMapList> = TFirst<C> extends TKeys<A> ? TMapList : [...TMapList, C];

  // tslint:disable-next-line:max-line-length
  type TConfigs<A extends TMapList, RESULT extends TMapList = []> = A['length'] extends 0 ? RESULT : TConfigs<TLeftover<A> extends TMapList ? TLeftover<A> : never, TCheckArray<TFirst<A> extends TMapItem ? TFirst<A> : never, RESULT>>;

  type TResultType1 = TFirstKey<test5>;
  // type TResultType2 = TConfigs<test5>;

  // type TResultType1 = TConfigs<TTestMap>;
  //
  // const configs: TConfigs<TMapList> = [
  //   ['weatherLocationCard', { name: '123' }],
  //   ['weatherLocationCard', { name: '456' }]
  // ];
}

const testMap: Card.TMapArray = [
  ['weatherLocationCard', weatherLocationCard],
  ['weatherLocationCard', weatherLocationCard],
  ['yieldEffectCard', yieldEffectCard]
];

type Te = typeof testMap;

/**
 * typescript test
 */
@Component({
  selector: 'app-typescript-test',
  templateUrl: './typescript-test.component.html',
  styleUrls: ['./typescript-test.component.scss']
})
export class TypescriptTestComponent implements OnInit {

  ngOnInit(): void {
    const test1 = { name: { name: 1, value: 1 } };
    const test2 = { name: { name: 2 } };
    const mergeTest = merge({}, test1, test2);
    mergeTest.name.value = 2;
    console.log('test1', test1);
    console.log('test2', test2);
    console.log('mergeTest', mergeTest);
    const array1 = [1, 2];
    console.log(JSON.stringify(array1));
  }

}
