import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { catchError, of } from 'rxjs';
import { LessonCategoriesService } from '../services/lesson-categories.service';
import { LessonCategory } from '../models/LessonCategory.model';

@Injectable({
  providedIn: 'root'
})
export class LessonsResolver implements Resolve<LessonCategory[]> {
  constructor(private lessonCategoriesService: LessonCategoriesService) { }

  resolve() {
    return this.lessonCategoriesService.getLessonCategories().pipe(
      catchError((err) => {
        console.error('Error fetching lesson categories:', err);
        return of([]);
      })
    );
  }
}