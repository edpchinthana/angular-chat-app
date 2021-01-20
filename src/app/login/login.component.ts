import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/models/loginUser';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, public authService: AuthService) {}

  ngOnInit(): void {
  }


  loginUser = new LoginUser("", "");
  stayLoggedIn: boolean = false;

  onSubmit(){
   try{
    this.authService.login(this.loginUser.email, this.loginUser.password, this.stayLoggedIn);
    this.router.navigate(['/'])
   }catch(e){

   }
  }
}
