
import { Component, OnInit } from '@angular/core';
import { Hotel  } from '../dashboard/Hotel' ;
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent  {
  hotels: Hotel[] = [];
  searchTerm: string = '';
  
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchHotels();
  }

  fetchHotels() {
    this.http.get<Hotel[]>(' http://localhost:3000/hotels').subscribe(
      (data) => {
        this.hotels = data;
      },
      (error) => {
        console.error('Error fetching hotels:', error);
      }
    );
   
    }
    search() {
      
      console.log('Search term:', this.searchTerm);
      
    }
  }
  

  
