import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../core/services/employeeService/employeeService';
import { ActivatedRoute } from '@angular/router';
import { NgSnippets } from '../ng-snippets/ng-snippets';

@Component({
  selector: 'app-employee',
  imports: [ NgSnippets],
  standalone: true,
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee implements OnInit {
  empData: any;
  dataFromParent:string = "Employee Data(parent)"
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
