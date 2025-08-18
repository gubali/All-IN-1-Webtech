import { Routes } from '@angular/router';
import { NgrxExp } from './app/shared/ngrx-exp/ngrx-exp';
import { Login } from './app/pages/login/login';
import { Counter } from './app/pages/counter/counter/counter';
import { Layout } from './app/core/layout/layout';
import { Home } from './app/pages/home/home';
import { Getuser } from './app/core/services/resolver/getuser';
import { SignalExp } from './app/pages/signal-exp/signal-exp';
import { RxjsOperator } from './app/pages/rxjs-operator/rxjs-operator';
import { NgSnippets } from './app/pages/ng-snippets/ng-snippets';
import { FormExample } from './app/pages/form-example/form-example';
const routeConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'ngrx', component: NgrxExp },
      { path: 'counter', component: Counter },
      { path: 'signal', component: SignalExp },
      {
        path: 'emp',
        loadComponent: () =>
          import('./app/pages/employee/employee').then((m) => m.Employee),
        resolve: {
          empList: Getuser,
        },
      },
      { path: 'rxjs', component: RxjsOperator },
       { path: 'snippet', component: NgSnippets },
        { path: 'ngform', component: FormExample },
    ],
  },
  { path: '**', redirectTo: 'login' },
];

export default routeConfig;
