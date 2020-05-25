import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {IUser} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private host: any = 'http://localhost:8080';
  jwtToken = null;
  private roles: Array<any> = [];
  constructor(private http: HttpClient) { }

  login(user: IUser) {
    return this.http.post(this.host + '/login', user, { observe: 'response' });
  }

  loadToken(): string {
    this.jwtToken = localStorage.getItem('jwtToken')
    return this.jwtToken;
  }
  getCandidats() {
    if (this.jwtToken == null) {
      this.loadToken();
    }
    const headers: HttpHeaders = new HttpHeaders(
      { Authorization: this.jwtToken }
    );
    return this.http.get(this.host + '/candidats', { headers });
  }
  saveToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }
  logout() {
    this.jwtToken = null;
    localStorage.removeItem('jwtToken');
  }
  isAdmin() {
    for (const r of this.roles) {
      if (r.authority === 'ADMIN') { return true; }
    }
    return false;
  }
}
