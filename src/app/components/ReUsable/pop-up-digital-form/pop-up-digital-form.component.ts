import { Component, OnInit, AfterViewInit } from '@angular/core';
import { preInitPopUpForm } from './pop-up-digital';
@Component({
  selector: 'app-pop-up-digital-form',
  templateUrl: './pop-up-digital-form.component.html',
  styleUrls: ['./pop-up-digital-form.component.css']
})
export class PopUpDigitalFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    preInitPopUpForm();
  }
}
