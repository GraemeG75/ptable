import { Component, OnInit, SimpleChanges, OnChanges, ViewChild } from '@angular/core';
import { CarService, Car } from '../car.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.less']
})
export class Test1Component implements OnInit {
  @ViewChild('turboTable', { static: false }) turboTable: any;
  cars: Car[];
  paging: number;
  constructor(private carService: CarService) { }

  ngOnInit(): void {

    const c = this.carService.getCars();
    this.paging = 50;
    const c2: Car[] = c;
    this.cars = c2.slice(0, 5);

    window.setTimeout(() => {
      for (let x = 0; x < 100; x++){
        this.cars.push(this.carService.getCars()[x]);
      }
      // uncomment this line to get the 
      // this.turboTable._totalRecords = 105;
    }, 1000);
  }
}
