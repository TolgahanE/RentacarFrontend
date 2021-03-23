import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail;
  // currentCarDetail: CarDetail;
  constructor(
    private carDetailService: CarDetailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetails(params['carId']);
      }
    });
  }

  getCarDetails(carId: number) {
    this.carDetailService.getCarDetails(carId).subscribe((response) => {
      this.carDetails = response.data;
      console.log(response);
    });
  }
  // setCurrentCarDetail(carDetail: CarDetail) {
  //   this.currentCarDetail = carDetail;
  // }

  // getCurrentCarDetailClass(carDetail: CarDetail) {
  //   if (carDetail == this.currentCarDetail) {
  //     return 'list-group-item active';
  //   } else {
  //     return 'list-group-item';
  //   }
  // }
}
