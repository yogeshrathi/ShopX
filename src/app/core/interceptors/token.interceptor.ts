import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from '../services/storageService';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(
        private storageService: StorageService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(this.addToken(request, this.storageService.sessionToken));
    }

    private addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
        if (req.url.indexOf(environment.baseHref) == -1) {
            return req;
        } else if (!token) {
            return req.clone();
        }
        return req.clone({ setHeaders: { Authorization: token } });
    }
}
