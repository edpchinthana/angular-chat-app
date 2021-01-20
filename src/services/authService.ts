import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private store: Store<fromAuth.State>,
    private afAuth: AngularFireAuth
  ) { }

  initialize() {
    this.afAuth.auth.onAuthStateChanged(payload => {
      if (payload) {
        const user: UserBeta = {
          uid: payload.uid,
          displayName: payload.displayName,
          email: payload.email,
          emailVerified: payload.emailVerified
        };

        this.store.dispatch(AuthActions.authenticated({ user }));
      } else {
        this.store.dispatch(AuthActions.notAuthenticated());
      }
    });
  }
}