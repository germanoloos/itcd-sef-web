import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CausaMortisRoutingModule } from './causa-mortis-routing.module';
import { DadosBasicosComponent } from './pages/dados-basicos/dados-basicos.component';
import { DadosResponsavelComponent } from './pages/dados-responsavel/dados-responsavel.component';
import { AngularMaterialModule } from '@app/app-material';
import { CausaMortisComponent } from './pages/causa-mortis/causa-mortis.component';
import { BensDireitosDividasComponent } from './pages/bens-direitos-dividas/bens-direitos-dividas.component';
import { NgxCurrencyModule } from 'ngx-currency';
import { customCurrencyMaskConfig } from '@app/core/pipe/currency.pipe';
import { NgxMaskModule } from 'ngx-mask';
import { DomainService } from '@app/core/services/domain.service';
import { ImoveisNoExteriorComponent } from './pages/bens-direitos-dividas/children/imovel-no-exterior/imovel-no-exterior.component';
import { BensDireitosDividasService } from './services/bens-direitos-dividas.service';

@NgModule({
  declarations: [
    DadosBasicosComponent,
    DadosResponsavelComponent,
    CausaMortisComponent,
    BensDireitosDividasComponent,
    ImoveisNoExteriorComponent,
  ],
  imports: [
    CommonModule,
    CausaMortisRoutingModule,
    AngularMaterialModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    NgxMaskModule.forRoot(),
  ],
  providers: [DomainService, BensDireitosDividasService],
})
export class CausaMortisModule {}
