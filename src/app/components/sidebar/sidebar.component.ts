import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      sidebar works!
    </p>
  `,
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
