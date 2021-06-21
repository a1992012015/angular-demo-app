import { InjectionToken, TemplateRef } from '@angular/core';

/**
 * toast data
 */
export class ToastData {
  type: ToastType;
  text?: string;
  template?: TemplateRef<Comment>;
  templateContext?: {};
}

/**
 * toast type
 */
export enum ToastType {
  WARNING,
  INFO,
  ERROR,
  SUCCESS
}

/**
 * toast config
 */
export interface ToastInterface {
  position?: {
    vertically: PositionType;
    horizontally: PositionType;
    margin: number;
  };
  animation?: {
    fadeOut: number;
    fadeIn: number;
  };
}

/**
 * position type
 */
export enum PositionType {
  TOP,
  LEFT,
  RIGHT,
  BOTTOM,
  CENTER
}

export const defaultToastConfig: ToastInterface = {
  position: {
    vertically: PositionType.TOP,
    horizontally: PositionType.CENTER,
    margin: 20
  },
  animation: {
    fadeOut: 1500,
    fadeIn: 300
  }
};

/**
 * direction type
 */
export enum DirectionType {
  VERTICALLY,
  HORIZONTALLY
}

export const TOAST_CONFIG_TOKEN = new InjectionToken('TOAST_CONFIG_TOKEN');
