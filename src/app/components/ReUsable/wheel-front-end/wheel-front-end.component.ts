import { Component, OnInit } from '@angular/core';
import { preInitWheel } from './wheel-front-end';

@Component({
  selector: 'app-wheel-front-end',
  templateUrl: './wheel-front-end.component.html',
  styleUrls: ['./wheel-front-end.component.css']
})
export class WheelFrontEndComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }  ngAfterViewInit() {
    preInitWheel();
  }

}
