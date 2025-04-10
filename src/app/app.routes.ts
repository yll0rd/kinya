import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'lessons',
        loadComponent: () => import('./pages/lessons/lessons.component').then(m => m.LessonsComponent)
    },
    {
        path: 'lessons/:categoryId',
        loadComponent: () => import('./pages/detail-lesson/detail-lesson.component').then(m => m.DetailLessonComponent)
    }
];
