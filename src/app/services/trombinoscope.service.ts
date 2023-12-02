import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrombinoscopeService {
  
  constructor() { }
  
  current = signal('');
  
  set(trombinoscope: string) {
    this.current.set(trombinoscope);
  }
  
}
