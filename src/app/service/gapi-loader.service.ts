import { Injectable } from '@angular/core';
import { fromPromise } from 'rxjs/internal-compatibility';
import { Observable, of, Subject } from 'rxjs';
import { ScriptLoaderInterface } from '../interface/script-loader.interface';
import { loadScriptByUrl } from '../utilities/loader.utilities';

/**
 * google api loader
 */
@Injectable({providedIn: 'root'})
export class GapiLoaderService implements ScriptLoaderInterface {

  private isLoaded = false;
  private isLoaded$ = new Subject<boolean>();
  private isLoading = false;

  isScriptLoaded(): Observable<boolean> {
    if (this.isLoaded && !this.isLoading) {
      return of(this.isLoaded);
    } else {
      this.load();
      return this.isLoaded$;
    }
  }

  private load() {
    if (this.isLoaded) {
      return;
    }
    this.isLoading = true;
    fromPromise(loadScriptByUrl('https://apis.google.com/js/api.js')).subscribe(
      () => {
        this.isLoading = false;
        this.isLoaded = true;
        this.isLoaded$.next(true);
        this.isLoaded$.complete();
        console.log('GApi loaded');
      },
      (e) => {
        this.isLoading = false;
        this.isLoaded$.error(e);
        this.isLoaded$.complete();
        console.log('failed to load GApi');
        console.error(e);
      },
      () => {
        console.log('load Gapi complete');
      }
    );
  }
}
