import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Constant } from '../../constant/Constants';

@Injectable({
  providedIn: 'root'
})
export class ProductServices {
  constructor(private _http:HttpClient){}

  getProduct(){
    return this._http.get(`${environment.productApiUrl}${Constant.PRODUCTS.GET_ALL_PRODUCTS}`);
  }
}
