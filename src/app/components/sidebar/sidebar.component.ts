import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,  RouterOutlet, RouterLink, RouterLinkActive, ButtonComponent],
  template: `
    <nav>
      <div class="top">
        <img src="/assets/icons/logo.svg">
        <ul class="links">
          <li>
            <div class="wrapper">
              <img src="/assets/icons/file.svg" alt="">
              <a [routerLink]="['/trombinoscope', user()?.company?.promotion]" routerLinkActive="active">mon trombinoscope</a>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <img src="/assets/icons/stack.svg" alt="">
              trombinoscopes
            </div>
            <ul>
              @for (promotion of promotions; track promotions) {
                <li>
                  <a [routerLink]="['/trombinoscope', promotion]" routerLinkActive="active">{{ promotion }}</a>
                </li>
              }
            </ul>
          </li>
        </ul>
      </div>
      <app-button value="Déconnexion" (click)="disconnectUser()"/>
    </nav>
  `,
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  
  userService = inject(UserService);
  router = inject(Router);

  promotions = ['FIL2023', 'FIL2024', 'FIL2025', 'FIT2023', 'FIT2024', 'FIT2025']
  user = this.userService.user;

  disconnectUser() {
    this.userService.disconnect();
    this.router.navigate(['/']);
  }

}
