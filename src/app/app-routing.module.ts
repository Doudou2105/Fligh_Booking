import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { ViewDetailsComponent } from './view-details/view-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'flightbooking', pathMatch: 'full' },
  { path: 'flightbooking', component: HomeComponent },
  { path: 'bookflight', component: BookFlightComponent },
  {path: 'viewdetails', component: ViewDetailsComponent},
  {path: 'staticBackdrop', component: ViewDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,BookFlightComponent,ViewDetailsComponent]
