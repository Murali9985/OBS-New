import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrmsComponent } from './hrms.component';


const routes: Routes = [{
  path: '', component: HrmsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrmsRoutingModule { }
