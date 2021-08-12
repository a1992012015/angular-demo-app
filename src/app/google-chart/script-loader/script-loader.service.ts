import { Inject, Injectable, LOCALE_ID, Optional } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

import {
  googChartScriptStringConstFrom,
  googSetScriptSrc,
  googTrustedResourceUrlFromConstant
} from '../interfaces/google.utilities';
import { GOOGLE_API_KEY } from '../interfaces/events.interface';

/**
 * ScriptLoaderService
 */
@Injectable()
export class ScriptLoaderService {
  private readonly scriptSource = 'https://www.gstatic.com/charts/loader.js';

  private onLoadSubject = new Subject<boolean>();

  constructor(
    @Inject(LOCALE_ID) private localeId: string,
    @Inject(GOOGLE_API_KEY) @Optional() private googleApiKey?: string
  ) {
    this.initialize();
  }

  get onReady(): Observable<boolean> {
    if (this.doneLoading) {
      return new Observable((observer: Observer<boolean>) => {
        observer.next(true);
        observer.complete();
      });
    }

    return this.onLoadSubject.asObservable();
  }

  get doneLoading(): boolean {
    return !(typeof (google) === 'undefined' || typeof (google.charts) === 'undefined');
  }

  private get isLoading(): boolean {
    if (this.doneLoading) {
      return false;
    }

    const pageScripts = Array.from(document.getElementsByTagName('script'));
    const googleChartsScript = pageScripts.find(script => script.src === this.scriptSource);
    return googleChartsScript !== undefined;
  }

  loadChartPackages(packages: string[]): Observable<void> {
    return new Observable((observer: Observer<void>) => {
      const config = {
        packages: [...packages, 'corechart'],
        language: this.localeId,
        mapsApiKey: this.googleApiKey
      };

      google.charts.load('current', config);
      google.charts.setOnLoadCallback(() => {
        observer.next();
        observer.complete();
      });
    });
  }

  private initialize() {
    if (!this.doneLoading && !this.isLoading) {
      const script = this.createScriptElement();

      script.onload = () => {
        this.onLoadSubject.next(true);
        this.onLoadSubject.complete();
      };

      script.onerror = () => {
        console.error('Failed to load the google chart script!');
        this.onLoadSubject.error('Failed to load the google chart script!');
        this.onLoadSubject.complete();
      };
    }
  }

  private createScriptElement(): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    const stringConst = googChartScriptStringConstFrom();
    const scriptSource = googTrustedResourceUrlFromConstant(stringConst);
    googSetScriptSrc(script, scriptSource);
    script.async = true;
    document.getElementsByTagName('head')[0].appendChild(script);

    return script;
  }
}
