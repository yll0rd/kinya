import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CustomButtonComponent } from '../../shared/ui/button/button.component';

@Component({
  selector: 'app-continue-learning',
  imports: [CustomButtonComponent, RouterLink],
  templateUrl: './continue-learning.component.html',
  styleUrl: './continue-learning.component.css'
})
export class ContinueLearningComponent {
}
