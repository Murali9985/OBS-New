import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomizecustomerComponent } from './customizecustomer/customizecustomer.component';


@NgModule({
  declarations: [CustomerComponent, CustomerdetailsComponent, CustomizecustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ]
})
export class CustomerModule { }
