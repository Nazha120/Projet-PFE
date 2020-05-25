import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AuthenticationService} from "./authentification.service";
import {Observable} from "rxjs";
import {IUser} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
   SERVER_URL: string  = "http://localhost:8080";
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  account(user: string) : Observable<IUser>{

    return this.http.get<IUser>(this.SERVER_URL + '/account/' + user);
  }
}
