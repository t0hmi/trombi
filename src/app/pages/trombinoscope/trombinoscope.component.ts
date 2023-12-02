import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { UserListComponent } from '../../components/trombinoscope/user-list/user-list.component';
import { TrombinoscopeService } from '../../services/trombinoscope.service';

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
  @Input() set id(id: string) {
    this.trombinoscopeService.set(id);
  }

  trombinoscopeService = inject(TrombinoscopeService);
}
