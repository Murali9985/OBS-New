import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TmsRoutingModule } from './tms-routing.module';
import { TmsComponent } from './tms.component';


@NgModule({
  declarations: [TmsComponent],
  imports: [
    CommonModule,
    TmsRoutingModule
  ]
})
export class TmsModule { }
