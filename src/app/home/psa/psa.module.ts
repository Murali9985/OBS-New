import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsaRoutingModule } from './psa-routing.module';
import { PsaComponent } from './psa.component';
import { ReportsComponent } from './reports/reports.component';

import { PsadashboardComponent } from './psadashboard/psadashboard.component';


@NgModule({
  declarations: [PsaComponent, ReportsComponent, PsadashboardComponent],
  imports: [
    CommonModule,
    PsaRoutingModule
  ]
})
export class PsaModule { }
