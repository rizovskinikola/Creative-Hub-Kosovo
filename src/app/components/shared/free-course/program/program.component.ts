import {Component, Input, OnInit} from '@angular/core';

export interface Lecturer {
  name: string;
  description: string;
  background: string;
  image: string;
  imageMobile: string;
}

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  @Input() borderColor!: string
  @Input() mentorBg!: string
  @Input() circleBorderColor!: string
  @Input() programme!: string[];
  @Input() lecturer!: Lecturer;

  constructor() {
  }

  ngOnInit(): void {
  }

}
