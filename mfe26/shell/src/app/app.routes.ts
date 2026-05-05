import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'product-details',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './ProductDetailsComponent',
      }).then((m) => m.ProductDetails),
  },
  {
    path: 'product-list',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './ProductsListComponent',
      }).then((m) => m.ProductList),
  },
  {
    path: '',
    redirectTo: 'product-list',
    pathMatch: 'full',
  },
];
