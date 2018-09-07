import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Item } from './item';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ItemService {

  private itemsUrl = 'http://dev-dascrm.pantheonsite.io/api/articles';  // URL to web api.

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET items from the server */
  getItems (): Observable<Item[]> {
    const url = `${this.itemsUrl}/?_format=json`;
    return this.http.get<Item[]>(url)
      .pipe(
        tap(items => this.log('fetched items')),
        catchError(this.handleError('getItems', []))
      );
  }

  /** GET item by nid. Return `undefined` when nid not found */
  getItemNo404<Data>(nid: number): Observable<Item> {
    const url = `${this.itemsUrl}/?nid=${nid}`;
    return this.http.get<Item[]>(url)
      .pipe(
        map(items => items[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} item nid=${nid}`);
        }),
        catchError(this.handleError<Item>(`getItem nid=${nid}`))
      );
  }

  /** GET item by id. Will 404 if id not found */
  getItem(nid: number): Observable<Item> {
    const url = `${this.itemsUrl}/${nid}`;
    return this.http.get<Item>(url).pipe(
      tap(_ => this.log(`fetched item nid=${nid}`)),
      catchError(this.handleError<Item>(`getItem nid=${nid}`))
    );
  }

  /* GET items whose title contains search term */
  searchItems(term: string): Observable<Item[]> {
    if (!term.trim()) {
      // if not search term, return empty item array.
      return of([]);
    }
    return this.http.get<Item[]>(`${this.itemsUrl}/?title=${term}`).pipe(
      tap(_ => this.log(`found items matching "${term}"`)),
      catchError(this.handleError<Item[]>('searchItems', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new item to the server */
  addItem (item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsUrl, item, httpOptions).pipe(
      tap((item: Item) => this.log(`added item w/ id=${item.nid}`)),
      catchError(this.handleError<Item>('addItem'))
    );
  }

  /** DELETE: delete the item from the server */
  deleteItem (item: Item | number): Observable<Item> {
    const nid = typeof item === 'number' ? item : item.nid;
    const url = `${this.itemsUrl}/${nid}`;

    return this.http.delete<Item>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted item nid=${nid}`)),
      catchError(this.handleError<Item>('deleteItem'))
    );
  }

  /** PUT: update the item on the server */
  updateItem (item: Item): Observable<any> {
    return this.http.put(this.itemsUrl, item, httpOptions).pipe(
      tap(_ => this.log(`updated item nid=${item.nid}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - title of the operation that failed
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

  /** Log a ItemService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ItemService: ${message}`);
  }
}
