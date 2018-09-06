import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { CustomerSearchComponent } from '../customer-search/customer-search.component';

import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { CUSTOMERS } from '../mock-customers';
import { CustomerService } from '../customer.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let customerService;
  let getCustomersSpy;

  beforeEach(async(() => {
    customerService = jasmine.createSpyObj('CustomerService', ['getCustomers']);
    getCustomersSpy = customerService.getCustomers.and.returnValue( of(CUSTOMERS) );
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        CustomerSearchComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: CustomerService, useValue: customerService }
      ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Top Customers" as headline', () => {
    expect(fixture.nativeElement.querySelector('h3').textContent).toEqual('Top Customers');
  });

  it('should call customerService', async(() => {
    expect(getCustomersSpy.calls.any()).toBe(true);
    }));

  it('should display 4 links', async(() => {
    expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4);
  }));

});
