import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DeBoundService {
  readonly API_URL = 'https://dummyjson.com/products/search?q=';
  constructor(private http: HttpClient) {}
  search(query: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}${query}`);
  }
}
