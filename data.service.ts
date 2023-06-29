import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable}from'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUserData() {
    return this.http.get(this.apiUrl);
  }
  getData(): Observable<any> {
    
    return this.http.get<any>('your-data-url');
  }
}


