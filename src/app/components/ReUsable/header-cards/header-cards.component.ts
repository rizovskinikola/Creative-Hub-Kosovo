import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-cards',
  templateUrl: './header-cards.component.html',
  styleUrls: ['./header-cards.component.css']
})
export class HeaderCardsComponent implements OnInit {

  @Input() borderGradient!: string;
  @Input() headerCardImage!: string;
  @Input() headerCardText!: string;
  @Input() innerBg!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
