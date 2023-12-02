import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormWelcomeComponent } from '../../components/forms/form-welcome/form-welcome.component';
import { FormPersonalComponent, PersonalData } from '../../components/forms/form-personal/form-personal.component';
import { CompanyData, FormCompanyComponent } from '../../components/forms/form-company/form-company.component';
import { UserData, UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormWelcomeComponent, FormPersonalComponent, FormCompanyComponent],
  template: `

    <div class="left">
      @switch (currentStep) {
        @case ('WELCOME') {
          <app-form-welcome (onSubmit)="stepPersonal($event)"/>
        }
        @case ('PERSONAL') {
          <app-form-personal (onSubmit)="stepCompany($event)"/>
        }
        @case ('COMPANY') {
          <app-form-company (onSubmit)="submit($event)" />
        }
        }
      </div>
      <div class="bg"></div>
  `,
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  userService = inject(UserService);
  router = inject(Router);

  currentStep: Step = 'WELCOME';
  email = "";
  personalData: PersonalData | undefined; 
  companyData: CompanyData | undefined;
 
  stepPersonal(email: string) {
    this.email = email;
    this.currentStep = 'PERSONAL';
  }

  stepCompany(data: PersonalData) {
    this.personalData = data;
    this.currentStep = 'COMPANY';
  }

  submit(data: CompanyData) {
    this.companyData = data;
    if(!this.companyData || !this.personalData || !this.email) return;

    const userData: UserData = {
      personal: {...this.personalData, email: this.email},
      company: this.companyData
    }

    this.userService.save(userData);
    this.router.navigate(['/trombinoscope', this.companyData.promotion])
    
  }
}

type Step = 'WELCOME' | 'PERSONAL' | 'COMPANY'
