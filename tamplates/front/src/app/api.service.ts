import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Posts} from './posts';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService {
  baseUrl: string = "http://localhost:8000";

  constructor(private httpClient: HttpClient) {

  }

  public getDepList():Observable<any[]>{
    return this.httpClient.get<any[]>('http://localhost:8000/api/posts/');
  }
}
