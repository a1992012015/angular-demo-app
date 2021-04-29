import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExtractConfigService } from '../modules/dynamic-card/services/extract-config.service';
import { MergeConfigService } from '../modules/dynamic-card/services/merge-config.service';
import { MetadataInterface } from '../modules/dynamic-card/interfaces/extract-config.interface';
import { PUBLIC_CROP_TYPE_EN_US } from '../features/view-card/configs/public-crop-type-config.en_US';
import { CARD_DICTIONARY_EN_US } from '../features/view-card/configs/card-dictionary.en_US';
import * as publicPath from './response.json';
import { schema2 } from '../utilities/protobuf/defines';
import IMetadata = schema2.IMetadata;

/**
 * dsds
 */
export interface ViewCompareMetadataInterface {
  metadata: MetadataInterface[];
}

/**
 * public crop type metadata
 */
@Injectable()
export class PublicCropMetadataService {
  // @ts-ignore
  constructor(
    private extractConfig: ExtractConfigService,
    private mergeConfig: MergeConfigService
  ) {
  }

  requestCompareMetadata(): Observable<ViewCompareMetadataInterface> {
    const configs = this.mergeConfig.mergeMetadata(
      PUBLIC_CROP_TYPE_EN_US,
      CARD_DICTIONARY_EN_US
    );
    console.log('configs', configs);
    const data = publicPath.data as IMetadata[];
    const metadata = this.extractConfig.extractMetadata(data, configs);
    console.log('metadata', metadata);

    return of({ metadata });
  }
}
