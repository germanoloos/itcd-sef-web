import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { TransmissaoModel } from "@app/core/model/transmissao.model";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment"

@Injectable({
  providedIn: 'any'
})
export class TiposService {

  constructor(private http: HttpClient) { }

  getTipoTransmissao(): Observable<TransmissaoModel[]> {
    return this.http.get<TransmissaoModel[]>(environment.URL_ITCD_CM + "tipos/tipo-transmissao").pipe(map(
      (resp: any) => resp.resposta
    ));
  }

  getTipoRegimeBens(): Observable<any> {
    return this.http.get(environment.URL_ITCD_CM + "tipos/tipo-regime-bens");
  }

}
