import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from '../../text-input/text-input.component';
import { SelectComponent } from '../../select/select.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-trombinoscope-header',
  standalone: true,
  imports: [CommonModule, TextInputComponent, SelectComponent],
  template: `
    <header>
      <div class="filters">
        <app-text-input placeholder="rechercher un étudiant" [formControl]="filtersForm.controls.search" />
        <app-select [data]="options" [formControl]="filtersForm.controls.promotion"/>
      </div>
    </header>
  `,
  styleUrl: './trombinoscope-header.component.scss'
})
export class TrombinoscopeHeaderComponent {
  
  fb = inject(FormBuilder);

  filtersForm = this.fb.group({
    search: [''],
    promotion: ['']
  })

  options: string[] = ['FIL2023', 'FIL2024', 'FIL2025', 'FIT2023', 'FIT2024', 'FIT2025']



}
