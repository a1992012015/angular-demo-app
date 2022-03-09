import {
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
  SimpleChange
} from '@angular/core';
import { IDynamicComponent } from 'app/features/dynamic-load/dynamic-load.component';
import { AddHostDirective } from 'app/features/dynamic-load/add-host.directive';

/**
 * csd
 */
@Injectable()
export class DynamicCardService {

  constructor(
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  attachViewComponent(
    component: IDynamicComponent,
    element: AddHostDirective,
    nodes = []
  ): ComponentRef<unknown> {
    if (component?.component) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        component.component
      );

      const componentRef = element.viewContainerRef.createComponent(
        componentFactory,
        element.viewContainerRef.length,
        element.viewContainerRef.injector,
        nodes
      );

      this.changeViewComponent(componentRef, component.props);

      return componentRef;
    } else {
      return null;
    }
  }

  detachViewComponent(componentRef: AddHostDirective): void {
    componentRef.viewContainerRef.clear();
  }

  changeViewComponent(component: ComponentRef<unknown>, props: Record<string, unknown>): void {
    const propsKeys = Object.keys(props);
    const changeProps = propsKeys.reduce((change, key) => {
      return Object.assign(change, { [key]: new SimpleChange(null, props[key], true) });
    }, {});

    propsKeys.forEach((key) => {
      component.instance[key] = props[key];
    });

    console.log(component.instance?.['ngOnChanges']);

    if (component.instance?.['ngOnChanges']) {
      component.instance?.['ngOnChanges'](changeProps);
    }
  }
}
