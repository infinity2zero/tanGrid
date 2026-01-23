/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { ROUTES } from './app/routes';

bootstrapApplication(AppComponent, {
	providers: [provideRouter(ROUTES, withHashLocation()), provideHttpClient()],
}).catch((err) => console.error(err));

