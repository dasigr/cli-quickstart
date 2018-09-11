import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Customer } from './customer';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CustomerService {

  private customersUrl = 'http://dev-dascrm.pantheonsite.io/v1/customers';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET customers from the server */
  getCustomers (): Observable<Customer[]> {
    const url = `${this.customersUrl}/?_format=json`;
    return this.http.get<Customer[]>(url)
      .pipe(
        tap(customers => this.log('fetched customers')),
        catchError(this.handleError('getCustomers', []))
      );
  }

  /** GET customer by nid. Return `undefined` when nid not found */
  getCustomerNo404<Data>(nid: number): Observable<Customer> {
    const url = `${this.customersUrl}/?_format=json&nid=${nid}`;
    return this.http.get<Customer[]>(url)
      .pipe(
        map(customers => customers[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} customer nid=${nid}`);
        }),
        catchError(this.handleError<Customer>(`getCustomer nid=${nid}`))
      );
  }

  /** GET customer by nid. Will 404 if nid not found */
  getCustomer(nid: number): Observable<Customer> {
    const url = `${this.customersUrl}/${nid}/?_format=json`;
    return this.http.get<Customer>(url).pipe(
      tap(_ => this.log(`fetched customer nid=${nid}`)),
      catchError(this.handleError<Customer>(`getCustomer nid=${nid}`))
    );
  }

  /* GET customers whose name contains search term */
  searchCustomers(term: string): Observable<Customer[]> {
    if (!term.trim()) {
      // if not search term, return empty customer array.
      return of([]);
    }
    return this.http.get<Customer[]>(`${this.customersUrl}/?_format=json&name=${term}`).pipe(
      tap(_ => this.log(`found customers matching "${term}"`)),
      catchError(this.handleError<Customer[]>('searchCustomers', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new customer to the server */
  addCustomer (customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customersUrl, customer, httpOptions).pipe(
      tap((customer: Customer) => this.log(`added customer w/ nid=${customer.nid}`)),
      catchError(this.handleError<Customer>('addCustomer'))
    );
  }

  /** DELETE: delete the customer from the server */
  deleteCustomer (customer: Customer | number): Observable<Customer> {
    const nid = typeof customer === 'number' ? customer : customer.nid;
    const url = `${this.customersUrl}/${nid}`;

    return this.http.delete<Customer>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted customer nid=${nid}`)),
      catchError(this.handleError<Customer>('deleteCustomer'))
    );
  }

  /** PUT: update the customer on the server */
  updateCustomer (customer: Customer): Observable<any> {
    return this.http.put(this.customersUrl, customer, httpOptions).pipe(
      tap(_ => this.log(`updated customer nid=${customer.nid}`)),
      catchError(this.handleError<any>('updateCustomer'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CustomerService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CustomerService: ${message}`);
  }
}
