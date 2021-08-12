import { Injectable } from '@angular/core';
import { Hero, HeroService } from './hero.service';

/**
 * hero cache
 */
@Injectable()
export class HeroCacheService {
  hero!: Hero | undefined;

  constructor(private heroService: HeroService) {
    console.log('HeroCacheService');
  }

  fetchCachedHero(id: number) {
    if (!this.hero) {
      this.hero = this.heroService.getHeroById(id);
      console.log('hero', this.hero);
    }
    return this.hero;
  }
}
