import { ThrowStmt } from '@angular/compiler';
import { Component, VERSION } from '@angular/core';
import {AuthenticationService} from "./shared/authentication.service";

import { Impfung} from "./shared/impfung";


@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html'
})

export class AppComponent  {

  constructor (public authService : AuthenticationService) { }


  getLoginLabel() {
    return this.authService.isLoggedIn() ? "Logout" : "Login";
  }

}
