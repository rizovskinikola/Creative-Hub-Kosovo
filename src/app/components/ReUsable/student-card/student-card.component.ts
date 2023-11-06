import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {
  @Input() studentText!: string;
  @Input() studentImg!: string;
  @Input() studentName!: string;
  @Input() academyName!: string;

  
  constructor() { }

  ngOnInit(): void {
  }

}
