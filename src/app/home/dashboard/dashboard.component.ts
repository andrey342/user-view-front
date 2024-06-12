import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiClientService } from 'src/app/services/api-client.service';
import { DialogService } from 'src/app/services/dialog.service';

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
    private userDialogService: DialogService
  ) {
    this.loadUsers();
  }

  loadUsers(): void {
    this.apiClientService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  openUserDialog(user: any): void {
    const dialogRef = this.userDialogService.open(user);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadUsers();
      }
    });
  }
}


