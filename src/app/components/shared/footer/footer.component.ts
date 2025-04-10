import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() currentYear: number = new Date().getFullYear();

  // ngOnInit(): void {
  //   this.currentYear = new Date().getFullYear();
  // }
}
