import { Component, OnInit } from '@angular/core';

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
    father: '天真',
    mother: '温和',
  };
  randomNumber: number[][] = [
    [
      0,
      0,
      1,
      0,
      1,
      0,
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
      0,
      0,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      0,
      0,
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
      1,
      0,
      1,
      0,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      0,
      1,
      0,
      1,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      1,
    ],
  ];

  constructor() {
  }

  ngOnInit() {
    const seedValue = [...this.randomNumber[0]];

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
      this.randomNumber[i] = seedValue.slice(-127 - i, seedValue.length - i);
    }

    this.randomNumber.reverse();
  }

}
