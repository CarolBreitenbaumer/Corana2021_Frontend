import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

interface Token {
  exp: number;
  user: {
    id: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private api:string = 'https://corana21.s1710456003.student.kwmhgb.at/api/auth';

  constructor(private http: HttpClient) { }

  login (email: string, password: string) {
    return this.http.post(`${this.api}/login`, {
      email: email,
      password: password
    });
  }

  public setLocalStorage (token: string,isAdmin:boolean) {
    const decodedToken = jwt_decode(token) as Token;
    localStorage.setItem("token", token);
    localStorage.setItem("userId", decodedToken.user.id);
    localStorage.setItem("isAdmin", isAdmin.toString());
  }

  public getCurrentUserId() {
    return Number.parseInt(localStorage.getItem("id"));
  }

  public isAdmin() : boolean {
    return JSON.parse(localStorage.getItem("isAdmin")); // string -> boolean umwandeln
  }

  logout() {
    this.http.post(`${this.api}/logout`, {});
    localStorage.removeItem("token");
    localStorage.removeItem("id");
  }

  public IsLoggedAndAdmin(){
    return this.isLoggedIn() && this.isAdmin();
  }

  public IsLoggedAndNoAdmin(){
    return this.isLoggedIn() && !this.isAdmin();
  }

  public isLoggedIn() {

    if (localStorage.getItem("token")) {
      let token: string = localStorage.getItem("token");
      const decodedToken = jwt_decode(token) as Token;
      let expirationDate: Date = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp);
      if (expirationDate < new Date()) {
        console.log("token expired");
        localStorage.removeItem("token");
        return false;
      }
      return true;
    } else {
      return false;
    }

  }

  public isLoggedOut() {
    return !this.isLoggedIn();
  }

}
