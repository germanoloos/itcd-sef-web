import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImoveisNoExteriorForm } from '../pages/bens-direitos-dividas/children/imovel-no-exterior/imovel-no-exterior.component';

@Injectable({
  providedIn: 'any',
})
export class BensDireitosDividasService {
  constructor(private httpModule: HttpClient) {}

  postImovelNoExterior(
    imovelNoExterios: ImoveisNoExteriorForm
  ): Observable<any> {
    //:TODO alterar rota para a definida no backend
    return this.httpModule.post<ImoveisNoExteriorForm>(
      `${environment.URL_ITCD_CM}bens/imovel`,
      imovelNoExterios
    );
  }
}
