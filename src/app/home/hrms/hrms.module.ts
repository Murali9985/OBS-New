import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrmsRoutingModule } from './hrms-routing.module';
import { HrmsComponent } from './hrms.component';
import { EmployessComponent } from './employess/employess.component';


@NgModule({
  declarations: [HrmsComponent, EmployessComponent],
  imports: [
    CommonModule,
    HrmsRoutingModule
  ]
})
export class HrmsModule { }
