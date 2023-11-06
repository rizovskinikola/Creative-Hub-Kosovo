import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-steps-to-success',
  templateUrl: './steps-to-success.component.html',
  styleUrls: ['./steps-to-success.component.css']
})
export class StepsToSuccessComponent implements OnInit {
  @Input() firstStepText!: string;
  @Input() secondStepText!: string;
  @Input() thirdStepText!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
