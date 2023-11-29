import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
  <div>
    <label>
      {{label}}
      @if(required){ 
        <span>*</span>
      } 
    </label>
    <ng-content></ng-content>
    <div class="row">
      <ng-content></ng-content>
      <input  [type]="type"
              [placeholder]="placeholder"
              [formControl]="formControl"
      >
    </div>

    @if(formControl.invalid && (formControl.dirty || formControl.touched)) {
      @if(formControl.errors?.['required']) {
        <p class="error">
          le {{label}} est requis.
        </p>
      }@else if (formControl.errors?.['email']) {
        <p class="error">
          l'email n'est pas correctement formaté.
        </p>
      }
    }

  </div>
  `,
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent {
  @Input() placeholder = '';
  @Input() type = '';
  @Input() required = false;
  @Input() email = false;
  @Input() label = ""
  @Input() formControl!: FormControl;
}
