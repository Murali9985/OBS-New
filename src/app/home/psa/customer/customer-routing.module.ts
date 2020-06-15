import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomerComponent } from './customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{path:'', component:CustomerComponent},
{path:'customerdetails/:name/:edit',component:CustomerdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
