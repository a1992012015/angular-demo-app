import { Injectable } from '@angular/core';

/**
 * hero
 */
export class Hero {
  constructor(
    public id: number,
    public name: string,
    public description?: string,
    public phone?: string
  ) {
  }
}

/**
 * hero
 */
@Injectable()
export class HeroService {

  constructor() {
    console.log('HeroService constructor', Worker);
  }

  // TODO: move to database
  private heroes: Hero[] = [
    new Hero(1, 'RubberMan', 'Hero of many talents', '123-456-7899'),
    new Hero(2, 'Magma', 'Hero of all trades', '555-555-5555'),
    new Hero(3, 'Dr Nice', 'The name says it all', '111-222-3333')
  ];

  getHeroById(id: number): Hero | undefined {
    return this.heroes.find(hero => hero.id === id);
  }

  getAllHeroes(): Hero[] {
    return this.heroes;
  }
}
