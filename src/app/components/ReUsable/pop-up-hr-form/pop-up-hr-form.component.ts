import { Component, OnInit, AfterViewInit } from '@angular/core';
import { preInitPopUpForm } from './pop-up-hr-form';

@Component({
  selector: 'app-pop-up-hr-form',
  templateUrl: './pop-up-hr-form.component.html',
  styleUrls: ['./pop-up-hr-form.component.css']
})
export class PopUpHrFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    preInitPopUpForm();
  }
}
