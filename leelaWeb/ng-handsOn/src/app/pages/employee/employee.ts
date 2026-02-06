import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../core/services/employeeService/employeeService';
import { ActivatedRoute } from '@angular/router';
import { NgSnippets } from '../ng-snippets/ng-snippets';

@Component({
  selector: 'app-employee',
  imports: [NgSnippets],
  standalone: true,
  templateUrl: './employee.html',
  styleUrl: './employee.css',
  providers: [Employee],
})
export class Employee implements OnInit {
  empData: any;
  dataFromParent: string = 'Employee Data(parent)';
  constructor(
    private _empService: EmployeeService,
    private _route: ActivatedRoute
  ) {
    this.empData = this._route.snapshot.data['empList'];
  }
  ngOnInit(): void {
    // this._empService.getEmployee().subscribe({
    //   next: (data: any) => {
    //     this.empData = data;
    //   },
    //   error: (err: any) => {
    //     console.log('HTTP Error', err);
    //   },
    //   complete: () => {
    //     console.log('Data is completed');
    //   },
    // });
  }
  ImChildMethod() {
    return 'im coming from Employee components';
  }
}
