import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  name: string='';
  email: string='';
  dob: string='';
  gender: string='';
  address: string='';
  country: string='';
  state: string='';
  password: string='';
  confirmPassword: string='';
  minDate: string='';

  constructor() {
    const today = new Date();
    this.minDate = new Date(today.getFullYear() - 80, today.getMonth(), today.getDate()).toISOString().split('T')[0];
  }

  signup() {
   
    console.log('');
   
  }
}


