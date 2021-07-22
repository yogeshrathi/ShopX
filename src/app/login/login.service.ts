import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})

export class LoginService {
	constructor(
		private httpClient: HttpClient
	) { }

	public signUp(payload: any): Observable<any> {
		return this.httpClient.post<any>(`${environment.baseHref}auth/signup`, payload);
	}

  public signIn(payload: any): Observable<any> {
		return this.httpClient.post<any>(`${environment.baseHref}auth/signin`, payload);
	}

}
