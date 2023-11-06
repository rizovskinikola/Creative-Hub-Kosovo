import {AfterViewInit, Component, Input} from '@angular/core';
import {preInitCalendly} from 'src/assets/js/calendly';

@Component({
  selector: 'app-calendly',
  templateUrl: './calendly.component.html',
  styleUrls: ['./calendly.component.css']
})
export class CalendlyComponent implements AfterViewInit {
  @Input() runInitFunction: boolean = true;

  ngAfterViewInit() {
    preInitCalendly()
  }
}
