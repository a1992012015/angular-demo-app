import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

/**
 * people list interface
 */
interface PeopleListInterface {
  name: string;
  photo: string;
  email: string;
}

/**
 * share admin dialog
 */
@Component({
  selector: 'app-share-admin-dialog',
  templateUrl: './share-admin-dialog.component.html',
  styleUrls: ['./share-admin-dialog.component.scss'],
})
export class ShareAdminDialogComponent implements OnInit {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  addEmail = true;
  peopleList: PeopleListInterface[] = [];
  fruits: PeopleListInterface[] = [
    // { name: 'Jie', photo: '', email: 'jie@57blocks.com' },
    // { name: 'Jie', photo: '', email: 'jie@57blocks.com' },
    // { name: 'Jie', photo: '', email: 'jie@57blocks.com' },
  ];

  constructor(
    public dialogRef: MatDialogRef<ShareAdminDialogComponent>,
    // tslint:disable-next-line:ban-types
    @Inject(MAT_DIALOG_DATA) public data: Object,
  ) {
  }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close(1);
  }

  selectedPurview() {
    console.log('selectedPurview');
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.addEmail = false;
      const emailValue = value.trim();
      const re = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      const index = emailValue.indexOf('@');
      if (re.test(emailValue)) {
        this.fruits.push({ name: emailValue.slice(0, index), email: emailValue, photo: '' });
      } else {
        this.fruits.push({ name: emailValue.slice(0, index), email: emailValue, photo: 'warning' });
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: PeopleListInterface): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
      if (this.fruits.length <= 0) {
        this.addEmail = true;
      }
    }
  }
}
