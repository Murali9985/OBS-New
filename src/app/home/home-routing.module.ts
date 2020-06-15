import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: HomeComponent,

    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent }
      
    ]
  },
  { path: 'hrms', loadChildren: () => import('./hrms/hrms.module').then(m => m.HrmsModule) },
  { path: 'psa', loadChildren: () => import('./psa/psa.module').then(m => m.PsaModule) },
  { path: 'tms', loadChildren: () => import('./tms/tms.module').then(m => m.TmsModule) },
  { path: 'config', loadChildren: () => import('./config/config.module').then(m => m.ConfigModule) }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
