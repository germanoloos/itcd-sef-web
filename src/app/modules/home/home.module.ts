import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '@app/app-material';
import { HomeRoutingModule } from './home-routing.module';
import { NovaDbdComponent } from './pages/nova-dbd/nova-dbd.component';


@NgModule({
  declarations: [
    NovaDbdComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialModule
  ]
})
export class HomeModule { }
