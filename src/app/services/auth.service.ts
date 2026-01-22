import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, Subscription, tap, throwError, timer } from 'rxjs';
import { TokenService } from './token.service';
import { AuthUser } from '../models/AuthUser.model';
import { LoginResponse } from '../models/LoginResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = import.meta.env.NG_APP_BACKEND_URL;
  private tokenExpirySubscription: Subscription | null = null;
  private currentUserSubject: BehaviorSubject<AuthUser | null>;
  public currentUser$: Observable<AuthUser | null>;

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  get isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  set isAuthenticated(value: boolean) {
    this.isAuthenticatedSubject.next(value);
  }

  get currentUser(): AuthUser | null {
    return this.currentUserSubject.value;
  }

  set currentUser(value: AuthUser | null) {
    this.currentUserSubject.next(value);
  }

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {

    this.currentUserSubject = new BehaviorSubject<AuthUser | null>(null);
    this.currentUser$ = this.currentUserSubject.asObservable();

    const token = this.tokenService.getToken();
    if (!!token) {
      if (this.tokenService.isTokenExpired()) {
        this.logout();
        return;
      }
      this.isAuthenticated = true;
    }

  }

  public monitorTokenExpiry(): Subscription {
    return this.isAuthenticated$.subscribe(isAuth => {
      if (isAuth) {
        const tokenExpiryDate = this.tokenService.getTokenExpiryDate();
        if (tokenExpiryDate) {
          const now = new Date();
          if (tokenExpiryDate > now) {
            const timeUntilExpiry = tokenExpiryDate.getTime() - now.getTime();

            // Cancel previous timer if any
            this.tokenExpirySubscription?.unsubscribe();

            this.tokenExpirySubscription = timer(timeUntilExpiry).subscribe(() => {
              this.logout();
            });
          }
        }
      } else
        this.tokenExpirySubscription?.unsubscribe();
    })
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
          this.isAuthenticated = true;

          return user;
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error.error);
        })
      );
  }

  register(name: string, email: string, password: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/auth/signup`, {
      name,
      email,
      password
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error.error);
      })
    );
  }

  logout(): void {
    this.tokenExpirySubscription?.unsubscribe();
    this.tokenService.clearStorage();
    this.currentUserSubject.next(null);
    this.isAuthenticated = false;
  }

}
