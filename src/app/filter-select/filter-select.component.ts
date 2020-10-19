import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface OptionItem {
  name: string;
  show: boolean;
}

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent implements OnInit {
  custonDropdown = new FormControl();
  filterControl = new FormControl();
  filteredOptions: Observable<Array<OptionItem>>;
  optionItems: Array<OptionItem>;

  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato'
  ];

  ngOnInit() {
    this.optionItems = this.toppingList.map(item => {
      return {
        name: item,
        show: true
      };
    });
    this.filteredOptions = this.filterControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => {
        this.optionItems.forEach(option => {
          option.show = option.name.toLocaleLowerCase().includes(value.toLowerCase());
        });
        return this.optionItems;
      })
    );
  }

  onPanelClose() {
    this.filterControl.setValue('');
  }
}
