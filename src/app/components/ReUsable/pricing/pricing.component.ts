import { Component, OnInit, Input } from '@angular/core';
import { Pricing } from './pricing.model';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  @Input() arrayPricing!:  Array<Pricing>; 
  @Input() justAcademyInfo!: Array<string>;
  @Input() euCertifiedInfo!: Array<string>;
  @Input() fastTrackInfo!: Array<string>;
  @Input() mainBorderColor!: string;
  @Input() euCertifiedBg!: string;
  @Input() showFastTrack!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

