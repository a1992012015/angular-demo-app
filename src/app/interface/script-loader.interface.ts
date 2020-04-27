import { Observable } from 'rxjs';

/**
 * script loader
 */
export interface ScriptLoaderInterface {
  isScriptLoaded(): Observable<boolean>;
}
