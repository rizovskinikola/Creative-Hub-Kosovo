import { Component, OnInit, AfterViewInit } from '@angular/core';
import { preInitPopUpForm } from './graphic-pop-up';

@Component({
  selector: 'app-graphic-pop-up',
  templateUrl: './graphic-pop-up.component.html',
  styleUrls: ['./graphic-pop-up.component.css']
})
export class GraphicPopUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    preInitPopUpForm();
  }
}
