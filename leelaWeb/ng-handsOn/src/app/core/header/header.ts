import { Component } from '@angular/core';
import {RouterLink} from '@angular/router'
import { Observable } from 'rxjs';
import { EmpNameAuth } from '../services/auth/emp-name-auth';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [RouterLink, AsyncPipe],
  standalone:true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
userName$:Observable<string>;
constructor(private _authService:EmpNameAuth){
  this.userName$ = this._authService.userName$;
}
}
