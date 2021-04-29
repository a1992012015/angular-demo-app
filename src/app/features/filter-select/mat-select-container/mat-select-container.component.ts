import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectOptionInterface } from '../../../modules/dynamic-card/interfaces/dynamic-card.interface';

/**
 * mat select container
 */
@Component({
  selector: 'app-mat-select-container',
  templateUrl: './mat-select-container.component.html',
  styleUrls: ['./mat-select-container.component.scss']
})
export class MatSelectContainerComponent implements OnInit, OnChanges {
  @Input() filteredOptions: SelectOptionInterface[] = [];
  @Output() toggleOption = new EventEmitter<SelectOptionInterface[]>();

  filteredList: SelectOptionInterface[] = [];
  searchForm = new FormGroup({ value: new FormControl() });

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('filteredOptions', this.filteredOptions);
    this.filteredList = this.filteredOptions.slice();
  }

  toggleOptionEvent(option: SelectOptionInterface) {
    option.selected = !option.selected;
    const selectedOption = this.filteredList.filter((o) => o.selected);
    this.toggleOption.emit(selectedOption);
  }
}
