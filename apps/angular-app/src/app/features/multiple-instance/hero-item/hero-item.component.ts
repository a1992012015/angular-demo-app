import { Component, OnInit } from '@angular/core';
import { HeroCacheService } from '../services/hero-cache.service';

/**
 * hero item
 */
@Component({
  selector: 'angular-demo-app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss']
})
export class HeroItemComponent implements OnInit {
  heroId = 2;

  constructor(private heroCache: HeroCacheService) { }

  ngOnInit(): void {
    this.heroCache.fetchCachedHero(this.heroId);
  }

  get hero() {
    return this.heroCache.hero;
  }
}
