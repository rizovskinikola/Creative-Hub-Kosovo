import { Component, OnInit, AfterViewInit } from '@angular/core';
import { preInitWheel } from './wheel-graphic';

@Component({
  selector: 'app-wheel-graphic',
  templateUrl: './wheel-graphic.component.html',
  styleUrls: ['./wheel-graphic.component.css']
})
export class WheelGraphicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    preInitWheel();
  }
}
