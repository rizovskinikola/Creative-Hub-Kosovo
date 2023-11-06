import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-environmental',
  templateUrl: './environmental.component.html',
  styleUrls: ['./environmental.component.css']
})
export class EnvironmentalComponent implements OnInit {

  constructor(
    private scroller: ViewportScroller
  ) {}

  ngOnInit(): void {
  }

  goToForm() {
    this.scroller.scrollToAnchor("cards");
  }

}
