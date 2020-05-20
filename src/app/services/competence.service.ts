import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

public host: string = "http://localhost:8080/competences";

  constructor(private httpClient: HttpClient) { }

    public getCompetences() { 
    return this.httpClient.get(this.host);
  }
}
