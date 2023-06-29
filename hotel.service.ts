import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

Injectable({
  providedIn: 'root'
})

export class HotelService {
  private apiUrl = 'https://api.example.com/hotels';

  
  constructor(private http: HttpClient) {}

  getHotels(): Observable<IHotel[]> {
    return this.http.get<IHotel[]>(this.apiUrl);
  }

  getHotel(id: number): Observable<IHotel> {
    return this.http.get<IHotel>(`${this.apiUrl}/${id}`);
  }
}

export interface IHotel {
  id: number;
  name: string;
  location: string;
  star: number; 
  contactNumber: string;
  acNonAc: string;
}
 
