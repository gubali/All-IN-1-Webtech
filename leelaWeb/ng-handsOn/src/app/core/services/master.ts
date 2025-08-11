import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Constant } from '../constant/Constants';

@Injectable({
  providedIn: 'root',
})
export class Master {
  constructor(private _http: HttpClient) {}

  getAllCars() {
    this._http.get(environment.apiUrl + Constant.MODULE_NAME.CAR + Constant.API_METHODS.CAR_RENTAL.GET_ALL_CARS);
  }
}
