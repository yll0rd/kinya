import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import {
  HlmTabsComponent,
  HlmTabsContentDirective,
  HlmTabsListComponent,
  HlmTabsTriggerDirective,
} from '@spartan-ng/ui-tabs-helm';
import {
  HlmCardContentDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { LessonCategoriesService } from '../../services/lesson-categories.service';
import { LessonCategory } from '../../models/LessonCategory.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-lessons',
  imports: [
    HlmBadgeDirective,
    HlmButtonDirective,
    HlmTabsTriggerDirective,
    HlmTabsContentDirective,
    HlmTabsComponent,
    HlmTabsListComponent,
    HlmInputDirective,
    HlmCardContentDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    RouterLink,
  ],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.css'
})
export class LessonsComponent implements OnInit {
  private icons = [
    "pi pi-users text-blue-600 dark:text-blue-400",
    "pi pi-globe text-green-600 dark:text-green-400",
    "pi pi-book text-yellow-600 dark:text-yellow-400",
    "pi pi-users text-blue-600 dark:text-blue-400",
    "pi pi-book text-green-600 dark:text-green-400",
    "pi pi-globe text-yellow-600 dark:text-yellow-400",
  ]
  @Input() lessonCategories: (LessonCategory & { icon: string })[] = [
    // {
    //   id: 1,
    //   title: "Greetings",
    //   description: "Learn common greetings and introductions",
    //   icon: "pi pi-users text-blue-600 dark:text-blue-400",
    //   progress: 75,
    //   lessons: 5,
    // },
    // {
    //   id: 2,
    //   title: "Food & Drinks",
    //   description: "Vocabulary for ordering and discussing meals",
    //   icon: "pi pi-globe text-green-600 dark:text-green-400",
    //   progress: 30,
    //   lessons: 8,
    // },
    // {
    //   id: 3,
    //   title: "Travel",
    //   description: "Essential phrases for getting around",
    //   icon: "pi pi-book text-yellow-600 dark:text-yellow-400",
    //   progress: 10,
    //   lessons: 6,
    // },
    // {
    //   id: 4,
    //   title: "Family",
    //   description: "Terms for family members and relationships",
    //   icon: "pi pi-users text-blue-600 dark:text-blue-400",
    //   progress: 0,
    //   lessons: 4,
    // },
    // {
    //   id: 5,
    //   title: "Numbers",
    //   description: "Counting and basic mathematics",
    //   icon: "pi pi-book text-green-600 dark:text-green-400",
    //   progress: 0,
    //   lessons: 3,
    // },
    // {
    //   id: 6,
    //   title: "Time & Date",
    //   description: "Expressing time and scheduling",
    //   icon: "pi pi-globe text-yellow-600 dark:text-yellow-400",
    //   progress: 0,
    //   lessons: 5,
    // },
  ]

  constructor(
    private lessonCategoriesService: LessonCategoriesService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    console.log(this.authService.isAuthenticated())
    this.lessonCategoriesService.getLessonCategories()
      .subscribe(data => this.lessonCategories = data.map((lc, index) => ({
        ...lc,
        progress: this.authService.isAuthenticated() ? lc.progress : null,
        icon: this.icons[index % this.icons.length]
      })))
  }

}
