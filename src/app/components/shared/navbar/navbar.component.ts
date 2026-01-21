import { NgFor, Location, NgClass } from '@angular/common';
import { Component, HostBinding, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { BrnSheetContentDirective, BrnSheetTriggerDirective } from '@spartan-ng/brain/sheet';
import {
  HlmSheetComponent,
  HlmSheetContentComponent,
} from '@spartan-ng/ui-sheet-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [
    HlmSheetComponent,
    HlmSheetContentComponent,
    BrnSheetContentDirective,
    BrnSheetTriggerDirective,
    HlmButtonDirective,
    RouterLink,
    NgFor,
    ThemeToggleComponent,
    NgClass
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private authService = inject(AuthService);
  private location = inject(Location);

  @HostBinding('class') 
  get className() {
    if (this.isAuthPage)
      return 'top-0 z-50 absolute inset-x-0';
    return 'border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60';
  }

  get isAuthPage() {
    const path = window.location.pathname;
    return path === '/login' || path === '/signup';
  }

  get routes() {
    return [
      {
        name: "Lessons",
        href: "/lessons",
        icon: "pi pi-book",
        shouldShow: !this.isAuthPage,
      },
      {
        name: "Profile",
        href: "/profile",
        icon: "pi pi-user",
        shouldShow: !this.isAuthPage,
      },
      {
        name: "Chat",
        href: "#",
        icon: "pi pi-comment",
        shouldShow: !this.isAuthPage,
        disabled: true,
      },
    ];
  }

  isActive(url: string): boolean {
    return window.location.pathname === url;
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  getCurrentLocation(): string {
    return this.location.path();
  }

  signOut() {
    this.authService.logout()
  }
}
