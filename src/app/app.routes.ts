import { Routes } from '@angular/router';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { UnAuthenticatedGuard } from './guards/unauthenticated.guard';
import { LessonsResolver } from './resolves/lessons.resolve';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)
    },
    {
        path: 'lessons',
        loadComponent: () => import('./pages/lessons/lessons.component').then(m => m.LessonsComponent),
        resolve: { lessons: LessonsResolver }
    },
    {
        path: 'lessons/:categorySlug',
        loadComponent: () => import('./pages/detail-lesson/detail-lesson.component').then(m => m.DetailLessonComponent),
        canActivate: [AuthenticatedGuard]
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
        canActivate: [UnAuthenticatedGuard]
    },
    {
        path: 'signup',
        loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignupComponent),
        canActivate: [UnAuthenticatedGuard]
    }
];
