import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <button
      pButton
      [type]="type"
      [disabled]="disabled"
      [loading]="loading"
      (click)="onClick.emit($event)"
      [ngClass]="[
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        variant === 'primary' ? 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500' : '',
        variant === 'secondary' ? 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500' : '',
        variant === 'success' ? 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500' : '',
        variant === 'danger' ? 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500' : '',
        variant === 'warning' ? 'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-500' : '',
        variant === 'outline' ? 'bg-transparent border border-current hover:bg-gray-50 text-blue-600 focus:ring-blue-500' : '',
        size === 'small' ? 'px-2.5 py-1.5 text-xs rounded' : '',
        size === 'medium' ? 'px-4 py-2 text-sm rounded-md' : '',
        size === 'large' ? 'px-6 py-3 text-base rounded-md' : '',
        fullWidth ? 'w-full' : '',
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      ]"
    >
      <i *ngIf="iconLeft" [class]="iconLeft + ' mr-2'"></i>
      <ng-content></ng-content>
      <i *ngIf="iconRight" [class]="iconRight + ' ml-2'"></i>
    </button>
  `,
})
export class CustomButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'outline' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() fullWidth = false;
  @Input() iconLeft?: string;
  @Input() iconRight?: string;
  
  @Output() onClick = new EventEmitter<MouseEvent>();
}