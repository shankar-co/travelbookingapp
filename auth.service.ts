// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  login(username: string, password: string): void {
    // Perform login logic, e.g., authenticate user credentials
    this.isAuthenticated = true;
  }

  logout(): void {
    // Perform logout logic, e.g., clear authentication status and user data
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}

