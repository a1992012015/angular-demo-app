import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { Map } from 'immutable';

import { COVER_CROP_COLORS, CoverCropType, crop, CropType, TILLAGE_COLORS, TillageType } from './type-list';

const clearUnderline = (value: string): string => {
  return value ? value.replace(/_/g, ' ') : '';
};

@Component({
  selector: 'angular-demo-app-immutable-data',
  templateUrl: './immutable-data.component.html',
  styleUrls: ['./immutable-data.component.scss']
})
export class ImmutableDataComponent implements OnInit {
  updatedMap: Map<string, number> = Map();
  anotherUpdatedMap: Map<string, number> = Map();

  sectionClass1 = {
    data: Map({ order: 1, name: 'section-1' })
  };

  sectionClass2 = {
    data: Map({ order: 1, name: 'section-2' })
  };

  cropTypeE = [
    'UNKNOWN_CROPTYPE',
    'CORN',
    'COTTON',
    'RICE',
    'SORGHUM',
    'SOYBEANS',
    'SUNFLOWER',
    'PEANUTS',
    'TOBACCO',
    'SWEET_CORN',
    'POP_OR_ORN_CORN',
    'MINT',
    'BARLEY',
    'DURUM_WHEAT',
    'SPRING_WHEAT',
    'WINTER_WHEAT',
    'OTHER_SMALL_GRAINS',
    'DBL_CROP_WINWHT_SOYBEANS',
    'RYE',
    'OATS',
    'MILLET',
    'SPELTZ',
    'CANOLA',
    'FLAXSEED',
    'SAFFLOWER',
    'RAPE_SEED',
    'MUSTARD',
    'ALFALFA',
    'OTHER_HAY_NON_ALFALFA',
    'CAMELINA',
    'BUCKWHEAT',
    'SUGARBEETS',
    'DRY_BEANS',
    'POTATOES',
    'OTHER_CROPS',
    'SUGARCANE',
    'SWEET_POTATOES',
    'MISC_VEGS_FRUITS',
    'WATERMELONS',
    'ONIONS',
    'CUCUMBERS',
    'CHICK_PEAS',
    'LENTILS',
    'PEAS',
    'TOMATOES',
    'CANEBERRIES',
    'HOPS',
    'HERBS',
    'CLOVER_WILDFLOWERS',
    'SOD_GRASS_SEED',
    'SWITCHGRASS',
    'FALLOW_IDLE_CROPLAND',
    'FOREST',
    'SHRUBLAND',
    'BARREN',
    'CHERRIES',
    'PEACHES',
    'APPLES',
    'GRAPES',
    'CHRISTMAS_TREES',
    'OTHER_TREE_CROPS',
    'CITRUS',
    'PECANS',
    'ALMONDS',
    'WALNUTS',
    'PEARS',
    'CLOUDS_NO_DATA',
    'DEVELOPED',
    'WATER',
    'WETLANDS',
    'NONAG_UNDEFINED',
    'AQUACULTURE',
    'OPEN_WATER',
    'PERENNIAL_ICE_SNOW',
    'DEVELOPED_OPEN_SPACE',
    'DEVELOPED_LOW_INTENSITY',
    'DEVELOPED_MED_INTENSITY',
    'DEVELOPED_HIGH_INTENSITY',
    'DECIDUOUS_FOREST',
    'EVERGREEN_FOREST',
    'MIXED_FOREST',
    'GRASSLAND_PASTURE',
    'WOODY_WETLANDS',
    'HERBACEOUS_WETLANDS',
    'PISTACHIOS',
    'TRITICALE',
    'CARROTS',
    'ASPARAGUS',
    'GARLIC',
    'CANTALOUPES',
    'PRUNES',
    'OLIVES',
    'ORANGES',
    'HONEYDEW_MELONS',
    'BROCCOLI',
    'PEPPERS',
    'POMEGRANATES',
    'NECTARINES',
    'GREENS',
    'PLUMS',
    'STRAWBERRIES',
    'SQUASH',
    'APRICOTS',
    'VETCH',
    'DBL_CROP_WINWHT_CORN',
    'DBL_CROP_OATS_CORN',
    'LETTUCE',
    'PUMPKINS',
    'DBL_CROP_LETTUCE_DURUM_WHT',
    'DBL_CROP_LETTUCE_CANTALOUPE',
    'DBL_CROP_LETTUCE_COTTON',
    'DBL_CROP_LETTUCE_BARLEY',
    'DBL_CROP_DURUM_WHT_SORGHUM',
    'DBL_CROP_BARLEY_SORGHUM',
    'DBL_CROP_WINWHT_SORGHUM',
    'DBL_CROP_BARLEY_CORN',
    'DBL_CROP_WINWHT_COTTON',
    'DBL_CROP_SOYBEANS_COTTON',
    'DBL_CROP_SOYBEANS_OATS',
    'DBL_CROP_CORN_SOYBEANS',
    'BLUEBERRIES',
    'CABBAGE',
    'CAULIFLOWER',
    'CELERY',
    'RADISHES',
    'TURNIPS',
    'EGGPLANTS',
    'GOURDS',
    'CRANBERRIES',
    'DBL_CROP_BARLEY_SOYBEANS',
    'LATE_CORN',
    'LATE_SOYBEAN',
    'FLOODING',
    'COVER_CROP',
    'NONE',
    'MEADOW_FESCUE',
    'WHEAT',
    'FABA_BEANS',
    'CLOVER',
    'RASPBERRY',
    'RED_SWISS_CHARD',
    'GREEN_SWISS_CHARD',
    'RED_BEET',
    'CEREALS',
    'OTHER_GRAINS',
    'QUINOA_AND_SORGHUM',
    'CANOLA_AND_RAPESEED',
    'WET_CORN',
    'HARD_RED_WINTER_WHEAT',
    'HARD_RED_SPRING_WHEAT',
    'EURO_RYE'
  ];

  cropTypeS = [
    'CULTIVO_DESCONOCIDO',
    'MAIZ',
    'ALGODON',
    'ARROZ',
    'SORGO',
    'SOYBEANS',
    'GIRASOL',
    'MANI',
    'TABACO',
    'MAIZ_DULCE',
    'MAIZ_PISINGALLO',
    'MENTA',
    'CEBADA',
    'TRIGO_DURO',
    'TRIGO_PRIMAVERA',
    'TRIGO_INVIERNO',
    'OTROS_GRANOS_PEQUEÑOS',
    'DBL_CULTIIVO_TRIGO_DE_INVIERNO_SOJA',
    'CENTENO',
    'AVENA',
    'MIJO',
    'TRIGO_ESPELTA',
    'CANOLA',
    'LINO',
    'CARTAMO',
    'COLZA',
    'MOSTAZA',
    'ALFALFA',
    'OTRO_HENO_NO_ALFALFA',
    'SESAMO',
    'TRIGO_SARRACENO',
    'REMOLACHA_AZUCARERA',
    'FRIJOL_SECO',
    'PAPA',
    'OTROS_CULTIVOS',
    'CAÑA_DE_AZUCAR',
    'CAMOTE',
    'MISC_VEGS_FRUTA',
    'SANDIA',
    'CEBOLLA',
    'PEPINO',
    'GARBANZO',
    'LENTEJA',
    'ARVEJA',
    'TOMATE',
    'MORA',
    'LUPULO',
    'HIERBA',
    'FLOR_DE_TREBOL',
    'PAN_DE_CESPED',
    'PASTO_VARILLA',
    'BARBECHO_DE_VERANO',
    'BOSQUE',
    'ARBUSTO',
    'ESTERIL',
    'CEREZA',
    'DURAZNO',
    'MANZANA',
    'UVA',
    'ARBOL_DE_NAVIDAD',
    'OTROS_ARBOLES',
    'CITRICO',
    'PECANO',
    'ALMENDRA',
    'NUEZ',
    'PERA',
    'SIN_DATOS_POR_NUBES',
    'DESARROLLO',
    'AGUA',
    'HUMEDAL',
    'INDEFINIDO',
    'ACUICULTURA',
    'AGUAS_ABIERTAS',
    'NIEVE_PERENNE',
    'DESARROLLO_ESPACIO_ABIERTO',
    'DESARROLLO_BAJA_INTENSIDAD',
    'DESARROLLO_MEDIA_INTENSIDAD',
    'DESARROLLO_ALTA_INTENSIDAD',
    'BOSQUE_CADUCIFOLIO',
    'BOSQUE_SIEMPRE_VERDE',
    'BOSQUE_MIXTO',
    'PASTIZAL',
    'HUMEDAL_LEÑOSO',
    'HUMEDAL_HERBACEO',
    'PISTACHO',
    'TRIGO_TRITICALE',
    'ZANAHORIA',
    'ESPARRAGO',
    'AJO',
    'MELON_CANTALUPO',
    'CIRUELA_PASA',
    'OLIVA',
    'NARANJA',
    'MELON_VERDE',
    'BROCOLI',
    'PIMIENTO',
    'GRANADA',
    'MELOCOTON',
    'VERDURA',
    'CIRUELA',
    'FRUTILLA',
    'CALABACIN',
    'DAMASCO',
    'VICIA',
    'DBL_CULTIVO_TRIGO_DE_INVIERNO_MAIZ',
    'DBL_CULTIVO_AVENA_MAIZ',
    'LECHUGA',
    'CALABAZA',
    'DBL_CULTIVO_LECHUGA_TRIGO_DURO',
    'DBL_CULTIVO_LECHUGA_MELON_CANTALUPO',
    'DBL_CULTIVO_LECHUGA_ALGODON',
    'DBL_CULTIVO_LECHUGA_CEBADA',
    'DBL_CULTIVO_TRIGO_DURO_SORGO',
    'DBL_CULTIVO_CEBADA_SORGO',
    'DBL_CULTIVO_TRIGO_DE_INVIERNO_SORGO',
    'DBL_CULTIVO_CEBADA_MAIZ',
    'DBL_CULTIVO_TRIGO_DE_INVIERNO_ALGODON',
    'DBL_CULTIVO_SOJA_ALGODON',
    'DBL_CULTIVO_SOJA_AVENA',
    'DBL_CULTIVO_MAIZ_SOJA',
    'ARANDANO_AZUL',
    'REPOLLO',
    'COLIFLOR',
    'APIO',
    'RABANO',
    'NABO',
    'BERENJENA',
    'CALABAZA',
    'ARANDANO_ROJO',
    'DBL_CULTIVO_CEBADA_SOJA',
    'MAIZ_TARDIO',
    'SOJA_TARDIA',
    'INUNDACION',
    'CULTIVO_DE_COBERTUR',
    'NADA',
    'FESTUCA_PRATENSIS',
    'TRIGO',
    'HABA',
    'TREBOL',
    'FRAMBUESA',
    'ACELGA_ROJA',
    'ACELGA_VERDE',
    'REMOLACHA_ROJA',
    'CEREAL',
    'OTROS_GRANOS',
    'QUINOA_Y_SORGO',
    'CANOLA_Y_COLZA',
    'MAIZ_HUMEDO',
    'TRIGO_ROJO_DURO_DE_INVIERNO',
    'TRIGO_ROJO_DURO_DE_PRIMAVERA',
    'CENTENO_EUROPEO'
  ];

  constructor(private matSnackBar: MatSnackBar) {}

  ngOnInit(): void {
    const originalMap = Map({ a: 1, c: 3 });
    const test1 = originalMap.set('b', 1000);
    this.updatedMap = test1.set('d', 40);
    // New instance, leaving the original immutable.
    console.log(this.updatedMap !== originalMap);
    const test2 = originalMap.set('d', 40);
    this.anotherUpdatedMap = test2.set('b', 1000);
    // Despite both the results of the same operation, each created a new reference.
    console.log(this.anotherUpdatedMap !== this.updatedMap);
    // However the two are value equal.
    console.log('updatedMap', this.updatedMap);
    console.log('anotherUpdatedMap', this.anotherUpdatedMap);
    console.log(this.anotherUpdatedMap.equals(this.updatedMap));

    this.anotherUpdatedMap.mapKeys((key) => {
      console.log(`anotherUpdatedMap key: ${key} value: ${this.anotherUpdatedMap.get(key)}`);
    });

    this.updatedMap.mapKeys((key) => {
      console.log(`updatedMap key: ${key} value: ${this.updatedMap.get(key)}`);
    });

    this.cropTypeToString();
    this.tillageTypeToString();
    this.coverCropTypeToString();
  }

  upperTo(name: string): string {
    const underline = clearUnderline(name).toLowerCase();
    return `${underline.charAt(0).toUpperCase()}${underline.slice(1)}`;
  }

  copyText(name: string): void {
    navigator.clipboard.writeText(this.upperTo(name)).then(() => {
      this.openSnackBar();
    });
  }

  openSnackBar() {
    this.matSnackBar.open('Copy Success!!', 'Close', {
      duration: 1000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right'
    });
  }

  cloneSection(): void {
    const data = this.sectionClass1.data;
    this.sectionClass2.data = data.set('order', 2);
  }

  cropTypeToString(): void {
    let stringCrop = '[';
    // for (let cropTypeKey in CropType) {
    //   if (isNaN(cropTypeKey as unknown as number)) {
    //     console.log(CropType[cropTypeKey]);
    //     const str = clearUnderline(cropTypeKey).toLowerCase();
    //     const name = `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
    //     stringCrop += `[CropType.${cropTypeKey}]:$localize\`:@@mappedCropType.${cropTypeKey}:${name}\`,`;
    //   }
    // }

    crop.forEach((value) => {
      stringCrop += `{color:'${value.color}',value:CropType.${CropType[value.value]}},`
    })

    stringCrop += ']';
    console.log(stringCrop);
  }

  tillageTypeToString(): void {
    let stringCrop = '[';

    TILLAGE_COLORS.forEach((value) => {
      const name = Object.keys(TillageType).find((key) => {
        if (!isNaN(key as unknown as number)) {
          return clearUnderline(TillageType[key as unknown as number]).toUpperCase() === value.type.toUpperCase();
        } else {
          return false;
        }
      });
      stringCrop += `{color:'${value.color}',value:TillageType.${TillageType[name as unknown as number]}},`
    })

    stringCrop += ']';
    console.log(stringCrop);
  }

  coverCropTypeToString(): void {
    let stringCrop = '[';

    COVER_CROP_COLORS.forEach((value) => {
      const name = Object.keys(CoverCropType).find((key) => {
        if (!isNaN(key as unknown as number)) {
          return clearUnderline(CoverCropType[key as unknown as number]).toUpperCase() === value.type.toUpperCase();
        } else {
          return false;
        }
      });
      console.log('name', name);
      stringCrop += `{color:'${value.color}',value:CoverCropType.${CoverCropType[name as unknown as number]}},`
    })

    stringCrop += ']';
    console.log(stringCrop);
  }
}
