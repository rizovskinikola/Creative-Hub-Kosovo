import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  currentAcademy: string = "Just accademy";
  currentInstallments: any = 24;
  currentMonthPrice =  1499/ this.currentInstallments;
  currentAcademyPrice: any = "1199";
  
  arrayOfAccademy: Array<chooseAcademy> = [
    {name : "Just accademy", price: 1499 },
    {name : "EU Certfied", price: 1899 },
  ];
  arrayOfInstallments: Array<chooseInstallments> = [
    {month: 15},
    {month: 24},
    {month: 36}
  ];
 

  calcAcademy(academy:any){
    this.currentAcademy = academy.name;
    this.currentAcademyPrice = academy.price;
    this.currentMonthPrice = academy.price / this.currentInstallments
    
    }

    calcInstallment(installments:any){
        this.currentInstallments = installments.month;  
        this.currentMonthPrice = this.currentAcademyPrice/ this.currentInstallments

      

      }


  constructor() { }

  ngOnInit(): void {
  }

}

class chooseAcademy {
  constructor(
    public name?: string,
    public price?: number

  ){}
}
class chooseInstallments{
  constructor(
    public month?: any
  ){}
}
