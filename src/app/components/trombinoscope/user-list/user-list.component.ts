import { Component, Input, WritableSignal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserData } from '../../../services/user.service';
import { UserCardComponent } from '../../user/user-card/user-card.component';
import { TrombinoscopeHeaderComponent } from '../trombinoscope-header/trombinoscope-header.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserCardComponent, TrombinoscopeHeaderComponent],
  template: `
  <app-trombinoscope-header (onSearchChange)="filterUsers($event)" />
  <div class="wrapper">
    <div class="users">
      @for (user of filteredUsers(); track user.personal.email) {
        <app-user-card (click)="navigateToDetail(user.personal.email)" [user]="user" />
      }
    </div>
  </div>
  `,
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  private _router = inject(Router);
  private _route = inject(ActivatedRoute);
  private _users: UserData[] = [];

  @Input() set users(users: UserData[]) {
    this._users = users;
    this.filteredUsers.set(users);
  };

  filteredUsers: WritableSignal<UserData[]> = signal(this.users);

  filterUsers(search: string) {
    this.filteredUsers.update((filteredUsers) => {
      filteredUsers = this._users;
      return filteredUsers.filter(user => 
        `${user.personal.firstname.toLowerCase()} ${user.personal.lastname.toLowerCase()}`.includes(search.toLowerCase()))
    }
    );
  }

  navigateToDetail(email: string) {
    console.log("[clicked]", email);
    this._router.navigate(['user'], { 
      relativeTo: this._route,
      queryParams: { email }
    })
  }
}
