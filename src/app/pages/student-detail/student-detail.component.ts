import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserData } from '../../services/user.service';
import { TrombinoscopeService } from '../../services/trombinoscope.service';
import { UserDetailsComponent } from '../../components/user/user-details/user-details.component';
import { ActivatedRoute } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [CommonModule, UserDetailsComponent, SidebarComponent],
  template: `
      <app-sidebar />
      <div class="wrapper">
        <app-user-details [user]="user" />
      </div>
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
