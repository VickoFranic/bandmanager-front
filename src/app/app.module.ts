import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FacebookService } from 'ngx-facebook';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { RoutingModule } from './routing.module';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    RoutingModule
  ],
  providers: [
    FacebookService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
