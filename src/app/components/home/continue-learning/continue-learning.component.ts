import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomButtonComponent } from '../../shared/ui/button/button.component';
import {
  HlmCardContentDirective,
  HlmCardDirective,
} from '@spartan-ng/ui-card-helm';

@Component({
  selector: 'app-continue-learning',
  imports: [
    CustomButtonComponent,
    RouterLink,
    HlmCardContentDirective,
    HlmCardDirective,
  ],
  templateUrl: './continue-learning.component.html',
  styleUrl: './continue-learning.component.css'
})
export class ContinueLearningComponent {
}
