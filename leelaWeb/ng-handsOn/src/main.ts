import {
  bootstrapApplication,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import routeConfig from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './app/store/reducers/couter.reducers';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { environment } from './environments/environment';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
bootstrapApplication(App, {
  providers: [
    importProvidersFrom(FormsModule),
    provideRouter(routeConfig),
    // provideClientHydration(withEventReplay()),
    ...appConfig.providers,
    // provideStore({ counter: counterReducer }),
    // provideStoreDevtools({
    //   maxAge: 25,
    //   //logOnly: environment.production,
    // }),
  ],
}).catch((err) => console.error(err));
