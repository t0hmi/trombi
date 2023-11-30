import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from '../../text-input/text-input.component';
import { ImgDropzoneComponent } from '../../img-dropzone/img-dropzone.component';
import { ButtonComponent } from '../../button/button.component';
import { FormBuilder, Validators } from '@angular/forms';
import { SelectComponent } from '../../select/select.component';

@Component({
  selector: 'app-form-company',
  standalone: true,
  imports: [CommonModule, TextInputComponent, ImgDropzoneComponent, ButtonComponent, SelectComponent],
  template: `
    <form>
      <h1>C’est presque fini !</h1>
      <p>quelques formalité sur l’école et ton entreprise et tu pourras consulter tous les trombinoscopes</p> 
      
      <app-select 
      [data]="options" 
      label="promotion" 
      [required]="true"
      [formControl]="companyForm.controls.promotion"
      />

      <app-text-input 
      [required]="true"
      placeholder="entrez votre entreprise"
      label="entreprise"
      [formControl]="companyForm.controls.company" /> 

      <app-img-dropzone 
      label="logo" 
      placeholder="droppez le logo de votre entreprise"
      (onImageChange)="this.logo = $event" />

      <app-text-input 
      placeholder="entrez votre poste"
      label="poste"
      [formControl]="companyForm.controls.position" /> 

      <app-button 
      (click)="submit($event)"
      value="Finir mon profil"/>
    </form>
  `,
  styleUrl: './form-company.component.scss'
})
export class FormCompanyComponent {

  @Output() onSubmit = new EventEmitter();
  
  fb = inject(FormBuilder);
  
  logo: string | ArrayBuffer | null | undefined;
  options = ['FIL2023', 'FIL2024', 'FIL2025', 'FIT2023', 'FIT2024', 'FIT2025']
  companyForm = this.fb.group({
    promotion: ['', Validators.required],
    company: ['', Validators.required],
    position: [''],
  })

  submit(event: Event) {
    event.preventDefault();

    if(this.companyForm.invalid || !this.logo) return;

    const data: CompanyData = {
      company: this.companyForm.controls.company.value,
      logo: this.logo,
      position: this.companyForm.controls.position.value,
      promotion: this.companyForm.controls.promotion.value
    } as CompanyData;

    this.onSubmit.emit(data);
  }

}


export type CompanyData = {
  promotion: string;
  company: string;
  logo: string | ArrayBuffer | null | undefined;
  position?: string;
}
