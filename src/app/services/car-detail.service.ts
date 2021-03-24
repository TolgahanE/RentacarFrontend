import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail} from '../models/carDetail';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl = 'https://localhost:44342/api/';
  constructor(private httpClient: HttpClient) {}

  getCarDetails(carId:number): Observable<SingleResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getcardetails?id=" + carId;
    return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath);
  }
}
