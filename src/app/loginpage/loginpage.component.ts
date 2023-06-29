import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataService } from 'data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent {

  users: any[]|undefined;
  username:string='';
  
  password:string='';

 showErrorMessage: boolean = false;

 constructor(private dataservice: DataService ,private router: Router) { }

 ngOnInit() {
  this.fetchUserData();
}

 login() {
  
   if (this.username === 'admin' && this.password === 'password') {
    
    console.log('Navigating to dashboard...');
    this.router.navigate(['/dashboard']);
   } else {
     
     this.showErrorMessage = true;
   }
 }

  fetchUserData() {
    this.dataservice.getUserData().subscribe(
      (response:any) => {
        this.users = response;
        console.log('User data:', this.users);
      },
      (error) => {
        console.log('Error fetching user data:', error);
      }
    );
  }
}


