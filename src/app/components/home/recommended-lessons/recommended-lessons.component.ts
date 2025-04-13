import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RouterLink } from '@angular/router';
import {
  HlmCardContentDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-recommended-lessons',
  imports: [
    HlmCardContentDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,

    HlmButtonDirective,

    CardModule,
    ButtonModule,
    RouterLink
  ],
  templateUrl: './recommended-lessons.component.html',
  styleUrl: './recommended-lessons.component.css'
})
export class RecommendedLessonsComponent {
  @Input() recommendedLessons = [
    {
      id: 1,
      title: "Greetings",
      icon: "pi pi-users text-blue-600 dark:text-blue-400",
      completion: 75,
    },
    {
      id: 2,
      title: "Food & Drinks",
      icon: "pi pi-globe text-green-600 dark:text-green-400",
      completion: 30,
    },
    {
      id: 3,
      title: "Travel",
      icon: "pi pi-book text-yellow-600 dark:text-yellow-400",
      completion: 10,
    },
    {
      id: 4,
      title: "Family",
      icon: "pi pi-users text-blue-600 dark:text-blue-400",
      completion: 0,
    },
  ]

}
