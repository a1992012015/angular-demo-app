import { Component, OnInit } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { Hero, HeroService } from './services/hero.service';

/**
 * multiple instance
 */
@Component({
  selector: 'app-multiple-instance',
  templateUrl: './multiple-instance.component.html',
  styleUrls: ['./multiple-instance.component.scss']
})
export class MultipleInstanceComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private logger: LoggerService, private hero: HeroService) {
    logger.logInfo('Creating MultipleInstanceComponent');
  }

  ngOnInit() {
    this.heroes = this.hero.getAllHeroes();
  }
}
