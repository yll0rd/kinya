import { AfterViewInit, Component, inject, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,

    NgxSonnerToaster
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'kinya';

  private _authService = inject(AuthService);
  private _authSub: Subscription | null = null;

  ngAfterViewInit(): void {
    this._authSub = this._authService.monitorTokenExpiry();
  }

  ngOnDestroy(): void {
    this._authSub?.unsubscribe();
  }

}
