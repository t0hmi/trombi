import { Injectable, signal } from '@angular/core';
import promotions from '../../assets/data/promotions.json';
import { UserData } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TrombinoscopeService {
  
  constructor() { }
  
  current = signal<Promotion>('FIL2023');
  users = signal<UserData[]>(promotions[this.current()] as UserData[]);
  
  getPromotions(): Promotion[] {
    return Object.keys(promotions) as Promotion[];
  }

  set(trombinoscope: Promotion) {
    this.current.set(trombinoscope);
    this.users.set(promotions[this.current()] as UserData[]);
  }
  
}

export type Promotion = keyof typeof promotions;
