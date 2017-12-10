import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';

import { FacebookService } from 'ngx-facebook';
import { AuthService } from '../auth.service';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    FacebookService,
    AuthService
  ],
  declarations: [HeaderComponent]
})
export class PartialsModule { }
