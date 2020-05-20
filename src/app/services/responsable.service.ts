import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Responsable } from '../model/responsable.model';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

  public host: string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  public allResponsables() {
    return this.httpClient.get(this.host + '/allResponsables');
  }

  public getResponsables(mc: string, page: number, size: number) {
    return this.httpClient.get(this.host + '/getResponsables?mc=' + mc + '&page=' + page + '&size=' + size);
  }
  public getResponsable(id: number): Observable<Responsable> {
    return this.httpClient.get<Responsable>(this.host + '/getResponsable?id=' + id);
  }

  public deleteResponsable(id: number) {
    return this.httpClient.delete(this.host + '/deleteResponsable?id=' + id);
  }
  public addResponsable(responsable: Responsable): Observable<Responsable> {
    return this.httpClient.post<Responsable>(this.host + '/addResponsable', responsable);
  }

  public updateResponsable(responsable: Responsable): Observable<Responsable> {
    return this.httpClient.put<Responsable>(this.host + '/updateResponsable', responsable);
  }
}
