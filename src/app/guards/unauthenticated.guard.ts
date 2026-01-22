import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UnAuthenticatedGuard implements CanActivate {
  private _authService = inject(AuthService);
  private _router = inject(Router);

  canActivate(_: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isAuthenticated = this._authService.isAuthenticated;
    if (isAuthenticated) {
      this._router.navigate(['/']);
      return false;
    }
    return true;
    
  }

}
