import { Component, OnInit, AfterViewInit } from '@angular/core';
import { preInitPopUpForm } from './pop-up-code-camp';
@Component({
  selector: 'app-pop-up-code-camp',
  templateUrl: './pop-up-code-camp.component.html',
  styleUrls: ['./pop-up-code-camp.component.css']
})
export class PopUpCodeCampComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    preInitPopUpForm();
  }
}
