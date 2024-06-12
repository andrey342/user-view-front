import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiClientService } from 'src/app/services/api-client.service';
import { DialogComponent } from '../custom-components/dialog/dialog.component';
import { CustomToastComponent } from '../custom-components/custom-toast/custom-toast.component';
import { ActionDialogComponent } from '../custom-components/action-dialog/action-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  columns: string[] = ['username', 'email', 'name', 'phone', 'website'];
  users: any[] = [];

  constructor(
    private apiClientService: ApiClientService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.loadUsers();
  }

  loadUsers(): void {
    this.apiClientService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  openUserDialog(user: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: { user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.openFromComponent(CustomToastComponent, {
          data: { message: 'Operation successful' },
          duration: 2000
        });
      }
    });
  }

  confirmDeleteUser(user: any): void {
    const dialogRef = this.dialog.open(ActionDialogComponent, {
      width: '300px',
      data: { message: 'Are you sure you want to delete this user?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiClientService.deleteUser(user.id).subscribe(() => {
          this.snackBar.openFromComponent(CustomToastComponent, {
            data: { message: 'User deleted successfully' },
            duration: 2000
          });
          this.loadUsers();
        });
      }
    });
  }
}
