import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://elibrary-backend-production.up.railway.app';


  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/register`, userData);
  }

  loginUser(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, userData);
  }
}
