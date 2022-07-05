import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterEvent, RouterModule, Routes } from '@angular/router';
import { CAUSA_MORTIS, DADOS_BASICOS, DADOS_RESPONSAVEL } from '@app/core/providers/url.provider';
import { TransmissionSevice } from '@app/core/services/transmissao.service';
import { filter } from 'rxjs';
import { DadosBasicosComponent } from './pages/dados-basicos/dados-basicos.component';
import { DadosResponsavelComponent } from './pages/dados-responsavel/dados-responsavel.component';

const routes: Routes = [{
  path: DADOS_BASICOS,
  component: DadosBasicosComponent
},
{
  path: DADOS_RESPONSAVEL,
  component: DadosResponsavelComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CausaMortisRoutingModule {

  constructor(public router: Router, transmissionService: TransmissionSevice) {
    router.events.pipe(
      filter((e: any): e is RouterEvent => e instanceof NavigationEnd)
    ).subscribe((e: RouterEvent) => {
      if (e instanceof NavigationEnd) {
        if (e.url.includes(CAUSA_MORTIS)){
          transmissionService.tranmissionEvent.emit('Causa Mortis');
        }
      }
    });
  }

}
