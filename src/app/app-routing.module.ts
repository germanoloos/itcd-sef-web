import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CAUSA_MORTIS, LOGIN_ROUTE, USER_ROUTE } from './core/providers/url.provider';

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
  path: LOGIN_ROUTE,
  redirectTo: 'user/login'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
