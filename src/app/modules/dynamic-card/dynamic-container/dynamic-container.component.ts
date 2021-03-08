import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';

import { JumpListInterface } from '../interfaces/dynamic-card.interface';
import { MetadataInterface } from '../interfaces/extract-config.interface';
import { CardType } from '../interfaces/card-config.interface';
import { ProfileInterface } from '../../../dictionary/crop-type.dictionary';

/**
 * dynamic container
 */
@Component({
  selector: 'app-dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.scss']
})
export class DynamicContainerComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('scrollTo', { static: true }) scrollTo?: ElementRef;
  @ViewChild('scrollBtn', { static: true }) scrollBtn?: ElementRef;
  @ViewChild('content', { static: true }) content?: ElementRef;
  @Input() metadata: MetadataInterface[] = [];
  @Input() jumpMetadata: MetadataInterface[] = [];
  @Input() profile?: ProfileInterface;
  jumpList: JumpListInterface[] = [];
  selectIndex = -1;
  headerHeight = 0;
  dataCount = 0;

  private scrollEvent$ = this.scrollEvent.bind(this);

  ngOnInit() {
    this.scrollListener();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    this.initWorkFlow();
  }

  ngOnDestroy() {
    this.scrollTo.nativeElement.removeEventListener('scroll', this.scrollEvent$);
  }

  jumpPosition(jump: JumpListInterface, index: number) {
    if (!this.scrollTo || !jump.cardId) {
      return;
    }
    const nativeElement = this.scrollTo.nativeElement;
    const scrollElement = nativeElement.querySelectorAll(`#${jump.cardId}`)[0];
    if (nativeElement && scrollElement) {
      nativeElement.scrollTo({
        top: scrollElement.offsetTop - this.headerHeight,
        behavior: 'smooth'
      });
      this.selectIndex = index;
    }
  }

  private initWorkFlow() {
    console.log('initWorkFlow', this.metadata);
    this.metadata = [...this.metadata];
    this.getJumpList(this.metadata);
    this.getContentHeight();
    this.getDataCount();
  }

  private getContentHeight() {
    if (this.content) {
      this.headerHeight = this.content.nativeElement.offsetHeight;
    }
  }

  private getDataCount() {
    const firstMetadata = this.metadata.find((m) => m);
    if (firstMetadata && firstMetadata.sectionView.length > 1) {
      this.dataCount = firstMetadata.sectionView.length;
    }
  }

  private getJumpList(metadata: MetadataInterface[]) {
    this.jumpList = metadata.map((data, index) => {
      return {
        name: data.cardTitle.title,
        icon: data.cardTitle.icon,
        color: data.cardTitle.color,
        cardId: `${CardType[data.cardType]}-${index}`,
        active: index === 0
      };
    });
  }

  private scrollEvent(event) {
    const cardContainer = event.target.getElementsByTagName('app-dynamic-card');
    const scrollTop = event.target.scrollTop + this.headerHeight;
    const height: number[] = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < cardContainer.length; i++) {
      height.push(cardContainer[i].offsetTop);
    }
    const heightIndex = height.findIndex((hei, index) => {
      const nextHeight = height[index + 1] || 9999;
      return hei <= scrollTop && nextHeight > scrollTop;
    });
    this.changeJumpActive(heightIndex === -1 ? 0 : heightIndex);
  }

  private changeJumpActive(index: number) {
    if (this.scrollBtn) {
      const nativeElement = this.scrollBtn.nativeElement;
      if (nativeElement) {
        nativeElement.scroll({
          top: index * 68,
          behavior: 'smooth'
        });
      }
    }
  }

  private scrollListener() {
    this.scrollTo.nativeElement.addEventListener('scroll', this.scrollEvent$);
  }
}
