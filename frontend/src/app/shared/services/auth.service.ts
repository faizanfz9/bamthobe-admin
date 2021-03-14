import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { JwtHelperService } from '@auth0/angular-jwt';

const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.baseUrl + "users";

  constructor(private http: HttpClient) { }

  login(user: any) {
    return this.http.post(this.url + "/login", user);
  }

  isAuthenticated() {
    const token = localStorage.getItem('token');
    return !jwtHelper.isTokenExpired(token);
  }

}
