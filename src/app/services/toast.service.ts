import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomToastComponent } from '../home/custom-components/custom-toast/custom-toast.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private snackBar: MatSnackBar) {}

  open(message: string): void {
    this.snackBar.openFromComponent(CustomToastComponent, {
      data: { message },
      duration: 2000
    });
  }
}
