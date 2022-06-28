import { Component, Input, OnInit } from '@angular/core';

import { HeroCacheService } from '../services/hero-cache.service';
import { LoggerService } from '../services/logger.service';

/**
 * hero bio
 */
@Component({
  selector: 'app-hero-bio',
  templateUrl: './hero-bio.component.html',
  styleUrls: ['./hero-bio.component.scss'],
  providers: [LoggerService, HeroCacheService]
})
export class HeroBioComponent implements OnInit {
  @Input() heroId = 0;

  constructor(private heroCache: HeroCacheService) { }

  ngOnInit() {
    this.heroCache.fetchCachedHero(this.heroId);
  }

  get hero() {
    return this.heroCache.hero;
  }
}
