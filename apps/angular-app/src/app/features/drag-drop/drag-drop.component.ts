import { CdkDragEnter, CdkDropList, DragRef, moveItemInArray } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'angular-demo-app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements AfterViewInit {
  @ViewChild(CdkDropList) placeholder?: CdkDropList;

  private targetIndex: number = 0;
  private sourceIndex: number = 0;
  private dragRef: DragRef | null = null;
  private target: CdkDropList | null = null;
  private source: CdkDropList | null = null;

  items: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  ngAfterViewInit() {
    const placeholderElement = this.placeholder?.element?.nativeElement;
    console.log('placeholder', this.placeholder);
    console.log('placeholderElement', placeholderElement);
    if (placeholderElement) {
      placeholderElement.style.display = 'none';

      console.log('placeholderElement', placeholderElement.parentElement);
      placeholderElement.parentNode?.removeChild(placeholderElement);
    }
  }

  onDropListDropped(): void {
    console.log('%c<-- onDropListDropped start -->', 'color: red;');
    if (!this.target) {
      return;
    }

    const placeholderElement: HTMLElement | undefined = this.placeholder?.element?.nativeElement;
    console.log('placeholderElement', placeholderElement);
    const placeholderParentElement: HTMLElement | undefined | null = placeholderElement?.parentElement;
    console.log('placeholderParentElement', placeholderParentElement);
    if (placeholderElement) {
      placeholderElement.style.display = 'none';

      placeholderParentElement?.removeChild(placeholderElement);
      placeholderParentElement?.appendChild(placeholderElement);
    }
    placeholderParentElement?.insertBefore(
      this.source?.element?.nativeElement as HTMLElement,
      placeholderParentElement.children[this.sourceIndex]
    );

    if (this.placeholder?._dropListRef.isDragging()) {
      this.placeholder._dropListRef.exit(this.dragRef as DragRef);
    }

    this.target = null;
    this.source = null;
    this.dragRef = null;

    if (this.sourceIndex !== this.targetIndex) {
      moveItemInArray(this.items, this.sourceIndex, this.targetIndex);
    }
  }

  onDropListEntered({ item, container }: CdkDragEnter): void {
    console.log('%c<-- onDropListEntered start -->', 'color: blue;');
    console.log('placeholder', this.placeholder);
    console.log('onDropListEntered item', item);
    console.log('onDropListEntered container', container);
    console.log('container', container == this.placeholder);
    if (container == this.placeholder) {
      return;
    }

    const placeholderElement: HTMLElement | undefined = this.placeholder?.element?.nativeElement;
    const sourceElement: HTMLElement = item.dropContainer.element.nativeElement;
    const dropElement: HTMLElement = container.element.nativeElement;
    const dragIndex: number = Array.prototype.indexOf.call(
      dropElement?.parentElement?.children,
      this.source ? placeholderElement : sourceElement
    );
    const dropIndex: number = Array.prototype.indexOf.call(
      dropElement?.parentElement?.children,
      dropElement
    );

    if (!this.source) {
      this.sourceIndex = dragIndex;
      this.source = item.dropContainer;
      console.log('placeholderElement', placeholderElement);

      sourceElement.parentElement?.removeChild(sourceElement);
    }

    this.targetIndex = dropIndex;
    this.target = container;
    this.dragRef = item._dragRef;

    if (placeholderElement?.style) {
      placeholderElement.style.display = '';
    }

    dropElement.parentElement?.insertBefore(
      placeholderElement as Node,
      dropIndex > dragIndex ? dropElement.nextSibling : dropElement
    );

    this.placeholder?._dropListRef.enter(
      item._dragRef,
      item.element.nativeElement.offsetLeft,
      item.element.nativeElement.offsetTop
    );
  }
}
