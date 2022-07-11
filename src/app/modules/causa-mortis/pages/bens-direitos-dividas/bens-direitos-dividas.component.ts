import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  BENS_DIREITOS_DIVIDAS_ROUTE,
  CAUSA_MORTIS_ROUTE,
  IMOVEIS_NOEXTERIOR_ROUTE,
} from '@app/core/providers/url.provider';

@Component({
  selector: 'app-bens-direitos-dividas',
  templateUrl: './bens-direitos-dividas.component.html',
  styleUrls: ['./bens-direitos-dividas.component.scss'],
})
export class BensDireitosDividasComponent {
  IMOVEL_NO_EXTERIOR = IMOVEIS_NOEXTERIOR_ROUTE;

  constructor(private router: Router) {}

  routerLink(path: string): void {
    this.router.navigate([
      CAUSA_MORTIS_ROUTE,
      { outlets: { 'causa-mortis': [BENS_DIREITOS_DIVIDAS_ROUTE, path] } },
    ]);
  }
}
