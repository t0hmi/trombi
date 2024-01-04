import { Component, EventEmitter, Output, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from '../../text-input/text-input.component';
import { SelectComponent } from '../../select/select.component';
import { FormBuilder } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { TrombinoscopeService } from '../../../services/trombinoscope.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trombinoscope-header',
  standalone: true,
  imports: [CommonModule, TextInputComponent, SelectComponent],
  template: `
    <header>
      <div class="filters">
        <app-text-input placeholder="rechercher un étudiant" [formControl]="filtersForm.controls.search" />
        <app-select [data]="options" [formControl]="filtersForm.controls.promotion" [selected]="trombinoscopeService.current()"/>
      </div>
    </header>
  `,
  styleUrl: './trombinoscope-header.component.scss'
})
export class TrombinoscopeHeaderComponent {
  @Output() onSearchChange = new EventEmitter<string>();
  route = inject(Router);
  fb = inject(FormBuilder);
  trombinoscopeService = inject(TrombinoscopeService);
  
  options: string[] = this.trombinoscopeService.getPromotions();
  filtersForm = this.fb.group({
    search: [''],
    promotion: ['']
  });
  
  search = toSignal(this.filtersForm.controls.search.valueChanges);
  promotion = toSignal(this.filtersForm.controls.promotion.valueChanges);

  constructor() {
    effect(() => {
        this.onSearchChange.emit(this.search() as string);
    }, { allowSignalWrites: true })

    effect(() => {
      this.route.navigate(['/trombinoscope', this.promotion()])
    })
  } 
}
