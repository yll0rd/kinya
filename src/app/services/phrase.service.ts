import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {DetailLessonCategory} from '../models/DetailLessonCategory.model';

@Injectable({
  providedIn: 'root'
})
export class PhraseService {
  private apiUrl = import.meta.env.NG_APP_BACKEND_URL;

  constructor(private httpClient: HttpClient) { }

  getLessonCategory(id: string): Observable<DetailLessonCategory> {
    return this.httpClient.get<DetailLessonCategory>(`${this.apiUrl}/lesson-category/${id}`)
      .pipe(
        // tap(response => console.log(response)),
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error.error);
        })
      )
  }
}
