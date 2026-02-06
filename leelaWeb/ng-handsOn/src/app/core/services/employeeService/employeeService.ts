import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../../constant/Constants';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
}
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}
  onLogin(obj: any) {
    return this._http.post(
      `${environment.apiUrl}${Constant.MODULE_NAME.EMP}/${Constant.API_METHODS.EMP.LOGIN}`,
      obj
    );
  }
  getEmployee(): Observable<Product[]> {
    return this._http.get<Product[]>(`${environment.apiUrl}${Constant.MODULE_NAME.EMP}/${Constant.API_METHODS.EMP.GET_EMPLOYEES}`
    );
  }
}
