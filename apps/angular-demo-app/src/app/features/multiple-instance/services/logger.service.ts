import { Injectable } from '@angular/core';

/**
 * Logger
 */
@Injectable()
export class LoggerService {
  logs: string[] = [];

  logInfo(msg: string)  { this.log(`INFO: ${msg}`); }
  logDebug(msg: string) { this.log(`DEBUG: ${msg}`); }
  logError(msg: string) { this.log(`ERROR: ${msg}`, true); }

  private log(msg: string, isErr = false) {
    this.logs.push(msg);
    isErr ? console.error(msg) : console.log(msg);
  }
}
