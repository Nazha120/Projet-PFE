import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entretien } from '../model/entretien.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EntretienService {

  public host: string = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { }

  public addEntretien(entretien: Entretien): Observable<Entretien> {
    return this.httpClient.post<Entretien>(this.host + '/addEntretien', entretien);
  }
  public getEntretiens(mc: string, page: number, size: number) {
    return this.httpClient.get(this.host + '/getEntretiens?mc=' + mc + '&page=' + page + '&size=' + size);
  }
  public getEntretien(id: number): Observable<Entretien> {
    return this.httpClient.get<Entretien>(this.host + '/getEntretien?id=' + id);
  }
  public deleteEntretien(id: number) {
    return this.httpClient.delete(this.host + '/deleteEntretien?id=' + id);  
  }
  public updateEntretien(entretien : Entretien): Observable<Entretien> {
    return this.httpClient.put<Entretien>(this.host + '/updateEntretien', entretien);
  }
}


