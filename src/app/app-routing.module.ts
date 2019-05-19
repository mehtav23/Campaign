import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizerDashboardComponent } from './organizer-dashboard/organizer-dashboard.component';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'dashboard',component:OrganizerDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents = [OrganizerDashboardComponent];
