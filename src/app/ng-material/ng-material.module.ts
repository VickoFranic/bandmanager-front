import { 
  MatButtonModule, 
  MatMenuModule, 
  MatIconModule, 
  MatToolbarModule, 
  MatCardModule, 
  MatProgressSpinnerModule,
  MatGridListModule } from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatGridListModule
  ]
})
export class NgMaterialModule { }
