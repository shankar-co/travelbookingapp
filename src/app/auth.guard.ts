import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'auth.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticatedUser()) {
      return true;
    } else {
      this.router.navigate(['/login']); // Redirect to login page if not authenticated
      return false;
    }
  }
}

