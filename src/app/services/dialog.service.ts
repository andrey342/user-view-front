import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../home/custom-components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {}

  open(user: any): MatDialogRef<DialogComponent> {
    return this.dialog.open(DialogComponent, {
      width: '1000px',
      data: { user }
    });
  }
}
