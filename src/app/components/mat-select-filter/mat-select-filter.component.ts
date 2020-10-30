import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { A, NINE, SPACE, Z, ZERO } from '@angular/cdk/keycodes';

/**
 * select Option
 */
export interface SelectOptionInterface {
  value: number | string;
  view: string;
  show: boolean;
}

@Component({
  selector: 'app-mat-select-filter',
  templateUrl: './mat-select-filter.component.html',
  styleUrls: ['./mat-select-filter.component.scss'],
})
export class MatSelectFilterComponent implements OnInit, OnDestroy {
  @ViewChild('input', { static: true }) input;
  @Input() set array(value: SelectOptionInterface[]) {
    if (!(value instanceof Array)) {
      this.arrayValue = [];
    } else {
      this.arrayValue = value.filter((v) => {
        return 'value' in v && 'view' in v && 'show' in v;
      });
    }
  }
  get array() {
    return this.arrayValue;
  }

  @Input() placeholder = '';
  @Input() displayMember = '';
  @Input() showSpinner = true;
  @Input() noResultsMessage = 'No results';
  @Output() filteredReturn = new EventEmitter<any>();

  noResults = false;
  localSpinner = false;

  public filteredItems: any = [];
  public searchForm: FormGroup;
  private arrayValue: SelectOptionInterface[] = [];

  constructor(fb: FormBuilder) {
    this.searchForm = fb.group({
      value: '',
    });
  }

  ngOnInit() {
    console.log('array', this.array);
    this.searchForm.valueChanges.subscribe(value => {
      console.log('value', value);
      if (this.showSpinner) {
        this.localSpinner = true;
      }
      if (value.value) {
        // IF THE DISPLAY MEMBER INPUT IS SET WE CHECK THE SPECIFIC PROPERTY

        this.filteredItems = this.array.map(item => {
          item.show = item[this.displayMember].toLowerCase().includes(value.value.toLowerCase());
          return item;
        });
        // NO RESULTS VALIDATION

        this.noResults = this.filteredItems == null || this.filteredItems.length === 0;

      } else {
        this.filteredItems = this.array.map(item => {
          item.show = true;
          return item;
        });
        this.noResults = false;
      }
      this.filteredReturn.emit(this.filteredItems);
      setTimeout(() => {
        if (this.showSpinner) {
          this.localSpinner = false;
        }
      }, 2000);
    });

    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 500);
    if (!this.placeholder) {
      this.placeholder = 'Search...';
    }
  }

  handleKeydown(event: KeyboardEvent) {
    // PREVENT PROPAGATION FOR ALL ALPHANUMERIC CHARACTERS IN ORDER TO AVOID SELECTION ISSUES
    if ((event.key && event.key.length === 1) ||
      (event.keyCode >= A && event.keyCode <= Z) ||
      (event.keyCode >= ZERO && event.keyCode <= NINE) ||
      (event.keyCode === SPACE)) {
      event.stopPropagation();
    }
  }

  ngOnDestroy() {
    this.filteredReturn.emit(this.array);
  }
}
