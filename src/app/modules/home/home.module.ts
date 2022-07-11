import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '@app/app-material';
import { HomeRoutingModule } from './home-routing.module';
import { NovaDbdComponent } from './pages/nova-dbd/nova-dbd.component';
import { TiposService } from './services/tipos.service';


@NgModule({
  declarations: [
    NovaDbdComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialModule
  ],
  providers: [TiposService]
})
export class HomeModule { }
