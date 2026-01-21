import { inject, Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {DetailLessonCategory} from '../models/DetailLessonCategory.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PhraseService {
  private apiUrl = import.meta.env.NG_APP_BACKEND_URL;
  private router = inject(Router);

  constructor(private httpClient: HttpClient) { }

  getLessonCategory(id: string): Observable<DetailLessonCategory> {
    return this.httpClient.get<DetailLessonCategory>(`${this.apiUrl}/lesson-category/${id}`)
      .pipe(
        // tap(response => console.log(response)),
        catchError((error: HttpErrorResponse) => {
          console.log(error);
          if (error.status === 401) {
            // Handle 401 error: Unauthorized
            this.router.navigate(['/login'], { queryParams: { redirectUrl: this.router.url } });
          }
          return throwError(() => error?.error || error);
        })
      )
  }
}
