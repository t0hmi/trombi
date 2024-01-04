import { CanActivateFn, Router, Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { TrombinoscopeComponent } from './pages/trombinoscope/trombinoscope.component';
import { inject } from '@angular/core';
import { UserService } from './services/user.service';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';

const userConnectedGuard: CanActivateFn = () => {
    const userService = inject(UserService);
    return userService.isConnected();
}

const userNotConnectedGuard: CanActivateFn = () => {
    const userService = inject(UserService);
    const router = inject(Router)

    if(userService.isConnected()) {
        router.navigate(['/trombinoscope', userService.user()?.company.promotion]);
        return false;
    }

    return true;
}

export const routes: Routes = [
    {path: '', component: SignUpComponent, canActivate: [userNotConnectedGuard]},
    {path: 'trombinoscope/:id', component: TrombinoscopeComponent, canActivate: [userConnectedGuard]},
    {path: 'trombinoscope/:id/user', component: StudentDetailComponent, canActivate: [userConnectedGuard]},
    {path: '**', redirectTo: '/'}
];
