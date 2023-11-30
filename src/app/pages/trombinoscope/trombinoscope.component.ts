import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { UserCardComponent } from '../../components/user/user-card/user-card.component';
import { UserListComponent } from '../../components/trombinoscope/user-list/user-list.component';

@Component({
  selector: 'app-trombinoscope',
  standalone: true,
  imports: [CommonModule, SidebarComponent, UserListComponent],
  template: `
    <app-sidebar />
    <app-user-list />
  `,
  styleUrl: './trombinoscope.component.scss'
})
export class TrombinoscopeComponent {

}
