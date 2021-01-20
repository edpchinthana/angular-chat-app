import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/models/loginUser';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public authService: AuthService) {}

  ngOnInit(): void {
  }


  loginUser = new LoginUser("pasdin", "");
  stayLoggedIn: boolean = true;

  onSubmit(){
    this.authService.login(this.loginUser.email, this.loginUser.password);
  }
}
