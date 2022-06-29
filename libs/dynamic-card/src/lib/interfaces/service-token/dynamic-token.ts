import { InjectionToken } from '@angular/core';

import { IDynamicCard } from '../../services/utilities-class/dynamic-card';

export const DYNAMIC_CARD = new InjectionToken<IDynamicCard>('Dynamic Card Data');
