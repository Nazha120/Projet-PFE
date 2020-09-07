import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {IAccount} from "../model/account.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  SERVER_URL: string = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  account(user: string): Observable<HttpResponse<IAccount>> {

    return this.http.get<IAccount>(this.SERVER_URL + '/api/account/' + user, {observe: 'response'});
  }
}
