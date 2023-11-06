import { Component } from '@angular/core';
import * as AOS from 'aos'; 




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CreativeHubKos';
  toState = 'state1';

  changeState(state:  any){
    this.toState = state;
  }

  ngOnInit(){
    AOS.init();
    }
    onRouterActivate(ev: Event): void {
      document.body.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
}
