import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { CAUSA_MORTIS_ROUTE, LOGIN_ROUTE, USER_ROUTE } from './core/providers/url.provider';

const routes: Routes = [{
  path: USER_ROUTE,
  loadChildren: () => import('./modules/user/user-routing.module').then((b) => b.UserRoutingModule)
},
{
  path: '',
  loadChildren: () => import('./modules/home/home-routing.module').then((b) => b.HomeRoutingModule),
  canActivate: [AuthGuard]
},
{
  path: CAUSA_MORTIS_ROUTE,
  loadChildren: () => import('./modules/causa-mortis/causa-mortis-routing.module').then((b) => b.CausaMortisRoutingModule),
  canActivate: [AuthGuard]
},
{
  path: LOGIN_ROUTE,
  redirectTo: 'user/login'

},
{ path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
