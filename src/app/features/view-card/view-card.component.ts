import { Component, OnInit } from '@angular/core';

import { MetadataInterface } from '../../modules/dynamic-card/interfaces/extract-config.interface';
import { PublicCropMetadataService } from '../../service/public-crop-metadata.service';

/**
 * view card
 */
@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.scss']
})
export class ViewCardComponent implements OnInit {
  metadata: MetadataInterface[] = [];
  profileBtn: number[] = [];

  constructor(
    private metadataService: PublicCropMetadataService,
  ) {}

  ngOnInit(): void {
    this.metadataService.requestCompareMetadata().subscribe(
      (metadata) => {
        this.metadata = metadata['metadata'];
        console.log('metadata', this.metadata);
        JSON.parse(JSON.stringify(this.metadata)).shift().sectionView.map((d, index) => {
          this.profileBtn.push(index);
        });
        console.log('profileBtn', this.profileBtn);
      },
      (error) => {
        console.warn(error);
      },
      () => {
      }
    );
  }

  clearMetadata(index: number) {
    console.log('index', index);
    // this.profileBtn.splice(index, 1);
    // console.log('index', index);
    // console.log('metadata', this.metadata);
    const metadatas = [];
    console.log('metadata', this.metadata);
    // console.log('metadatas', metadatas);
    // this.metadata = metadatas;
  }
}
