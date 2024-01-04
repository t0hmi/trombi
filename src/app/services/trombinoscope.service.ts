import { Injectable, inject, signal } from '@angular/core';
import promotions from '../../assets/data/promotions.json';
import { UserData, UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TrombinoscopeService {
  
  userService = inject(UserService);  
  current = signal<Promotion>('FIL2023');
  users = signal<UserData[]>(this.setUsers(this.current()));
  
  getPromotions(): Promotion[] {
    return Object.keys(promotions) as Promotion[];
  }

  set(trombinoscope: Promotion) {
    this.current.set(trombinoscope);
    


    this.users.set(this.setUsers(this.current()));
  }
  
  private setUsers(trombinoscope: Promotion): UserData[] {
    let users = promotions[this.current()] as UserData[];

    const connectedUser = this.userService.user();
    if(connectedUser && connectedUser.company.promotion === trombinoscope) {
      users = [connectedUser, ...users];
    }

    return users;

  }
}

export type Promotion = keyof typeof promotions;
