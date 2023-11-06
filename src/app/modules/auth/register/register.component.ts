import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import {registerModel} from "../../../components/navbar/navbar.model";
import {takeUntil} from "rxjs/operators";
import {NavbarService} from "../../../components/navbar/navbar.service";
import {LoginComponent} from "../login/login.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm!: FormGroup;
  submitted = false;
  private _unsubscribeAll: Subject<void> = new Subject<void>();
  loginForm: registerModel = new registerModel();

  constructor(private fb: FormBuilder,
              private _navbarService: NavbarService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<RegisterComponent>) {
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      txtName: ['', Validators.required],
      txtEmail: ['', [Validators.required, Validators.email]],
      txtMobile: ['', [Validators.required, Validators.minLength(5)]],
      txtPassword: ['', [Validators.required, Validators.minLength(6)]],
      txtPasswordConfirm: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  openLoginModal() {
    this.dialogRef.close();
    this.dialog.open(LoginComponent, {panelClass: 'login-modal'});
  }

  get getform() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // this.loginForm.name = this.userForm.get('txtName')?.value ;
    this.loginForm.name = 'Blagojce Vojneski';
    // this.loginForm.email = this.userForm.get('txtEmail')?.value ;
    this.loginForm.email = 'blagojcevojneski@gmail.com';
    // this.loginForm.phone_number = this.userForm.get('txtMobile')?.value;
    this.loginForm.phone_number = '012345678';
    // this.loginForm.password = this.userForm.get('txtPassword')?.value
    this.loginForm.password = 'test1234';
    // this.loginForm.confirm_password = this.userForm.get('txtPasswordConfirm')?.value
    this.loginForm.confirm_password = 'test1234';
    this._navbarService.register(this.loginForm).pipe(takeUntil(this._unsubscribeAll)).subscribe(
      (data: any) => {
        console.log('data', data);
      }
    )
    if (!this.userForm.valid) {
      return;
    }
    alert('SUCCESS' + JSON.stringify(this.userForm.value));
  }
}
