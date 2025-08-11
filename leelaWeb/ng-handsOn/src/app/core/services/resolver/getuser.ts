import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employeeService/employeeService';

@Injectable({
  providedIn: 'root',
})
export class Getuser implements Resolve<any> {
  constructor(private _empService: EmployeeService) {}
  resolve(): Observable<any> {
    debugger;
    return this._empService.getEmployee()
  }
}
