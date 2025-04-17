// token.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService,
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Skip interceptor for auth endpoints to avoid circular dependencies
    if (this.isAuthRequest(request)) {
      return next.handle(request);
    }

    // Get token from token service
    let authToken = this.tokenService.getToken();

    // Clone and add authorization header if token exists
    if (authToken) {
      request = this.addTokenHeader(request, authToken);
    }

    // Process the request with token (if available)
    return next.handle(request)
  }

  private addTokenHeader(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    });
  }

  private isAuthRequest(request: HttpRequest<any>): boolean {
    // Don't add token to login/register/refresh-token endpoints
    const authUrls = [
      '/api/v1/auth/login', 
      '/api/v1/auth/signup', 
      // '/api/auth/refresh-token'
    ];
    return authUrls.some(url => request.url.includes(url));
  }
}