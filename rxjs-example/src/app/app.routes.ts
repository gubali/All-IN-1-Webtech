import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((x) => x.HomeComponent),
    pathMatch: 'full',
  },
  {
    path: 'rxjs',
    loadComponent: () =>
      import('./rxjs-tutorial/rxjs-tutorial.component').then(
        (x) => x.RxjsTutorialComponent
      ),
    pathMatch: 'full',
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
