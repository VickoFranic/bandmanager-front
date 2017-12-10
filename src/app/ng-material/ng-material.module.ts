import { 
  MatButtonModule, 
  MatMenuModule, 
  MatIconModule, 
  MatToolbarModule, 
  MatCardModule, 
  MatProgressSpinnerModule, 
  MatTableModule } from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule
  ]
})
export class NgMaterialModule { }
