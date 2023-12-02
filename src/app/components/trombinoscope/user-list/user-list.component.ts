import { Component, Input, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserData } from '../../../services/user.service';
import { UserCardComponent } from '../../user/user-card/user-card.component';
import { TrombinoscopeHeaderComponent } from '../trombinoscope-header/trombinoscope-header.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserCardComponent, TrombinoscopeHeaderComponent],
  template: `
  <app-trombinoscope-header (onSearchChange)="filterUsers($event)" />
  <div class="wrapper">
    <div class="users">
      @for (user of filteredUsers(); track user.personal.email) {
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

  filteredUsers: WritableSignal<UserData[]> = signal(this.users);

  filterUsers(search: string) {
    this.filteredUsers.update((filteredUsers) => {
      filteredUsers = this.users;
      return filteredUsers.filter(user => 
        `${user.personal.firstname.toLowerCase()} ${user.personal.lastname.toLowerCase()}`.includes(search.toLowerCase()))
    }
    );
  }
}
