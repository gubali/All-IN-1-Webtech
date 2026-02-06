import { Routes } from '@angular/router';
import { NgrxExp } from './app/pages/ngrx-exp/ngrx-exp';
import { Login } from './app/pages/login/login';
import { Layout } from './app/core/layout/layout';
import { Home } from './app/pages/home/home';
import { Getuser } from './app/core/services/resolver/getuser';
import { SignalExp } from './app/pages/signal-exp/signal-exp';
import { RxjsOperator } from './app/pages/rxjs-operator/rxjs-operator';
import { NgSnippets } from './app/pages/ng-snippets/ng-snippets';
import { FormExample } from './app/pages/form-example/form-example';
import { DataSharing } from './app/data-sharing/data-sharing';
import { DebounceExp } from './app/pages/debounce-exp/debounce-exp';
import { PostData } from './app/pages/post/post-list/post-list';
import { AddPost } from './app/pages/post/add-post/add-post';
import { EditPost } from './app/pages/post/edit-post/edit-post';
const routeConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      {
        path: 'ngrx',
        component: NgrxExp,
        children: [{ path: 'edit/:id', component: EditPost }],
      },
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
      { path: 'dataSharing', component: DataSharing },
      { path: 'deBounce', component: DebounceExp },
      {
        path: 'ngCodingTest',
        loadChildren: () =>
          import('./app/pages/ng-machien-test/ng-machine-test.routes').then(
            (m) => m.NgMachineTestRoute
          ),
      },
    ],
  },
  { path: '**', redirectTo: 'login' },
];

export default routeConfig;
