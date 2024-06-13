import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiClientService } from 'src/app/services/api-client.service';
import { CustomToastComponent } from '../custom-toast/custom-toast.component';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  userForm: FormGroup;
  columns: string[] = [];
  addressColumns: string[] = ['street', 'suite', 'city', 'zipcode'];
  geoColumns: string[] = ['lat', 'lng'];
  companyColumns: string[] = ['name', 'catchPhrase', 'bs'];

  constructor(
    private fb: FormBuilder,
    private apiClientService: ApiClientService,
    private toastService: ToastService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.userForm = this.fb.group({
      id: [{ value: data.user.id, disabled: true }],
      username: [{ value: data.user.username, disabled: true }],
      email: [{ value: data.user.email, disabled: true }],
      name: [data.user.name, Validators.nullValidator],
      phone: [{ value: data.user.phone, disabled: true }],
      website: [{ value: data.user.website, disabled: true }]
    });

    // Define columns for related data tables
    this.columns = ['address', 'company', 'geo'];
  }

  save(): void {
    if (this.userForm.valid) {
      const updatedUser = { ...this.data.user, name: this.userForm.get('name')?.value };
      this.apiClientService.updateUser(updatedUser.id, updatedUser).subscribe(
        () => {
          this.toastService.open('Usuario actualizado correctamente.');
          this.dialogRef.close(true);
        },
        error => {
          this.toastService.open('Error al actualizar el usuario.');
        }
      );
    }
  }

  delete(): void {
    this.apiClientService.deleteUser(this.data.user.id).subscribe(
      () => {
        this.toastService.open('Usuario borrado correctamente.');
        this.dialogRef.close(true);
      },
      error => {
        this.toastService.open('Error al borrar el usuario.');
      }
    );
  }

  close(): void {
    this.dialogRef.close();
  }
}
