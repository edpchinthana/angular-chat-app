import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/models/loginUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  loginUser = new LoginUser("pasdin", "");
  stayLoggedIn: boolean = true;

  onSubmit(){
    console.log(this.stayLoggedIn);
  }
}
