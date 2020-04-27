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
