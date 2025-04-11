import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CustomButtonComponent } from '../../shared/ui/button/button.component';
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';

@Component({
  selector: 'app-continue-learning',
  imports: [
    CustomButtonComponent,
    RouterLink,
    HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
  ],
  templateUrl: './continue-learning.component.html',
  styleUrl: './continue-learning.component.css'
})
export class ContinueLearningComponent {
}
