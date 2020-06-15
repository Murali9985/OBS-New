import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';


const routes: Routes = [{path:'', component:ProjectsComponent},
{path:'projectdetails/:name/:edit',component:ProjectdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
