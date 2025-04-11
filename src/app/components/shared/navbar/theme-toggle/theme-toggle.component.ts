import { Component, inject, Inject } from '@angular/core';
import { BrnMenuTriggerDirective } from '@spartan-ng/brain/menu';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmMenuComponent, HlmMenuItemDirective } from '@spartan-ng/ui-menu-helm';
import { ThemeToggleService } from '../../../../services/theme-toggle.service';

type Theme = 'light' | 'dark' | 'system';

@Component({
  selector: 'app-theme-toggle',
  imports: [
    BrnMenuTriggerDirective,
    HlmButtonDirective,

    HlmMenuComponent,
    HlmMenuItemDirective
  ],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css'
})
export class ThemeToggleComponent {
  themeToggleService = inject(ThemeToggleService);
  currentTheme: Theme;


  constructor () {
    this.currentTheme = this.themeToggleService.getCurrentTheme();
    this.themeToggleService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  setTheme(theme: Theme): void {
    this.themeToggleService.setTheme(theme);
  }
}
