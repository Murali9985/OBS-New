import { PsadashboardComponent } from './psadashboard/psadashboard.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';

import { CustomerComponent } from './customer/customer.component';
import { PsaComponent } from './psa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '', component: PsaComponent,
  children: [{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path:'dashboard', component:PsadashboardComponent},
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  { path: 'contracts', loadChildren: () => import('./contracts/contracts.module').then(m => m.ContractsModule) },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },

  { path: 'reports', component: ReportsComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PsaRoutingModule { }
