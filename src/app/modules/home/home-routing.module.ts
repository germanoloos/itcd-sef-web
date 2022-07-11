import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaDbdComponent } from './pages/nova-dbd/nova-dbd.component';

const routes: Routes = [{
  path: '',
  component: NovaDbdComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
