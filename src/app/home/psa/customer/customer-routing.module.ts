import { CustomizecustomerComponent } from './customizecustomer/customizecustomer.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomerComponent } from './customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{path:'', component:CustomerComponent},
{path:'customerdetails/:name',component:CustomerdetailsComponent},
{path:'customize/:customizedParam/:value', component:CustomizecustomerComponent},
{path:'customize/:customizedParam', component:CustomizecustomerComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
