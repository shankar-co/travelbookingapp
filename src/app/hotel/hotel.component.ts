import { Component, OnInit } from '@angular/core';
import { DataService } from 'data.service'
import {  Hotel} from '../dashboard/Hotel'; 
import {HotelService  } from 'hotel.service';
import{Router } from '@angular/router';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  hotels!: any[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data: any) => {

      this.hotels = data;
    });
  }
}
