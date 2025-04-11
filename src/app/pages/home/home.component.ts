import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { YourProgessComponent } from '../../components/home/your-progess/your-progess.component';
import { ContinueLearningComponent } from '../../components/home/continue-learning/continue-learning.component';
import { RecommendedLessonsComponent } from '../../components/home/recommended-lessons/recommended-lessons.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, YourProgessComponent, ContinueLearningComponent, RecommendedLessonsComponent, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
