import { Component, OnInit } from '@angular/core';
import { SearchSeedService } from '../services/search-seed.service';

interface MagikarpElement {
  count: number;
  genetic: string;
  character: string;
  value: number;
}

@Component({
  selector: 'app-magikarp-code',
  templateUrl: './magikarp-code.component.html',
  styleUrls: ['./magikarp-code.component.scss'],
})
export class MagikarpCodeComponent implements OnInit {
  displayedColumns: string[] = ['count', 'genetic', 'character', 'value'];
  dataSource: MagikarpElement[] = [];
  completion = 0;
  tsv = 2884;
  parents = {
    father: '认真',
    mother: '慢吞吞',
  };
  initNumber = [
    1,
    0,
    1,
    1,
    0,
    1,
    0,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    0,
    0, // 后一位可能少了一个0
    1,
    0,
    1,
    0,
    0,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    1,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    1,
    1,
  ];
  randomNumber: Array<{ seed: string; value: string[] }> = [];

  constructor(private searchSeedService: SearchSeedService) {
  }

  ngOnInit() {
    const seedValue = [...this.initNumber];

    this.dataSource = seedValue.map((item, index) => {
      return {
        count: index + 1,
        genetic: item ? '母' : '父',
        character: item ? this.parents.mother : this.parents.father,
        value: item,
      };
    });

    this.completion = seedValue.length / 130;

    for (let i = 0; i <= seedValue.length - 127; i++) {
      const seed = seedValue.slice(i, 127 + i).join('');
      this.randomNumber[i] = {
        seed,
        value: this.searchSeedService.search(seed),
      };
    }
  }
}
