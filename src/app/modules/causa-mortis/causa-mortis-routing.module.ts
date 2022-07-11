import { NgModule } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterEvent,
  RouterModule,
  Routes,
} from '@angular/router';
import {
  BENS_DIREITOS_DIVIDAS_ROUTE,
  CAUSA_MORTIS_OUTLET,
  CAUSA_MORTIS_ROUTE,
  DADOS_BASICOS_ROUTE,
  DADOS_RESPONSAVEL_ROUTE,
  IMOVEIS_NOEXTERIOR_ROUTE,
} from '@app/core/providers/url.provider';
import { TransmissionSevice } from '@app/core/services/transmissao.service';
import { filter } from 'rxjs';
import { BensDireitosDividasComponent } from './pages/bens-direitos-dividas/bens-direitos-dividas.component';
import { CausaMortisComponent } from './pages/causa-mortis/causa-mortis.component';
import { DadosBasicosComponent } from './pages/dados-basicos/dados-basicos.component';
import { DadosResponsavelComponent } from './pages/dados-responsavel/dados-responsavel.component';
import { ImoveisNoExteriorComponent } from './pages/bens-direitos-dividas/children/imovel-no-exterior/imovel-no-exterior.component';

const routes: Routes = [
  {
    path: '',
    component: CausaMortisComponent,
    children: [
      {
        path: DADOS_BASICOS_ROUTE,
        component: DadosBasicosComponent,
        outlet: CAUSA_MORTIS_OUTLET,
      },
      {
        path: DADOS_RESPONSAVEL_ROUTE,
        component: DadosResponsavelComponent,
        outlet: CAUSA_MORTIS_OUTLET,
      },
      {
        path: BENS_DIREITOS_DIVIDAS_ROUTE,
        outlet: CAUSA_MORTIS_OUTLET,
        children: [
          {
            path: '',
            component: BensDireitosDividasComponent,
          },
          {
            path: IMOVEIS_NOEXTERIOR_ROUTE,
            component: ImoveisNoExteriorComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CausaMortisRoutingModule {
  constructor(public router: Router, transmissionService: TransmissionSevice) {
    router.events
      .pipe(filter((e: any): e is RouterEvent => e instanceof NavigationEnd))
      .subscribe((e: RouterEvent) => {
        if (e instanceof NavigationEnd) {
          if (e.url.includes(CAUSA_MORTIS_ROUTE)) {
            transmissionService.tranmissionEvent.emit('Causa Mortis');
          }
        }
      });
  }
}
