import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';
import { LoggedInAuthGuardService } from './services/logged-in-auth-guard.service';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
 {path:'home', component: HomeComponent, canActivate:[ AuthGuard]},
 {path:'login', component: LoginComponent, canActivate:[LoggedInAuthGuardService]},
 {path:'signup', component: SignupComponent, canActivate:[LoggedInAuthGuardService]},
 { path: '',
 redirectTo: '/home',
 pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
