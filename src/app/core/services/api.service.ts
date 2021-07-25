import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<any> {
    return this.httpClient.get<any>(`${environment.baseHref}products`);
  }

  public setProduct(payload: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.baseHref}products/add`, { payload });
  }

}
