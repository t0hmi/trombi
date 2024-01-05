import { Component, Input, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { UserData } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="container">
    <div class="back" (click)="goBack()">
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="16" viewBox="0 0 29 16" fill="none">
          <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM29 7L1 7L1 9L29 9L29 7Z" fill="black"/>
        </svg>
        <span>RETOUR</span>
    </div>
    <div class="promotion">
      <p>
        promotion {{ user.company.promotion }}
      </p>
    </div>
    <div class="user-detail">
      <div class="user-detail__info">
        <div class="info__personal">
          <img class="photo" [src]="user.personal.image">
          <div class="data">
            <div class="content">
              <h3>informations personelles</h3>
              <p class="item">
                Nom: <strong>{{ user.personal.lastname | titlecase }}</strong>  
              </p>
              <p class="item">
                Prénom: <strong>{{ user.personal.firstname | titlecase }}</strong>  
              </p>
            </div>
            <div class="social-media content">
              <h3>réseaux sociaux</h3>
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
              <div class="tag mail">
                  <a [href]="'mailto:' + user.personal.email">Envoyer un email ✉️</a>
                </div>
            </div>
          </div>
        </div>
        <div class="info__company">
          <img class="photo" [src]="user.company.logo">
          <div class="data">
            <div class="content">
              <h3>entreprise d'accueil</h3>
                <p class="item">
                  Entreprise: <strong>{{ user.company.company | titlecase }}</strong>  
                </p>
                <p class="item">
                  Role: <strong>{{ user.company.position | titlecase }}</strong>  
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  @Input({required: true}) user!: UserData;

  private location = inject(Location);

  goBack() {
    this.location.back();
  }
}
