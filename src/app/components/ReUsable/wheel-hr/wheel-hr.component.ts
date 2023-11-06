import { Component, OnInit } from '@angular/core';
import { preInitWheel } from './wheel-hr';

@Component({
  selector: 'app-wheel-hr',
  templateUrl: './wheel-hr.component.html',
  styleUrls: ['./wheel-hr.component.css']
})
export class WheelHrComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    preInitWheel();
  }
}
