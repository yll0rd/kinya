import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CustomButtonComponent } from '../../shared/ui/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recommended-lessons',
  imports: [CardModule, ButtonModule, CustomButtonComponent, RouterLink],
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
