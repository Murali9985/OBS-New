import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { ProjectsComponent } from './projects/projects.component';
import { PeopleComponent } from './people/people.component';
import { LogtimeComponent } from './logtime/logtime.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: HomeComponent,

    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'logtime', component: LogtimeComponent },
      { path: 'people', component: PeopleComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'hrms', loadChildren: () => import('./hrms/hrms.module').then(m => m.HrmsModule) },
      { path: 'psa', loadChildren: () => import('./psa/psa.module').then(m => m.PsaModule) },
      { path: 'tms', loadChildren: () => import('./tms/tms.module').then(m => m.TmsModule) },
      { path: 'config', loadChildren: () => import('./config/config.module').then(m => m.ConfigModule) }
    ]
  },
 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
