import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CAUSA_MORTIS, CESSAO_DE_DIREITOS_HEREDITARIOS, DOACAO_COM_RESERVA, DOACAO_DE_NUMERARIO, DOACAO_PLENA, EXCEDENTE_DE_MEACAO, EXTINCAO, INSTITUICAO_DE_USOFRUTO, LOGIN_ROUTE, USER_ROUTE } from './core/providers/url.provider';

const routes: Routes = [{
  path: USER_ROUTE,
  loadChildren: () => import('./modules/user/user-routing.module').then((b) => b.UserRoutingModule)
},
{
  path: '',
  loadChildren: () => import('./modules/home/home-routing.module').then((b) => b.HomeRoutingModule)
},
{
  path: CAUSA_MORTIS,
  loadChildren: () => import('./modules/causa-mortis/causa-mortis-routing.module').then((b) => b.CausaMortisRoutingModule)
},
{
  path: 'CESSAO_DE_DIREITOS_HEREDITARIOS',
  loadChildren: () => import('./modules/cessao-de-direitos-hereditarios/cessao-de-direitos-hereditarios-routing.module').then((b) => b.CessaoDeDireitosHereditariosRoutingModule)
},
{
  path: DOACAO_COM_RESERVA,
  loadChildren: () => import('./modules/doacao-com-reserva/doacao-com-reserva-routing.module').then((b) => b.DoacaoComReservaRoutingModule)
},
{
  path: DOACAO_DE_NUMERARIO,
  loadChildren: () => import('./modules/doacao-de-numerario/doacao-de-numerario-routing.module').then((b) => b.DoacaoDeNumerarioRoutingModule)
},
{
  path: DOACAO_PLENA,
  loadChildren: () => import('./modules/doacao-plena/doacao-plena-routing.module').then((b) => b.DoacaoPlenaRoutingModule)
},
{
  path: EXCEDENTE_DE_MEACAO,
  loadChildren: () => import('./modules/excedente-de-meacao/excedente-de-meacao-routing.module').then((b) => b.ExcedenteDeMeacaoRoutingModule)
},
{
  path: EXTINCAO,
  loadChildren: () => import('./modules/extincao/extincao-routing.module').then((b) => b.ExtincaoRoutingModule)
},
{
  path: INSTITUICAO_DE_USOFRUTO,
  loadChildren: () => import('./modules/instituicao-de-usofruto/instituicao-de-usofruto-routing.module').then((b) => b.InstituicaoDeUsofrutoRoutingModule)
},
{
  path: LOGIN_ROUTE,
  redirectTo: 'user/login'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
