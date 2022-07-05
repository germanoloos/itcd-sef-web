import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CausaMortisRoutingModule } from './causa-mortis-routing.module';
import { DadosBasicosComponent } from './pages/dados-basicos/dados-basicos.component';
import { DadosResponsavelComponent } from './pages/dados-responsavel/dados-responsavel.component';
import { AngularMaterialModule } from '@app/app-material';


@NgModule({
  declarations: [
    DadosBasicosComponent,
    DadosResponsavelComponent
  ],
  imports: [
    CommonModule,
    CausaMortisRoutingModule,
    AngularMaterialModule
  ]
})
export class CausaMortisModule { }
