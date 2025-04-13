import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  HlmCardContentDirective,
  HlmCardDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-continue-learning',
  imports: [
    HlmButtonDirective,
    RouterLink,
    HlmCardContentDirective,
    HlmCardDirective,
  ],
  templateUrl: './continue-learning.component.html',
  styleUrl: './continue-learning.component.css'
})
export class ContinueLearningComponent {
  // Mock data for continue learning
  @Input() continueLesson = {
    id: 1,
    title: "Common Greetings",
    category: "Greetings",
    progress: 65,
    lastAccessed: "2 days ago",
  }  
}
