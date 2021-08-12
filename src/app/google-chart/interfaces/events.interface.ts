import { InjectionToken } from '@angular/core';

/**
 * ChartEvent
 */
export interface ChartEvent {
  column: number;
  row: number;
}

/**
 * ChartErrorEvent
 */
export interface ChartErrorEvent {
  id: string;
  message: string;
  detailedMessage: string;
  options: object;
}

/**
 * GOOGLE_API_KEY
 */
export const GOOGLE_API_KEY = new InjectionToken<string>('GOOGLE_API_KEY');
