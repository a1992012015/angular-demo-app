import { Component, Host, Optional } from '@angular/core';
import { HeroCacheService } from '../services/hero-cache.service';
import { LoggerService } from '../services/logger.service';

/**
 * hero contact
 */
@Component({
  selector: 'angular-demo-app-hero-contact',
  templateUrl: './hero-contact.component.html',
  styleUrls: ['./hero-contact.component.scss']
})
export class HeroContactComponent {
  hasLogger = false;

  constructor(
    private heroCache: HeroCacheService,
    @Host()     // limit search for logger; hides the application-wide logger
    @Optional() // ok if the logger doesn't exist
    private loggerService?: LoggerService
  ) {
    if (loggerService) {
      this.hasLogger = true;
      loggerService.logInfo('HeroContactComponent can log!');
    }
    console.log('heroCache', this.heroCache.hero);
  }

  get phoneNumber() {
    return this.heroCache.hero?.phone;
  }
}
