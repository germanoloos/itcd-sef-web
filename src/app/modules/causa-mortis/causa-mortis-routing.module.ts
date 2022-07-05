import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DADOS_BASICOS, DADOS_RESPONSAVEL } from '@app/core/providers/url.provider';
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
export class CausaMortisRoutingModule { }
