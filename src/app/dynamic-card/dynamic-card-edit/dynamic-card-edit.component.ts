import { Component, OnInit } from '@angular/core';

/**
 * dynamic card edit component
 */
@Component({
  selector: 'app-dynamic-card-edit',
  templateUrl: './dynamic-card-edit.component.html',
  styleUrls: ['./dynamic-card-edit.component.scss']
})
export class DynamicCardEditComponent implements OnInit {

  ngOnInit(): void {
    console.log('DynamicCardEditComponent');
  }

}
