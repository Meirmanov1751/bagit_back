import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<any> {
    return this.http.get(this.baseurl + '/api/posts/',
      {headers: this.httpHeaders});
  }
  getOneMovie(id): Observable<any> {
    return this.http.get(this.baseurl + '/api/posts/' + id + '/',
      {headers: this.httpHeaders});
  }
  updateMovie(posts): Observable<any> {
    const body = {title: posts.title,text: posts.text };
    return this.http.put(this.baseurl + '/api/posts/' + posts.id + '/', body,
      {headers: this.httpHeaders});
  }
  createMovie(posts): Observable<any> {
    const body = {title: posts.title,text: posts.text };
    return this.http.post(this.baseurl + '/api/posts/', body,
      {headers: this.httpHeaders});
  }
  deleteMovie(id): Observable<any> {
    return this.http.delete(this.baseurl + '/api/posts/' + id + '/',
      {headers: this.httpHeaders});
  }
}
