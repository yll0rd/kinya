import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { YourProgessComponent } from '../../components/home/your-progess/your-progess.component';
import { ContinueLearningComponent } from '../../components/home/continue-learning/continue-learning.component';
import { RecommendedLessonsComponent } from '../../components/home/recommended-lessons/recommended-lessons.component';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-home',
  imports: [RouterLink, YourProgessComponent, ContinueLearningComponent, RecommendedLessonsComponent, HlmButtonDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
