import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {Login,Verify,Token,Registration} from './auth.interface';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;
  baseurl = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) {
  }

  login(model: Login): Observable<Token> {
    return this.http.post<Token>(this.baseurl + `/auth/token/login/`, model)
      .pipe(
        tap(
          (token: Token) => {
            this.setToken(token.access);
            localStorage.setItem('token', token.access);
          }
        )
      );
  }

  registration(model: Registration): Observable<any> {
    return this.http.post<any>(this.baseurl + `/auth/users/`, model);
  }

  verify(model: Verify): Observable<any> {
    return this.http.post<any>(this.baseurl + `/auth/users/activation/`, model);
  }

  getToken(): string {
    return localStorage.getItem('token')!;
  }

  isAuth(): boolean {
    this.setToken(this.getToken());
    return !!this.token;
  }


  setToken(token: string): void {
    this.token = token;
  }
}
