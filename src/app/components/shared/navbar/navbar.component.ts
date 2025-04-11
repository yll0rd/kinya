import { NgFor, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    NgFor,
    // NgIf,
    ButtonModule,
    ThemeToggleComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  routes = signal([
    {
      name: "Lessons",
      href: "/lessons",
    },
    {
      name: "Profile",
      href: "/profile",
    },
    {
      name: "Chat",
      href: "#",
      disabled: true,
    },
  ])

  isActive(url: string): boolean {
    return window.location.pathname === url;
  }
}
