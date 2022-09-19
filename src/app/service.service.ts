import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }

  getData(): Observable<any>  {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=15fe90f9a59eb22bedfadef36c901ab4');
  }

  login(URL:any, data:any): Observable<any> {
    return this.http.post(URL,data);
  }
}
