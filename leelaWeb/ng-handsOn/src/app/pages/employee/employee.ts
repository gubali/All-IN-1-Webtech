import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../core/services/employeeService/employeeService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  imports: [],
  standalone: true,
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee implements OnInit {
  empData: any;
  constructor(
    private _empService: EmployeeService,
    private _route: ActivatedRoute
  ) {
    this.empData = this._route.snapshot.data['empList'];
    console.log(this.empData.data);
  }
  ngOnInit(): void {
    // this._empService.getEmployee().subscribe({
    //   next: (data) => {
    //     this.empData = data;
    //   },
    //   error: (err) => {
    //     console.log('HTTP Error', err);
    //   },
    //   complete: () => {
    //     console.log('Data is completed');
    //   },
    // });
  }
}
