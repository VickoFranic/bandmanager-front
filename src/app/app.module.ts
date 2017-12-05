import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { RoutingModule } from './routing.module';
import { PartialsModule } from './partials/partials.module';

import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FacebookClientService } from './dashboard/services/facebook-client.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    RoutingModule,
    PartialsModule
  ],
  providers: [
    AuthGuard,
    FacebookClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
