import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Used to notify each other of the broadcast service in each section within the content
 */
@Injectable()
export class InternalNoticeContentService {
  private cardContentSub$ = new BehaviorSubject<Record<string, unknown>>({});

  getCardContentSub(): BehaviorSubject<Record<string, unknown>> {
    return this.cardContentSub$;
  }

  setCardContentSub(change: Record<string, unknown>): void {
    this.cardContentSub$.next(change);
  }
}
