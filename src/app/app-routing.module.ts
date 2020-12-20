import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'city/:entity/:id', component: RestaurantListComponent },
  { path: 'restaurant/:id', component: RestaurantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
