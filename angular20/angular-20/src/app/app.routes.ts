import { Routes } from '@angular/router';
import { RxjsOperator } from './rxjs-component/rxjs-operator/rxjs-operator';
import { ObservableExp } from './observable/observable-exp/observable-exp';

export const routes: Routes = [
  { path: 'rxjs', component: RxjsOperator },
  { path: 'observable', component: ObservableExp },
  { path: '', redirectTo: 'rxjs', pathMatch: 'full' },
];
