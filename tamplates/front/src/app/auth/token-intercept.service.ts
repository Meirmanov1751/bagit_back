import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptService implements HttpInterceptor {

    constructor(private authService: UserService, private injector: Injector) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authService.isAuth()) {
            const authService = this.injector.get(UserService);
            req = req.clone({
                    setHeaders: {
                        Authorization: `JWT ${authService.getToken()}`
                    }
                }
            );
        }
        return next.handle(req);
    }
}
