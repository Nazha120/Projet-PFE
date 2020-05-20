import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MetierService {

public host: string = "http://localhost:8080/metiers";

  constructor(private httpClient: HttpClient) { }

    public getMetiers() { 
    return this.httpClient.get(this.host);
  }
}
