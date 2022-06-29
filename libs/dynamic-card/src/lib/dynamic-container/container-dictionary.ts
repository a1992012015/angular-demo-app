import { UnknownContainer } from './container-class/unknown.container';
import { DefaultContainer } from './container-class/default.container';

export enum EContainerType {
  UNKNOWN,
  DEFAULT
}

export const contentDictionary = {
  [EContainerType.UNKNOWN]: UnknownContainer,
  [EContainerType.DEFAULT]: DefaultContainer
};
