import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-what-you-learn',
  templateUrl: './what-you-learn.component.html',
  styleUrls: ['./what-you-learn.component.css']
})
export class WhatYouLearnComponent implements OnInit {
  @Input() text!: string;
  @Input() borderColor!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
