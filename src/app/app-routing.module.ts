import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { CustomersComponent }      from './customers/customers.component';
import { CustomerDetailComponent }  from './customer-detail/customer-detail.component';
import { ItemsComponent }      from './items/items.component';
import { ItemDetailComponent }  from './item-detail/item-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CustomerDetailComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'item/:id', component: ItemDetailComponent },
  { path: 'items', component: ItemsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
