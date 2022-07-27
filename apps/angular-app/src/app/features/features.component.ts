import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { featureRoute } from '../../dictionary/router-dictionary';

@Component({
  selector: 'angular-demo-app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  title = 'angular-app';
  routerPaths = [
    {
      routerName: 'Dashboard',
      routerIcon: 'pix',
      routerPath: [
        featureRoute.features.root,
        featureRoute.features.init,
        featureRoute.features.children.dashboard
      ]
    },
    {
      routerName: '表单测试',
      routerIcon: 'dynamic_form',
      routerPath: [
        featureRoute.features.root,
        featureRoute.features.init,
        featureRoute.features.children.formField
      ]
    },
    {
      routerName: 'Immutable 测试',
      routerIcon: 'language',
      routerPath: [
        featureRoute.features.root,
        featureRoute.features.init,
        featureRoute.features.children.immutableData
      ]
    },
    {
      routerName: 'Todo Api',
      routerIcon: 'api',
      routerPath: [
        featureRoute.features.root,
        featureRoute.features.init,
        featureRoute.features.children.todosApi
      ]
    },
    {
      routerName: 'CSS选择器',
      routerIcon: 'contrast',
      routerPath: [
        featureRoute.features.root,
        featureRoute.features.init,
        featureRoute.features.children.cssSelector
      ]
    },
    {
      routerName: '动画帧',
      routerIcon: 'diversity_2',
      routerPath: [
        featureRoute.features.root,
        featureRoute.features.init,
        featureRoute.features.children.animationFrame
      ]
    },
    {
      routerName: '多重实例',
      routerIcon: 'list',
      routerPath: [
        featureRoute.features.root,
        featureRoute.features.init,
        featureRoute.features.children.multipleInstance
      ]
    },
    {
      routerName: '动态组件',
      routerIcon: 'flutter_dash',
      routerPath: [
        featureRoute.features.root,
        featureRoute.features.init,
        featureRoute.features.children.dynamicComponent
      ]
    }
  ]

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.log('FeaturesComponent')
  }

  goToPathRoute(index: number) {
    this.router.navigate(this.routerPaths[index].routerPath).then((navigate) => {
      console.log(this.routerPaths[index].routerPath, navigate);
    });
  }
}
