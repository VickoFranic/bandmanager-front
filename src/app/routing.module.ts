import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { BandsTableComponent } from './bands-table/bands-table.component';

const appRoutes: Routes = [
  {
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          //
        ]
      }
    ]
  },
  { path: 'select-band', component: BandsTableComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}