import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { TokenService } from './token.service';
import { AuthUser } from '../models/AuthUser.model';
import { LoginResponse } from '../models/LoginResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = import.meta.env.NG_APP_BACKEND_URL;
  private currentUserSubject: BehaviorSubject<AuthUser | null>;
  public currentUser$: Observable<AuthUser | null>;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {
    // const user = this.tokenService.getUser();
    console.log(this.apiUrl);

    this.currentUserSubject = new BehaviorSubject<AuthUser | null>(null);
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  // public get currentUserValue(): User | null {
  //   return this.currentUserSubject.value;
  // }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/auth/login`, { email, password })
      .pipe(
        tap(response => {
          if (!response.accessToken) throw new Error('Login failed');

          // Store token and user details
          this.tokenService.saveToken(response.accessToken);

          // Decode the token to get user details
          const decodedToken = this.tokenService.getDecodedToken();
          if (!decodedToken) throw new Error('Failed to decode token');

          const user = {
            userId: decodedToken.userId,
            name: decodedToken.name,
            email: decodedToken.email,
            role: decodedToken.role,
          };

          this.tokenService.saveUser(user);
          this.currentUserSubject.next(user);

          return user;
        }),
        catchError(error => {
          return throwError(() => new Error(error.message || 'Login failed'));
        })
      );
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/signup`, {
      name,
      email,
      password
    }).pipe(
      catchError((error : HttpErrorResponse) => {
        console.log(error);
        return throwError(() => error.error);
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
