import { Component, OnInit } from '@angular/core';
import { parse } from './pb-parser';

import { MatMenuPanel } from '@angular/material/menu/menu-panel';

/**
 * select menu component
 */
@Component({
  selector: 'app-select-menu',
  templateUrl: './select-menu.component.html',
  styleUrls: ['./select-menu.component.scss']
})
export class SelectMenuComponent implements OnInit {
  metadata: unknown[] = [];

  ngOnInit(): void {
  }

  menuEvent(event: MouseEvent, menu: MatMenuPanel) {
    event.stopPropagation();
    console.log('event', event);
    menu.close.emit();
  }

  openFile(event: Event): void {
    const input = event.target as HTMLInputElement;

    const files = (input?.files || []);
    for (let i = 0; i < files.length; i++) {
      this.creatFiles(files[i]);
    }
  }

  creatFiles(files: File) {
    const reader = new FileReader();
    reader.onload = (() => {
      if (reader.result) {
        const output = parse(reader.result);
        console.log('output', output);
        this.metadata.push(output.data as unknown);

        console.log(JSON.stringify(this.metadata));
      }
    });

    reader.readAsText(files);
  }
}
