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

  constructor(
    private fb: FormBuilder,
    private apiClientService: ApiClientService,
    private toastService: ToastService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.userForm = this.fb.group({
      id: [data.user.id],
      username: [data.user.username, Validators.required],
      email: [data.user.email, [Validators.required, Validators.email]],
      name: [data.user.name],
      phone: [data.user.phone],
      website: [data.user.website]
    });
  }

  save(): void {
    if (this.userForm.valid) {
      this.apiClientService.updateUser(this.userForm.value.id, this.userForm.value).subscribe(
        () => {
          this.toastService.open('User updated successfully');
          this.dialogRef.close(true);
        },
        error => {
          this.toastService.open('Failed to update user');
        }
      );
    }
  }

  delete(): void {
    this.apiClientService.deleteUser(this.userForm.value.id).subscribe(
      () => {
        this.toastService.open('User deleted successfully');
        this.dialogRef.close(true);
      },
      error => {
        this.toastService.open('Failed to delete user');
      }
    );
  }

  close(): void {
    this.dialogRef.close();
  }
}
