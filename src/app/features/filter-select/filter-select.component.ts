import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CdkAccordionItem } from '@angular/cdk/accordion';

import { SelectOptionInterface } from '../interfaces/select.interface';

/**
 * filter select
 */
@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent extends CdkAccordionItem implements OnInit {
  filterControl = new FormControl();

  variables = [
    { value: 0, view: 'UNKNOWN CROPTYPE', show: true },
    { value: 1, view: 'CORN', show: true },
    { value: 2, view: 'COTTON', show: true },
    { value: 3, view: 'RICE', show: true },
    { value: 4, view: 'SORGHUM', show: true },
    { value: 5, view: 'SOYBEANS', show: true },
    { value: 6, view: 'SUNFLOWER', show: true },
    { value: 7, view: 'PEANUTS', show: true },
    { value: 8, view: 'TOBACCO', show: true },
    { value: 9, view: 'SWEET CORN', show: true },
    { value: 10, view: 'POP OR ORN CORN', show: true },
    { value: 11, view: 'MINT', show: true },
    { value: 12, view: 'BARLEY', show: true },
    { value: 13, view: 'DURUM WHEAT', show: true },
    { value: 14, view: 'SPRING WHEAT', show: true },
    { value: 15, view: 'WINTER WHEAT', show: true },
    { value: 16, view: 'OTHER SMALL GRAINS', show: true },
    { value: 17, view: 'DBL CROP WINWHT SOYBEANS', show: true },
    { value: 18, view: 'RYE', show: true },
    { value: 19, view: 'OATS', show: true },
    { value: 20, view: 'MILLET', show: true },
    { value: 21, view: 'SPELTZ', show: true },
    { value: 22, view: 'CANOLA', show: true },
    { value: 23, view: 'FLAXSEED', show: true },
    { value: 24, view: 'SAFFLOWER', show: true },
    { value: 25, view: 'RAPE SEED', show: true },
    { value: 26, view: 'MUSTARD', show: true },
    { value: 27, view: 'ALFALFA', show: true },
    { value: 28, view: 'OTHER HAY NON ALFALFA', show: true },
    { value: 29, view: 'CAMELINA', show: true },
    { value: 30, view: 'BUCKWHEAT', show: true },
    { value: 31, view: 'SUGARBEETS', show: true },
    { value: 32, view: 'DRY BEANS', show: true },
    { value: 33, view: 'POTATOES', show: true },
    { value: 34, view: 'OTHER CROPS', show: true },
    { value: 35, view: 'SUGARCANE', show: true },
    { value: 36, view: 'SWEET POTATOES', show: true },
    { value: 37, view: 'MISC VEGS FRUITS', show: true },
    { value: 38, view: 'WATERMELONS', show: true },
    { value: 39, view: 'ONIONS', show: true },
    { value: 40, view: 'CUCUMBERS', show: true },
    { value: 41, view: 'CHICK PEAS', show: true },
    { value: 42, view: 'LENTILS', show: true },
    { value: 43, view: 'PEAS', show: true },
    { value: 44, view: 'TOMATOES', show: true },
    { value: 45, view: 'CANEBERRIES', show: true },
    { value: 46, view: 'HOPS', show: true },
    { value: 47, view: 'HERBS', show: true },
    { value: 48, view: 'CLOVER WILDFLOWERS', show: true },
    { value: 49, view: 'SOD GRASS SEED', show: true },
    { value: 50, view: 'SWITCHGRASS', show: true },
    { value: 51, view: 'FALLOW IDLE CROPLAND', show: true },
    { value: 52, view: 'FOREST', show: true },
    { value: 53, view: 'SHRUBLAND', show: true },
    { value: 54, view: 'BARREN', show: true },
    { value: 55, view: 'CHERRIES', show: true },
    { value: 56, view: 'PEACHES', show: true },
    { value: 57, view: 'APPLES', show: true },
    { value: 58, view: 'GRAPES', show: true },
    { value: 59, view: 'CHRISTMAS TREES', show: true },
    { value: 60, view: 'OTHER TREE CROPS', show: true },
    { value: 61, view: 'CITRUS', show: true },
    { value: 62, view: 'PECANS', show: true },
    { value: 63, view: 'ALMONDS', show: true },
    { value: 64, view: 'WALNUTS', show: true },
    { value: 65, view: 'PEARS', show: true },
    { value: 66, view: 'CLOUDS NO DATA', show: true },
    { value: 67, view: 'DEVELOPED', show: true },
    { value: 68, view: 'WATER', show: true },
    { value: 69, view: 'WETLANDS', show: true },
    { value: 70, view: 'NONAG UNDEFINED', show: true },
    { value: 71, view: 'AQUACULTURE', show: true },
    { value: 72, view: 'OPEN WATER', show: true },
    { value: 73, view: 'PERENNIAL ICE SNOW', show: true },
    { value: 74, view: 'DEVELOPED OPEN SPACE', show: true },
    { value: 75, view: 'DEVELOPED LOW INTENSITY', show: true },
    { value: 76, view: 'DEVELOPED MED INTENSITY', show: true },
    { value: 77, view: 'DEVELOPED HIGH INTENSITY', show: true },
    { value: 79, view: 'DECIDUOUS FOREST', show: true },
    { value: 80, view: 'EVERGREEN FOREST', show: true },
    { value: 81, view: 'MIXED FOREST', show: true },
    { value: 83, view: 'GRASSLAND PASTURE', show: true },
    { value: 84, view: 'WOODY WETLANDS', show: true },
    { value: 85, view: 'HERBACEOUS WETLANDS', show: true },
    { value: 86, view: 'PISTACHIOS', show: true },
    { value: 87, view: 'TRITICALE', show: true },
    { value: 88, view: 'CARROTS', show: true },
    { value: 89, view: 'ASPARAGUS', show: true },
    { value: 90, view: 'GARLIC', show: true },
    { value: 91, view: 'CANTALOUPES', show: true },
    { value: 92, view: 'PRUNES', show: true },
    { value: 93, view: 'OLIVES', show: true },
    { value: 94, view: 'ORANGES', show: true },
    { value: 95, view: 'HONEYDEW MELONS', show: true },
    { value: 96, view: 'BROCCOLI', show: true },
    { value: 97, view: 'PEPPERS', show: true },
    { value: 98, view: 'POMEGRANATES', show: true },
    { value: 99, view: 'NECTARINES', show: true },
    { value: 100, view: 'GREENS', show: true },
    { value: 101, view: 'PLUMS', show: true },
    { value: 102, view: 'STRAWBERRIES', show: true },
    { value: 103, view: 'SQUASH', show: true },
    { value: 104, view: 'APRICOTS', show: true },
    { value: 105, view: 'VETCH', show: true },
    { value: 106, view: 'DBL CROP WINWHT CORN', show: true },
    { value: 107, view: 'DBL CROP OATS CORN', show: true },
    { value: 108, view: 'LETTUCE', show: true },
    { value: 109, view: 'PUMPKINS', show: true },
    { value: 110, view: 'DBL CROP LETTUCE DURUM WHT', show: true },
    { value: 111, view: 'DBL CROP LETTUCE CANTALOUPE', show: true },
    { value: 112, view: 'DBL CROP LETTUCE COTTON', show: true },
    { value: 113, view: 'DBL CROP LETTUCE BARLEY', show: true },
    { value: 114, view: 'DBL CROP DURUM WHT SORGHUM', show: true },
    { value: 115, view: 'DBL CROP BARLEY SORGHUM', show: true },
    { value: 116, view: 'DBL CROP WINWHT SORGHUM', show: true },
    { value: 117, view: 'DBL CROP BARLEY CORN', show: true },
    { value: 118, view: 'DBL CROP WINWHT COTTON', show: true },
    { value: 119, view: 'DBL CROP SOYBEANS COTTON', show: true },
    { value: 120, view: 'DBL CROP SOYBEANS OATS', show: true },
    { value: 121, view: 'DBL CROP CORN SOYBEANS', show: true },
    { value: 122, view: 'BLUEBERRIES', show: true },
    { value: 123, view: 'CABBAGE', show: true },
    { value: 124, view: 'CAULIFLOWER', show: true },
    { value: 125, view: 'CELERY', show: true },
    { value: 126, view: 'RADISHES', show: true },
    { value: 127, view: 'TURNIPS', show: true },
    { value: 128, view: 'EGGPLANTS', show: true },
    { value: 129, view: 'GOURDS', show: true },
    { value: 130, view: 'CRANBERRIES', show: true },
    { value: 134, view: 'DBL CROP BARLEY SOYBEANS', show: true },
    { value: 201, view: 'LATE CORN', show: true },
    { value: 202, view: 'LATE SOYBEAN', show: true },
    { value: 203, view: 'FLOODING', show: true },
    { value: 204, view: 'COVER CROP', show: true },
    { value: 205, view: 'NONE', show: true },
    { value: 206, view: 'MEADOW FESCUE', show: true },
    { value: 207, view: 'WHEAT', show: true },
    { value: 208, view: 'FABA BEANS', show: true },
    { value: 209, view: 'CLOVER', show: true }
  ];

  filteredOptions: SelectOptionInterface[] = [];
  isOpen = false;

  ngOnInit() {
    this.filteredOptions = this.variables.slice();
  }

  togglePanel() {
    this.isOpen = !this.isOpen;
  }

  changeValue(selected: SelectOptionInterface[]) {
    // console.log('selected', selected);
  }
}
