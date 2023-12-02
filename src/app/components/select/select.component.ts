import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
  <div>
    <label>
      {{ label }} 
      @if(required) {
        <span>*</span>
      }
    </label>
    <div class="select">
      <select [formControl]="formControl" [(ngModel)]="selected">
        @for (item of data; track item) {
          <option [value]="item">{{ item }} </option>
        }
      </select>
    </div>
  </div>
  `,
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  @Input() data: string[] = [];
  @Input() label = "";
  @Input() required = false;
  @Input() formControl!: FormControl;
  @Input() selected = "";
}
