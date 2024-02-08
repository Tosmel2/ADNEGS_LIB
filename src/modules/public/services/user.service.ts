import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userData: { fullname: string; email: string } | null = null;

  // This method should be called after the user logs in or during initialization
  setUserData(fullname: string, email: string): void {
    this.userData = { fullname, email };
  }

  getUserData(): { fullname: string; email: string } | null {
    return this.userData
  }

  private baseUrl = 'https://elibrary-backend-production.up.railway.app';


  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/register`, userData);
  }

  loginUser(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, userData);
  }

  fetchUserData(userId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${userId}`)
  }

  verifyEmail(token: string, accessToken:string): Observable<any> {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return this.http.get(`${this.baseUrl}/auth/verify?token=${token}`, { headers, responseType: 'text' });
  }

  resendEmail(accessToken:string): Observable<any> {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return this.http.get(`${this.baseUrl}/auth/resend-verification`, { headers, responseType: 'text' });
  }

  
}
