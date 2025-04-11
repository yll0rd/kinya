import { NgFor, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { BrnSheetContentDirective, BrnSheetTriggerDirective } from '@spartan-ng/brain/sheet';
import {
  HlmSheetComponent,
  HlmSheetContentComponent,
} from '@spartan-ng/ui-sheet-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

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
      icon: "pi pi-book",

    },
    {
      name: "Profile",
      href: "/profile",
      icon: "pi pi-user",
    },
    {
      name: "Chat",
      href: "#",
      icon: "pi pi-comment",
      disabled: true,
    },
  ])

  isActive(url: string): boolean {
    return window.location.pathname === url;
  }
}
