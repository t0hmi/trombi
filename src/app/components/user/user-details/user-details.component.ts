import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      user-details works!
    </p>
  `,
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

}
