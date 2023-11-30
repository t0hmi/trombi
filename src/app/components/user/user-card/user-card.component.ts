import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserData } from '../../../services/user.service';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="user-card">
      <img class="user-card__img" [src]="user.personal.image" alt="">
      <div class="user-card__info">
        <h2>{{user.personal.firstname}} {{user.personal.lastname}}</h2>
        <div class="company">
          <p>{{user.company.company}}</p>
          @if(user.company.position) {
            <p class="italic">{{user.company.position}}</p>
          }
        </div>
        <div class="socials">
          @if(user.personal.linkedin) {
            <div class="tag">
              <img src="/assets/icons/user-linkedin.svg">
              <span>{{user.personal.linkedin}}</span>
            </div>
          }
          @if(user.personal.twitter) {
            <div class="tag">
              <img src="/assets/icons/user-twitter.svg">
              <span>{{user.personal.twitter}}</span>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user!: UserData;
}
