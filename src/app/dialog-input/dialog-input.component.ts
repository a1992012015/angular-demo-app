import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ShareAdminDialogComponent } from '../components/share-admin-dialog/share-admin-dialog.component';

@Component({
  selector: 'app-dialog-input',
  templateUrl: './dialog-input.component.html',
  styleUrls: ['./dialog-input.component.scss']
})
export class DialogInputComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.openShareDialog();
  }

  openShareDialog() {
    console.log('openShareDialog');
    const dialogRef = this.dialog.open(ShareAdminDialogComponent, {
      autoFocus: false,
      data: { apiData: 'section.apiData, textStyle: 1' },
      disableClose: true,
      panelClass: 'share-admin-dialog-container',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
