import { Component, Injectable, Self } from '@angular/core';
import {
  FormsModule,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../../core/models/Employee.model';
import { EmpNameAuth } from '../../core/services/auth/emp-name-auth';
import { EmployeeService } from '../../core/services/employeeService/employeeService';
import { MySelftInatnce } from '../../core/services/typeSelfInstance/my-selft-inatnce';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
  providers: [MySelftInatnce],
})
export class Login {
  constructor(
    private _route: Router,
    private _empService: EmployeeService,
    private _authService: EmpNameAuth,
    @Self() public mySelfService: MySelftInatnce
  ) {}

  //reactive form validation
  userLoginForm: FormGroup = new FormGroup({
    emailId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  //end
  loginObj?: LoginModel = new LoginModel();
  goToDashbaord() {
    console.log('Form Valid:', this.userLoginForm.valid);
    console.log('Form Value:', this.userLoginForm.value);
    console.log('Form Errors:', this.userLoginForm.errors);
    if (this.userLoginForm.invalid) {
      this.userLoginForm.markAllAsTouched();
      return;
    }
    // console.log(this.userLoginForm.invalid);
    // const obj = this.userLoginForm.value;
    else {
      this._empService.onLogin(this.userLoginForm.value).subscribe({
        next: (rslt: any) => {
          if (rslt.result) {
            let { password, employeeName, ...rest } = rslt.data;
            this._authService.setUserName(employeeName);
            this._route.navigate(['/home']);
            localStorage.setItem('loginUser', JSON.stringify(rest));
          }
        },
        error: () => {},
      });
    }
  }
}
