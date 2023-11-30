import { Injectable, signal } from '@angular/core';
import { PersonalData } from '../components/forms/form-personal/form-personal.component';
import { CompanyData } from '../components/forms/form-company/form-company.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = signal<UserData | null>(this.getFromSessionStorage());

  save(user: UserData) {
    sessionStorage.setItem('user', JSON.stringify(user));
    this.user.set(user);
  }

  disconnect() {
    sessionStorage.removeItem('user');
    this.user.set(null);
  }

  isConnected(): boolean {
    return sessionStorage.getItem('user') !== null ? true : false;
  }


  private getFromSessionStorage(): UserData | null {
    if(!sessionStorage.getItem('user')) return null;
    
    const user: UserData = JSON.parse(sessionStorage.getItem('user') as string);
    return user;
   }
}

export type UserData = {
  personal: PersonalData & {email: string};
  company: CompanyData;
}