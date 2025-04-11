import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

type Theme = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root'
})
export class ThemeToggleService {
  private themeSubject = new BehaviorSubject<Theme>(this.getInitialTheme());
  theme$ = this.themeSubject.asObservable();

  private systemDarkModeMediaQuery: MediaQueryList | null = null;

  constructor(
    @Inject(DOCUMENT) private document: Document) {
    // Watch for system preference changes
    this.systemDarkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.systemDarkModeMediaQuery.addEventListener('change', () => {
      if (this.themeSubject.value === 'system') {
        this.applyTheme('system');
      }
    })

    // Apply initial theme
    this.applyTheme(this.themeSubject.value);
  }

  private getInitialTheme(): Theme {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    return savedTheme || 'system';
  }

  getCurrentTheme(): Theme {
    return this.themeSubject.value;
  }

  isDarkMode(): boolean {
    const theme = this.themeSubject.value;
    if (theme === 'dark') return true;
    if (theme === 'light') return false;
    
    // System preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private applyTheme(theme: Theme): void {
    const isDark = theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    // Toggle class on HTML element
    if (isDark) {
      this.document.documentElement.classList.add('dark');
    } else {
      this.document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme: Theme): void {
    localStorage.setItem('theme', theme);
    this.themeSubject.next(theme);
    this.applyTheme(theme);
  }
}