import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImpfungDetailsComponent} from "./impfung-details/impfung-details.component";
import { ImpfungFormComponent} from "./impfung-form/impfung-form.component";
import { ImpfungListeComponent} from "./impfung-liste/impfung-liste.component";
import { HomeComponent} from "./home/home.component";
import { LoginComponent } from "./login/login.component";

import { CanNavigateToAdminGuard } from './can-navigate-to-admin.guard';
import {RegisterDetailsComponent} from "./register-details/register-details.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'impfungen', component: ImpfungListeComponent },
  { path: 'register/:id', component: RegisterDetailsComponent },
  { path: 'impfungen/:id', component: ImpfungDetailsComponent },
  { path: 'admin', component: ImpfungFormComponent, canActivate:[CanNavigateToAdminGuard] },
  { path: 'admin/:id', component: ImpfungFormComponent },
  { path: 'login', component: LoginComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanNavigateToAdminGuard]
})
export class AppRoutingModule { }
