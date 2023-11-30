import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../button/button.component';
import { TextInputComponent } from '../../text-input/text-input.component';
import { FormBuilder, Validators } from '@angular/forms';
import { ImgDropzoneComponent } from '../../img-dropzone/img-dropzone.component';

@Component({
  selector: 'app-form-personal',
  standalone: true,
  imports: [CommonModule, TextInputComponent, ButtonComponent, ImgDropzoneComponent],
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
      <app-img-dropzone label="photo" placeholder="droppez votre photo" (onImageChange)="userProfilPicture = $event"/>
      <app-text-input 
        label="linkedin"
        placeholder="entrez votre linkedin"
        [formControl]="personalForm.controls.linkedin"
      >
        <div class="social">
          <img src="/assets/icons/linkedin.svg" alt="">
        </div>
      </app-text-input>
      <app-text-input 
        label="twitter"
        placeholder="entrez votre twitter"
        [formControl]="personalForm.controls.twitter"
      >
        <div class="social">
          <img src="/assets/icons/twitter.svg" alt="">
        </div>
      </app-text-input>
      <app-button value="Suivant" (click)="submit($event)" />
    </form>
  `,
  styleUrl: './form-personal.component.scss'
})
export class FormPersonalComponent {

  @Output() onSubmit = new EventEmitter<PersonalData>()

  fb = inject(FormBuilder);
  userProfilPicture: string | ArrayBuffer | null | undefined;

  personalForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    linkedin: [''],
    twitter: ['']
  })

  submit(event: Event) {
    event.preventDefault();
    if(this.personalForm.invalid || !this.userProfilPicture) return;
    
    const data: PersonalData = {
      firstname: this.personalForm.controls.firstname.value,
      lastname: this.personalForm.controls.lastname.value,
      linkedin: this.personalForm.controls.linkedin.value,
      twitter: this.personalForm.controls.twitter.value,
      image: this.userProfilPicture
    } as PersonalData

    this.onSubmit.emit(data);
  }
}

export type PersonalData = {
  firstname: string;
  lastname: string;
  linkedin?: string;
  twitter?: string;
  image: string | ArrayBuffer | null | undefined;
}