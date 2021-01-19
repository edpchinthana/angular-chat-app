import { Component } from '@angular/core';
import * as firebase from 'firebase';
import  {firebaseConfig}  from './../config/firebaseConfig';

@Component({
  selector: 'app-root',
  //template:'<div></div>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'chat-app';

  constructor(){
    firebase.default.initializeApp(firebaseConfig);
  }
}
