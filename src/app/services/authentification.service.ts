import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IUser} from "../model/user.model";
import * as jwt_decode from 'jwt-decode';
import {IAccount} from "../model/account.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private host: any = 'http://localhost:8080';
  jwtToken = null;
  private roles: Array<any> = [];
  private currentAccount: IAccount;

  constructor(private http: HttpClient) {
  }

  login(user: IUser) {
    return this.http.post(this.host + '/login', user, {observe: 'response'});
  }

  register(user: IUser) {
    return this.http.post(this.host + '/register', user, {observe: 'response'});
  }

  public getCurrentAccountId(): string {
    return this.currentAccount.email;
  }

  public setCurrentAccount(account: IAccount): void {
    this.currentAccount = account;
  }

  public getCurrentAccout(): IAccount {
    return this.currentAccount;
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
      {Authorization: this.jwtToken}
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
      if (r.authority === 'ADMIN') {
        return true;
      }
    }
    return false;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) token = this.loadToken();
    if (!token) return true;

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }
}
