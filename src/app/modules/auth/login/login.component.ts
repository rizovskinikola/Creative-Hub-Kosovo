import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {RegisterComponent} from "../register/register.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private dialogRef: MatDialogRef<LoginComponent>, private dialog: MatDialog) {
  }

  closeModal() {
    this.dialogRef.close();
  }

  openRegisterModal() {
    this.dialogRef.close();
    this.dialog.open(RegisterComponent, {panelClass: 'register-modal'});
  }
}
