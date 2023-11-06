import {Component, ElementRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "../../modules/auth/login/login.component";
import {RegisterComponent} from "../../modules/auth/register/register.component";
import {Router} from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('mainMobileMenu') mainMobileMenu!: ElementRef;

  constructor(private dialog: MatDialog, private router: Router) {
  }

  openLoginModal() {
    this.dialog.open(LoginComponent, {panelClass: 'login-modal'});
  }

  openRegisterModal() {
    this.dialog.open(RegisterComponent, {panelClass: 'register-modal'});
  }

  openNav() {
    this.mainMobileMenu.nativeElement.style.height = "100vh";
  }

  goHome() {
    this.router.navigate([''])
  }

  closeNav() {
    this.mainMobileMenu.nativeElement.style.height = "0";
    this.closeMenuById('academiesMenu')
    this.closeMenuById('careersMenu')
    this.closeMenuById('campusMenu')
  }

  closeMenuById(id: string) {
    const menuEl = document.getElementById(id);
    if (menuEl) {
      menuEl.style.width = '0';
    }
  }

  openMenuById(id: string) {
    const menuEl = document.getElementById(id);
    if (menuEl) {
      menuEl.style.width = '100%';
    }
  }
}

