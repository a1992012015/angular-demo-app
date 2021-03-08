import { Component, Input, OnInit } from '@angular/core';

import { SectionTitleInterface } from '../../interfaces/card-config.interface';

/**
 * section title
 */
@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent implements OnInit {
  @Input() title: SectionTitleInterface = { title: '' };

  ngOnInit(): void {
    console.log('title', this.title);
  }
}
