import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpClient) {}

  local ="http://localhost:3000/products"
  web = "https://api.jsonserver.io/db/products"

  link = this.web;


  addEmployee(data: any): Observable<any> {
    return this._http.post(this.link, data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(this.link+`/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get(this.link);
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(this.link+`/${id}`);
  }
}
