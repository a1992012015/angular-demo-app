import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { SelectOptionInterface } from '../../../interface/select.interface';

/**
 * mat select filter
 */
@Component({
  selector: 'app-mat-select-filter',
  templateUrl: './mat-select-filter.component.html',
  styleUrls: ['./mat-select-filter.component.scss']
})
export class MatSelectFilterComponent implements OnInit, OnDestroy {
  @ViewChild('input', { static: true }) input: ElementRef;
  @Input() searchForm = new FormGroup({ value: new FormControl() });
  @Input() array: SelectOptionInterface[];
  @Input() displayMember: string;
  @Input() showSpinner = true;
  @Output() filteredReturn = new EventEmitter<SelectOptionInterface[]>();
  noResults = false;
  localSpinner = false;
  filteredItems: SelectOptionInterface[] = [];

  ngOnInit() {
    this.searchForm.valueChanges.subscribe((value) => {
      if (this.showSpinner) {
        this.localSpinner = true;
      }
      if (value.value) {
        this.filteredItems = this.array.map((item) => {
          item.show = item[this.displayMember].toLowerCase().includes(value.value.toLowerCase());
          return item;
        });
      } else {
        this.filteredItems = this.array.map((item) => {
          item.show = true;
          return item;
        });
      }
      this.noResults = this.filteredItems.every((item) => !item.show);
      this.filteredReturn.emit(this.filteredItems);
      setTimeout(() => {
        if (this.showSpinner) {
          this.localSpinner = false;
        }
      }, 1000);
    });

    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 500);
  }

  handleKeydown(event: KeyboardEvent) {
    // PREVENT PROPAGATION FOR ALL ALPHANUMERIC CHARACTERS IN ORDER TO AVOID SELECTION ISSUES
    const wordsPattern = /^[\da-z\s]{1}$/i;
    if (event.key && wordsPattern.test(event.key)) {
      event.stopPropagation();
    }
  }

  ngOnDestroy() {
    this.filteredReturn.emit(this.array);
  }
}
