import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImpfungListeComponent } from './impfung-liste/impfung-liste.component';
import { ImpfungListeItemComponent } from './impfung-liste-item/impfung-liste-item.component';
import { ImpfungDetailsComponent } from './impfung-details/impfung-details.component';

import { ImpfungStoreService } from './shared/impfung-store.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ImpfungFormComponent } from './impfung-form/impfung-form.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './shared/authentication.service';
import { TokenInterceptorService } from "./shared/token-interceptor.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { RegisterDetailsComponent } from './register-details/register-details.component';
import { SpinnersAngularModule } from "spinners-angular";

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule,
    HttpClientModule, ReactiveFormsModule, SpinnersAngularModule ],
  declarations: [ AppComponent, ImpfungListeComponent, ImpfungListeItemComponent, ImpfungDetailsComponent, HomeComponent, ImpfungFormComponent, LoginComponent, RegisterDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, ImpfungStoreService, AuthenticationService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }]
})
export class AppModule { }
