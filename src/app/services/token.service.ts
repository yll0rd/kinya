import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '../models/JWTPayload.model';
import { AuthUser } from '../models/AuthUser.model';

const TOKEN_KEY = 'auth-token';
// const REFRESH_TOKEN_KEY = 'auth-refresh-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() { }

  signOut(): void {
    this.clearStorage();
  }

  public clearStorage(): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem(USER_KEY);
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  // public saveRefreshToken(token: string): void {
  //   window.localStorage.removeItem(REFRESH_TOKEN_KEY);
  //   window.localStorage.setItem(REFRESH_TOKEN_KEY, token);
  // }

  // public getRefreshToken(): string | null {
  //   return window.localStorage.getItem(REFRESH_TOKEN_KEY);
  // }

  public saveUser(user: AuthUser): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  // public getUser(): User | null {
  //   const user = window.localStorage.getItem(USER_KEY);
  //   if (user) {
  //     return JSON.parse(user);
  //   }
  //   return null;
  // }

  getDecodedToken(): JwtPayload | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      return jwtDecode<JwtPayload>(token);
    } catch (e) {
      console.error('Invalid JWT token');
      return null;
    }
  }

  isTokenExpired(): boolean {
    const decoded = this.getDecodedToken();
    if (!decoded) return true;

    return decoded.exp * 1000 < Date.now(); // exp is in seconds
  }


  /**
   * Retrieves the expiration date of the current JWT token.
   *
   * Decodes the token and extracts the `exp` (expiration) claim.
   * Returns a `Date` object representing the expiry time in UTC, or `null` if the token is invalid or does not contain an expiration claim.
   *
   * @returns {Date | null} The expiration date of the token, or `null` if unavailable.
   */
  public getTokenExpiryDate(): Date | null {
    const decoded = this.getDecodedToken();
    if (!decoded || decoded.exp === undefined)
      return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }
}
