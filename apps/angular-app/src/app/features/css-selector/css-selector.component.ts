import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-demo-app-css-selector',
  templateUrl: './css-selector.component.html',
  styleUrls: ['./css-selector.component.scss']
})
export class CssSelectorComponent implements OnInit {
  ngOnInit(): void {
    console.log('CssSelectorComponent')
  }
}
