import { EmployessComponent } from './employess/employess.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrmsComponent } from './hrms.component';


const routes: Routes = [{
  path: '', component: HrmsComponent,
  children:[{
    path:'',redirectTo:'employees',pathMatch:'full'
  },{path:'employees',component:EmployessComponent}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrmsRoutingModule { }
