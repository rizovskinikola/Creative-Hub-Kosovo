import { Component, OnInit } from '@angular/core';
import { preInitWheel } from './wheel-digital';

@Component({
  selector: 'app-wheel-digital',
  templateUrl: './wheel-digital.component.html',
  styleUrls: ['./wheel-digital.component.css']
})
export class WheelDigitalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    preInitWheel();
  }
}
