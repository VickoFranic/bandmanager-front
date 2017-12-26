import { 
  MatButtonModule, 
  MatMenuModule, 
  MatIconModule, 
  MatToolbarModule, 
  MatCardModule, 
  MatProgressSpinnerModule,
  MatGridListModule,
  MatExpansionModule,
  MatChipsModule } from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatExpansionModule
  ]
})
export class NgMaterialModule { }
