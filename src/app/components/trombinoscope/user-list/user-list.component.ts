import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserData } from '../../../services/user.service';
import { UserCardComponent } from '../../user/user-card/user-card.component';
import { TrombinoscopeHeaderComponent } from '../trombinoscope-header/trombinoscope-header.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserCardComponent, TrombinoscopeHeaderComponent],
  template: `
  <app-trombinoscope-header />
  <div class="wrapper">
    <div class="users">
      @for (user of users; track user.personal.email) {
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
        <app-user-card [user]="user" />
      }
    </div>
  </div>
  `,
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  @Input() users: UserData[] = [
    {
      personal: {
          firstname: "Thomas",
          lastname: "Hamon",
          linkedin: "Thomas Hamon",
          twitter: "th0mas",
          image: "https://www.w3.org/Style/Woolly/woolly-mc.png",
          email: "thomas@test.gg"
      },
      company: {
          company: "EQUATIV",
          position: "SWE Apprentice",
          logo: "https://www.w3.org/Style/Woolly/woolly-mc.png",
          promotion: "FIL2024"
      }
  }
  ];
}
