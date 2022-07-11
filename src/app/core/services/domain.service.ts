import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'any',
})
export class DomainService {
  constructor(private http: HttpClient) {}

  getPaises(): Observable<string[]> {
    return this.http
      .get<string[]>(environment.URL_ITCD_CM + 'paises')
      .pipe(map((resp: any) => resp.resposta));
  }
}
