import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User|null>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then((value : any )=> {
        console.log('Success!', value);
      })
      .catch((err : Error) => {
        console.log('Something went wrong:',err.message);
      });    
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(()=> {
        console.log('Nice, it worked!');
      })
      .catch((err : Error) => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    console.log("on logout");
    this.firebaseAuth
      .auth
      .signOut();
  }
}
