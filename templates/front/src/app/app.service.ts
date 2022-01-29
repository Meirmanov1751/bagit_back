import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {

  }

  postFead(fead): Observable<any>{
    const body = {email: fead.email,text: fead.text};
      return this.http.post(this.baseurl +  '/api/fead/',body,{headers:this.httpHeaders});
  }
}
