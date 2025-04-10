import { NgFor, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Globe } from 'lucide-angular';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    NgFor,
    NgIf,
    LucideAngularModule,
    ButtonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  readonly LucideGlobe = Globe;

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
