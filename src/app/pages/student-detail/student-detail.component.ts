import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserData } from '../../services/user.service';
import { TrombinoscopeService } from '../../services/trombinoscope.service';
import { UserDetailsComponent } from '../../components/user/user-details/user-details.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [CommonModule, UserDetailsComponent],
  template: `
      <app-user-details [user]="user" />
  `,
  styleUrl: './student-detail.component.scss'
})
export class StudentDetailComponent implements OnInit {
  
  trombinoscopeService = inject(TrombinoscopeService);
  route = inject(ActivatedRoute);
  user!: UserData;

  ngOnInit(): void {
    const email = this.route.snapshot.queryParamMap.get('email');
    const user = this.trombinoscopeService.users().find(user => user.personal.email === email);
    console.log(this.trombinoscopeService.users());
    
    if(user) {
      this.user = user;
    }
  }

}
