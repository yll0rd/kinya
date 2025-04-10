import { Component, Input } from '@angular/core';
import { RoundProgressComponent } from 'angular-svg-round-progressbar';

@Component({
  selector: 'app-your-progess',
  imports: [RoundProgressComponent],
  templateUrl: './your-progess.component.html',
  styleUrl: './your-progess.component.css'
})
export class YourProgessComponent {
  @Input() overallProgress = {
    current: 90,
    max: 100,
  }

  @Input() lessonsCompleted = {
    current: 5,
    max: 30,
  }

  @Input() dayStreak = {
    current: 3,
    max: 7,
  }
}
