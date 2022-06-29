import { ComponentRef, Injectable, SimpleChange } from '@angular/core';

import { IDynamicComponent } from './interfaces/dynamic.interface';
import { AttachHostDirective } from './services/attach-host.directive';

@Injectable()
export class NoticeDynamicService {

  attachViewComponent(
    component: IDynamicComponent,
    element: AttachHostDirective,
    nodes = [],
    index = element.viewContainerRef.length
  ): ComponentRef<unknown> | null {
    if (component?.component) {
      const componentRef = element.viewContainerRef.createComponent(
        component.component,
        {
          index,
          injector: element.viewContainerRef.injector,
          projectableNodes: nodes
        }
      );

      this.changeViewComponent(componentRef, component?.props);
      return componentRef;
    } else {
      return null;
    }
  }

  detachViewComponent(componentRef: AttachHostDirective): void {
    componentRef && componentRef.viewContainerRef.clear();
  }

  removeViewComponent(componentRef: AttachHostDirective, index: number): void {
    componentRef.viewContainerRef.remove(index);
  }

  changeViewComponent(component: ComponentRef<unknown>, props: Record<string, unknown> = {}): void {
    const propsKeys = Object.keys(props);
    const changeProps = propsKeys.reduce((change, key) => {
      return Object.assign(change, { [key]: new SimpleChange(null, props[key], true) });
    }, {});
    const instance = component.instance as Record<string, unknown>;
    propsKeys.forEach((key) => {
      instance[key] = props[key];
    });
    if (instance?.['ngOnChanges'] instanceof Function) {
      instance['ngOnChanges'](changeProps);
    }
  }
}
