import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { YourProgessComponent } from '../../components/home/your-progess/your-progess.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ButtonModule, YourProgessComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
