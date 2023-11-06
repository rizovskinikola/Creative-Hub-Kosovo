import {Component, Input, OnInit} from '@angular/core';

export interface AcademyInfo {
  weeks: string;
  hours: string;
}
export interface scrollTo
{
  href: string;
}

@Component({
  selector: 'app-sticky-card',
  templateUrl: './sticky-card.component.html',
  styleUrls: ['./sticky-card.component.css']
})
export class StickyCardComponent implements OnInit {
  @Input() courseImg!: string;
  @Input() borderColor!: string;
  @Input() innerBackgroundColor!: string;
  @Input() mainColor!: string;
  @Input() titleColor!: string;
  @Input() iconsColor!: string;
  @Input() academyInfo!: AcademyInfo;
  @Input() nextGroups!: string[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
