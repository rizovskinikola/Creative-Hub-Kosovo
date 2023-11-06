import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-free-program-for',
  templateUrl: './free-program-for.component.html',
  styleUrls: ['./free-program-for.component.css']
})
export class FreeProgramForComponent {
  @Input() borderColor!: string;
}
