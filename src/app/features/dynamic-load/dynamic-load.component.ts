import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  Type,
  ViewChild
} from '@angular/core';
import { AddHostDirective } from 'app/features/dynamic-load/add-host.directive';
import { DynamicContainerComponent } from 'app/features/dynamic-load/dynamic-container/dynamic-container.component';
import { DynamicDefaultComponent } from 'app/features/dynamic-load/dynamic-default/dynamic-default.component';
import { DynamicCardService } from 'app/features/dynamic-load/dynamic-card.service';

/**
 * component
 */
export interface IDynamicComponent {
  component: Type<unknown>;
  props?: Record<string, unknown>;
}

/**
 * dynamic load
 */
@Component({
  selector: 'app-dynamic-load',
  templateUrl: './dynamic-load.component.html',
  styleUrls: ['./dynamic-load.component.scss'],
  viewProviders: [DynamicCardService]
})
export class DynamicLoadComponent implements OnInit, OnDestroy {
  ads: IDynamicComponent[] = [
    { component: DynamicContainerComponent,
      props: {
        dynamicComponent: {
          component: DynamicDefaultComponent,
          props: { data: { num: 12 } }
        }
      }
    }
  ];

  currentAdIndex = -1;

  @ViewChild(AddHostDirective, { static: true }) adHost!: AddHostDirective;
  interval: NodeJS.Timeout;

  constructor(private dynamicCardService: DynamicCardService) {
  }

  ngOnInit() {
    this.loadComponent();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.dynamicCardService.attachViewComponent(
      adItem,
      this.adHost
    );

    console.log('componentFactory', componentFactory);
  }
}
