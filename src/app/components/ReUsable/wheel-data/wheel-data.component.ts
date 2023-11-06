import { Component, OnInit } from '@angular/core';
import { preInitWheel } from './wheel-data';

@Component({
  selector: 'app-wheel-data',
  templateUrl: './wheel-data.component.html',
  styleUrls: ['./wheel-data.component.css']
})
export class WheelDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    preInitWheel();
  }

}
