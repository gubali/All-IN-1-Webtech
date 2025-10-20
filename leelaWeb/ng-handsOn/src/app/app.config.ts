import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import routeConfig from '../app.routes';
import { provideStore } from '@ngrx/store';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authInterceptor } from './core/interceptor/auth-interceptor';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appReducer } from './app-store/app.store';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routeConfig),
    provideStore(appReducer),
    // provideStore({ counter: counterReducer, posts:postReducer }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
      name: 'My Angular 20 App',
    }),
    provideHttpClient(withInterceptors([authInterceptor])),
    importProvidersFrom(ReactiveFormsModule, FormsModule),
  ],
};
