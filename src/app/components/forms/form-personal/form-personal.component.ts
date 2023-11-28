import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../button/button.component';
import { TextInputComponent } from '../../text-input/text-input.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-personal',
  standalone: true,
  imports: [CommonModule, TextInputComponent, ButtonComponent],
  template: `
    <form>
      <h1>Faisons plus connaissance ! </h1>
      <p>rentre tes informations pour que tes collègues te reconnaissent.</p>
      <app-text-input
        [required]="true"
        label="prénom"
        placeholder="entrez votre prénom"
        [formControl]="personalForm.controls.firstname"
      />
      <app-text-input 
        [required]="true"
        label="nom"
        placeholder="entrez votre nom"
        [formControl]="personalForm.controls.lastname"
      />

      <app-button value="Suivant" (click)="submit($event)" />
    </form>
  `,
  styleUrl: './form-personal.component.scss'
})
export class FormPersonalComponent {

  @Output() onSubmit = new EventEmitter<PersonalData>()

  fb = inject(FormBuilder);

  personalForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    linkedin: [''],
    twitter: ['']
  })

  submit(event: Event) {
    event.preventDefault();

    if(this.personalForm.invalid) return;

    const data: PersonalData = {
      firstname: this.personalForm.controls.firstname.value,
      lastname: this.personalForm.controls.lastname.value,
      linkedin: this.personalForm.controls.linkedin.value,
      twitter: this.personalForm.controls.twitter.value
    } as PersonalData

    this.onSubmit.emit(data);
  }
}

export type PersonalData = {
  firstname: string;
  lastname: string;
  linkedin?: string;
  twitter?: string;
}