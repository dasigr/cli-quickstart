import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { MessagesComponent }    from './messages/messages.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { CustomerDetailComponent }  from './customer-detail/customer-detail.component';
import { CustomersComponent }      from './customers/customers.component';
import { CustomerSearchComponent }  from './customer-search/customer-search.component';
import { ItemsComponent }      from './items/items.component';
import { ItemDetailComponent }  from './item-detail/item-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomersComponent,
    CustomerDetailComponent,
    ItemsComponent,
    ItemDetailComponent,
    MessagesComponent,
    CustomerSearchComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
