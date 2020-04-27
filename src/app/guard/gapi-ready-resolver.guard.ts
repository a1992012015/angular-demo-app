import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GapiLoaderService } from '../service/gapi-loader.service';

/**
 * gap resolve guard
 */
@Injectable({
  providedIn: 'root',
})
export class GapiReadyResolverGuard implements Resolve<boolean> {

  constructor(
    private gapiLoaderService: GapiLoaderService,
  ) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.gapiLoaderService.isScriptLoaded();
  }
}
