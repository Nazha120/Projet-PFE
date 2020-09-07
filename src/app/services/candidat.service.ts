import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidat } from '../model/candidat.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  public host: string = 'http://localhost:8080/api/candidates/';

  constructor(private httpClient: HttpClient) { }

  public allCandidats() {
    return this.httpClient.get(this.host);
  }

  public getCandidats(mc: string, page: number, size: number) {
    return this.httpClient.get(this.host + 'search' + '?mc=' + mc + '&page=' + page + '&size=' + size);
  }
  public getCandidat(id: number): Observable<Candidat> {
    return this.httpClient.get<Candidat>(this.host + id);
  }

  public deleteCandidat(id: number) {
    return this.httpClient.delete(this.host + id);
  }
  public addCandidat(candidat: Candidat): Observable<Candidat> {
    return this.httpClient.post<Candidat>(this.host, candidat);
  }

  public updateCandidat(candidat: Candidat): Observable<Candidat> {
    return this.httpClient.put<Candidat>(this.host, candidat);
  }
}
