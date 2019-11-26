import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username, password) {
    if ( username === 'arun' && password === '1234' ) {
      sessionStorage.setItem('authUser', username);
      return true;
    }
    return false;
  }
  isUserLoggedIn() {
    const user = sessionStorage.getItem('authUser');
    return !(user === null);
  }

  logOut() {
    const user = sessionStorage.removeItem('authUser');
  }
}
