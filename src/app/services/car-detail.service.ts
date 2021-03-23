import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail} from '../models/carDetail';
import { oneDataResponseModel } from '../models/oneDataResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl = 'https://localhost:44342/api/';
  constructor(private httpClient: HttpClient) {}

  getCarDetails(carId:number): Observable<oneDataResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getcardetails?id=" + carId;
    return this.httpClient.get<oneDataResponseModel<CarDetail>>(newPath);
  }
}
