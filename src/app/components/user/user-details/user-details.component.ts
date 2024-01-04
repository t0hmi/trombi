import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserData } from '../../../services/user.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    {{ user | json }}
  `,
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  @Input({required: true}) user!: UserData;
}
