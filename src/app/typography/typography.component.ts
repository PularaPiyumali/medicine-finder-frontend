import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  medicinename: string = '';
  medicinedescription: string = '';
  medicineprice: number = 0;
  medicinequantity: number = 0;

  constructor() { }

  ngOnInit() {

  }

  add(){}

  update(){}

}
