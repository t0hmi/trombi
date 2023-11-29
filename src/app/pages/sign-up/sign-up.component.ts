import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from '../../components/text-input/text-input.component';
import { FormWelcomeComponent } from '../../components/forms/form-welcome/form-welcome.component';
import { FormPersonalComponent, PersonalData } from '../../components/forms/form-personal/form-personal.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormWelcomeComponent, FormPersonalComponent],
  template: `

    <div class="left">
      @switch (currentStep) {
        @case ('WELCOME') {
          <app-form-welcome (onSubmit)="stepPersonal($event)"/>
        }
        @case ('PERSONAL') {
          <app-form-personal (onSubmit)="stepCompany($event)"/>
        }
        @case ('COMPANY') {}
        }
    </div>
  `,
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  currentStep: Step = 'PERSONAL';
  email = "";
  user: PersonalData | undefined; 
 
  stepPersonal(email: string) {
    this.email = email;
    this.currentStep = 'PERSONAL';
  }

  stepCompany(data: PersonalData) {
    this.user = data;
    this.currentStep = 'COMPANY';
    
  }
}

type Step = 'WELCOME' | 'PERSONAL' | 'COMPANY'
