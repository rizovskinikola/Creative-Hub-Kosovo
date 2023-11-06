import {AfterViewInit, Component, OnInit, Renderer2, Inject} from '@angular/core';
import {initGraphicDesignFreeCourseForm} from './graphic-design-free-course/free-course-form';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.css']
})
export class GraphicDesignComponent implements OnInit, AfterViewInit{
  currentAcademy: string = "Just accademy";
  currentInstallments: any = 24;
  currentMonthPrice = 1099 / this.currentInstallments;
  currentAcademyPrice: any = "1099";

  arrayOfAccademy: Array<chooseAcademy> = [
    {name: "Just accademy", price: 1099},
    {name: "EU Certfied", price: 1699},
    {name: "Fast Track", price: 3099},
  ];
  arrayOfInstallments: Array<chooseInstallments> = [
    {month: 15},
    {month: 24},
    {month: 36}
  ];


  calcAcademy(academy: any) {
    this.currentAcademy = academy.name;
    this.currentAcademyPrice = academy.price;
    this.currentMonthPrice = academy.price / this.currentInstallments
  }

  calcInstallment(installments: any) {
    this.currentInstallments = installments.month;
    this.currentMonthPrice = this.currentAcademyPrice / this.currentInstallments
  }
  formTitle: string = 'DESIGN & CONTENT CREATION ACADEMY';

  firstRowStudentProjects = [{
    text: 'Magazine cover',
    img: 'assets/graphic-design/projects/magazine_cover.png'
  }, {
    text: 'Packaging design',
    img: 'assets/graphic-design/projects/packaging_design.png'
  }, {
    text: 'Digital portrait',
    img: 'assets/graphic-design/projects/digital_portrait.png'
  }, {
    text: 'Illustration',
    img: 'assets/graphic-design/projects/illustration.png'
  }, {
    text: 'Packaging design',
    img: 'assets/graphic-design/projects/packaging_design_2.png'
  }, {
    text: 'Trifold brochure',
    img: 'assets/graphic-design/projects/trifold_brochure.png'
  }, {
    text: 'Photomanipulation',
    img: 'assets/graphic-design/projects/photo_manipulation.png'
  }]

  secondRowStudentProjects = [{
    text: 'Poster design',
    img: 'assets/graphic-design/projects/poster_design.png'
  }, {
    text: 'Packaging design',
    img: 'assets/graphic-design/projects/packaging_design_3.png'
  }, {
    text: 'Book-cover design',
    img: 'assets/graphic-design/projects/book_cover.png'
  }, {
    text: 'Packaging design',
    img: 'assets/graphic-design/projects/packaging_design_4.png'
  }, {
    text: 'Illustration',
    img: 'assets/graphic-design/projects/illustration_2.png'
  }, {
    text: 'Packaging design',
    img: 'assets/graphic-design/projects/packaging_design_5.png'
  }, {
    text: 'Font design',
    img: 'assets/graphic-design/projects/font_design.png'
  }]

  thirdRowStudentProjects = [{
    text: 'Label design',
    img: 'assets/graphic-design/projects/label_design.png'
  }, {
    text: 'Brochure design',
    img: 'assets/graphic-design/projects/brochure_design.png'
  }, {
    text: 'iStock images',
    img: 'assets/graphic-design/projects/istock_images.png'
  }, {
    text: 'Packaging design',
    img: 'assets/graphic-design/projects/packaging_design_6.png'
  }, {
    text: 'Photomanipulation',
    img: 'assets/graphic-design/projects/photo_manipulation_2.png'
  }, {
    text: 'Packaging design',
    img: 'assets/graphic-design/projects/packaging_design_7.png'
  }, {
    text: 'Font design',
    img: 'assets/graphic-design/projects/font_design_2.png'
  }]
  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document : Document
  ) {}

  ngOnInit() {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://akoskarova.activehosted.com/f/embed.php?id=211';
    s.text = ``;
    this.renderer2.appendChild(this._document.body, s);
 }

  ngAfterViewInit() {
    initGraphicDesignFreeCourseForm();
  }
}
class chooseAcademy {
  constructor(
    public name?: string,
    public price?: number
  ) {
  }
}

class chooseInstallments {
  constructor(
    public month?: any
  ) {
  }
}