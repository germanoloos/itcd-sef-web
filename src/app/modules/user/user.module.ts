import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '@app/app-material';
import { SharedModule } from '@app/core/shared.module';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [AuthenticationService]
})

export class UserModule { }
