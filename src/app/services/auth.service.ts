import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User|null>;
  private userDetails: firebase.User | null = null;

  constructor(private firebaseAuth: AngularFireAuth) {
    console.log('auth constructor');
    this.user = firebaseAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }
      }
    );
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

  async login(email: string, password: string, stayLoggedIn: boolean) {
    if(stayLoggedIn){
      this.firebaseAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    }else{
      this.firebaseAuth.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
    }

    await this.firebaseAuth
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
    try{
      this.firebaseAuth
      .auth
      .signOut();
    }catch(e){
      throw e;
    }
  }

   isLoggedIn(): boolean | Promise<boolean> {
    if (this.userDetails == null ) {
        return false;
      } else {
        console.log(this.userDetails)
        return true;
      }
    }
}
