import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {LessonCategory} from '../models/LessonCategory.model';
import {catchError, Observable, tap, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonCategoriesService {
  private apiUrl = import.meta.env.NG_APP_BACKEND_URL;

  constructor(private httpClient: HttpClient) { }

  getLessonCategories(): Observable<LessonCategory[]> {
    return this.httpClient.get<LessonCategory[]>(`${this.apiUrl}/lesson-category`)
      .pipe(
        // tap(response => console.log(response)),
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error?.error || error);
        })
      )
  }
}
