import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from '../../text-input/text-input.component';
import { ButtonComponent } from '../../button/button.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-welcome',
  standalone: true,
  imports: [CommonModule, TextInputComponent, ButtonComponent],
  template: `
    <form>
      <h1>Bienvenue,</h1>
      <p>renseigne ton email pour avoir accès aux trombinoscopes les plus cool !</p> 
      <app-text-input 
      [required]="true"
      placeholder="entrez votre email"
      [email]="true"
      label="email"
      [formControl]="email" /> 
      <app-button 
      (click)="nextStep($event)"
      value="Commencer"/>
    </form>
  `,
  styleUrl: './form-welcome.component.scss'
})
export class FormWelcomeComponent {
  @Output() onSubmit = new EventEmitter<string>()
  email = new FormControl('', [Validators.required, Validators.email])
 
  nextStep(event: Event) {
    event.preventDefault();

    if(!this.email.value) return;

    this.onSubmit.emit(this.email.value);
  }
}
