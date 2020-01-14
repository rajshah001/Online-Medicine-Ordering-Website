import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NearbyStoresComponent } from './nearby-stores/nearby-stores.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {'path': 'home', component: HomeComponent},
  {'path': 'nearby-stores', component: NearbyStoresComponent},
  {'path': 'order', component: OrderComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, NearbyStoresComponent, OrderComponent]