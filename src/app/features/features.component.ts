import { Component, OnInit } from '@angular/core';
import { routeDictionary } from './interfaces/routing-interface';

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
      routerPath: routeDictionary.features.children.dashboard
    },
    {
      routerName: 'Rem计算工具',
      routerPath: routeDictionary.features.children.remCompute
    },
    {
      routerName: 'Css选择器',
      routerPath: routeDictionary.features.children.cssSelector
    },
    {
      routerName: 'Google Chart',
      routerPath: routeDictionary.features.children.googleChart
    },
    {
      routerName: '高性能动画',
      routerPath: routeDictionary.features.children.animationFrame
    },
    {
      routerName: '地图图片',
      routerPath: routeDictionary.features.children.mapSvgCut
    },
    {
      routerName: '过滤选择器',
      routerPath: routeDictionary.features.children.selectFilter
    },
    {
      routerName: '提示信息',
      routerPath: routeDictionary.features.children.toastMassage
    },
    {
      routerName: '谷歌地图',
      routerPath: routeDictionary.features.children.googleMap
    },
    {
      routerName: '多个实例',
      routerPath: routeDictionary.features.children.multipleInstance
    },
    {
      routerName: '打印测试',
      routerPath: routeDictionary.features.children.printTest
    }
  ];

  ngOnInit(): void {
  }
}
