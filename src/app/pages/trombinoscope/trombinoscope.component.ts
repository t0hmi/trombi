import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trombinoscope',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      trombinoscope works!
    </p>
  `,
  styleUrl: './trombinoscope.component.scss'
})
export class TrombinoscopeComponent {

}
