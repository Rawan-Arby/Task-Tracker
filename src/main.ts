import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideHttpClient } from '@angular/common/http';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'
bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
});
// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));
