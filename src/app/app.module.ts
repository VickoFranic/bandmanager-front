import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { RoutingModule } from './routing.module';
import { PartialsModule } from './partials/partials.module';

import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BandsTableComponent } from './dashboard/bands-table/bands-table.component';

import { FacebookClientService } from './dashboard/services/facebook-client.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BandsTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    RoutingModule,
    PartialsModule,
    NgxDatatableModule
  ],
  providers: [
    AuthGuard,
    FacebookClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
