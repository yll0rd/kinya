import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { Injectable } from '@angular/core';
import { JwtPayload } from '../models/JWTPayload.model';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = import.meta.env.NG_APP_BACKEND_URL;
  private currentUserSubject: BehaviorSubject<JwtPayload | null>;
  public currentUser$: Observable<JwtPayload | null>;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {
    // const user = this.tokenService.getUser();
    console.log(this.apiUrl);
    
    this.currentUserSubject = new BehaviorSubject<JwtPayload | null>(null);
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  // public get currentUserValue(): User | null {
  //   return this.currentUserSubject.value;
  // }

  login(jwt: string) {
    localStorage.setItem('access_token', jwt);
    // this.currentUserSubject.next(this.getDecodedToken());
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/signup`, {
      name,
      email,
      password
    }).pipe(
      catchError(error => {
        return throwError(() => new Error(error.message || 'Registration failed'));
      })
    );
  }
  
  logout(): void {
    this.tokenService.clearStorage();
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    const token = this.tokenService.getToken();
    // Check if token exists and is not expired
    console.log(!!token && !this.tokenService.isTokenExpired());
    return !!token && !this.tokenService.isTokenExpired();
  }
}
