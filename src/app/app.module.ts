import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './app-material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthTokenHttpInterceptorProvider } from './core/interceptor/auth.interceptor';
import { MatIconProvider } from './core/providers/icon.provider';
import { SharedModule } from './core/shared.module';
import { CausaMortisModule } from './modules/causa-mortis/causa-mortis.module';
import { HomeModule } from './modules/home/home.module';
import { UserModule } from './modules/user/user.module';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { SubheaderComponent } from './template/subheader/subheader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubheaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    UserModule,
    SharedModule,
    HomeModule,
    CausaMortisModule
  ],
  providers: [
    AuthTokenHttpInterceptorProvider,
    OverlayModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconProvider: MatIconProvider  ) {
    matIconProvider.buildIcons();
  }
}
