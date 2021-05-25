import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';


interface Response {
  access_token: string;
  is_admin: boolean;
}

@Component({
  selector: 'bs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./style.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  correct: boolean;

  constructor(
      private fb: FormBuilder,
      private router: Router,
      private authService : AuthenticationService,
  ) {
    this.correct = true;
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }

  login() {
    const val = this.loginForm.value;
    const obj = this;

    if (val.username && val.password) {
      this.authService.login(val.username, val.password).subscribe(
          res => {
            let response = res as Response;
            this.authService.setLocalStorage(response.access_token,response.is_admin);
          },
        error => obj.correct = false);
    }
  }

  loginCorrect(){ // wenn der benutzer falsche daten eingibt
    return this.correct;
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    return this.authService.logout();
  }

}
