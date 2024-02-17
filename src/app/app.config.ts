import { ApplicationConfig } from '@angular/core';
import { TitleStrategy, provideRouter, withViewTransitions } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
// import { TemplatePageTitleStrategy } from './template-page-title-strategy';

export const appConfig: ApplicationConfig = {
  providers: 
  [
    provideRouter(routes), 
    // { provide : TitleStrategy , useClass : TemplatePageTitleStrategy },
    provideClientHydration(), 
    provideHttpClient(withFetch()),
  ]
};
