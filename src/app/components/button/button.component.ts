import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <input type="submit" [value]="value">
  `,
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() value = '';
}
