import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { featureRoute, otherRoute } from '../../interfaces/routing-interface';

/**
 * features component
 */
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  routerPaths = [
    {
      routerName: 'Dashboard',
      routerPath: [
        featureRoute.features.root,
        featureRoute.features.init,
        featureRoute.features.children.dashboard
      ]
    },
    {
      routerName: 'Rem计算工具',
      routerPath: [
        featureRoute.features.root,
        featureRoute.features.init,
        featureRoute.features.children.remCompute
      ]
    },
    {
      routerName: 'Css选择器',
      routerPath: [
        featureRoute.features.root,
        featureRoute.features.init,
        featureRoute.features.children.cssSelector
      ]
    },
    {
      routerName: 'Google Chart',
      routerPath: [
        featureRoute.features.root,
        featureRoute.features.init,
        featureRoute.features.children.googleChart
      ]
    },
    {
      routerName: '高性能动画',
      routerPath: [
        featureRoute.features.root,
        featureRoute.features.init,
        featureRoute.features.children.animationFrame
      ]
    },
    {
      routerName: '地图图片',
      routerPath: [
        featureRoute.features.root,
        featureRoute.features.init,
        featureRoute.features.children.mapSvgCut
      ]
    },
    {
      routerName: '过滤选择器',
      routerPath: [
        featureRoute.features.root,
        featureRoute.features.init,
        featureRoute.features.children.selectFilter
      ]
    },
    {
      routerName: '提示信息',
      routerPath: [
        featureRoute.features.root,
        featureRoute.features.init,
        featureRoute.features.children.toastMassage
      ]
    },
    {
      routerName: '谷歌地图',
      routerPath: [
        featureRoute.features.root,
        featureRoute.features.init,
        featureRoute.features.children.googleMap
      ]
    },
    {
      routerName: '多个实例',
      routerPath: [
        featureRoute.features.root,
        featureRoute.features.init,
        featureRoute.features.children.multipleInstance
      ]
    },
    {
      routerName: '打印测试',
      routerPath: [
        otherRoute.other.root,
        otherRoute.other.init,
        otherRoute.other.children.printTest
      ]
    },
    {
      routerName: '双重选择',
      routerPath: [
        featureRoute.features.root,
        featureRoute.features.init,
        featureRoute.features.children.multipleSelect
      ]
    },
    {
      routerName: '动态卡片',
      routerPath: [
        featureRoute.features.root,
        featureRoute.features.init,
        featureRoute.features.children.dynamicLoad
      ]
    }
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToPathRoute(index: number) {
    this.router.navigate(this.routerPaths[index].routerPath).then((navigate) => {
      // console.log(this.routerPaths[index].routerPath, navigate);
    });
  }
}
