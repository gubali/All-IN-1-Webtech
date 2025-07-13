import { Routes } from '@angular/router';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { canDeActivateGuard } from './gaurds/can-de-activate.guard';

export const routes: Routes = [
  {
    path: 'rxjs-exp',
    canDeactivate: [canDeActivateGuard],
    loadComponent:()=>import('./rxjs-demo/rxjs-demo.component').then(m=>m.RxjsDemoComponent)
  },
];
