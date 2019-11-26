import { Injectable } from '@angular/core';
import { API_URL } from 'src/app.constants';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export const AUTH_USER = 'authUser';
export const TOKEN = 'token';

@Injectable({
  providedIn: 'root'
})
export class JWTAuthenticationService {

  constructor(private httpClient: HttpClient) { }

  executeAuthService(username, password) {
    return this.httpClient.post<any>(`${API_URL}/authenticate`, { username, password }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTH_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    );
  }

  getAuthUser() {
    return sessionStorage.getItem(AUTH_USER);
  }

  getAuthToken() {
    if (this.getAuthUser()) {
      return sessionStorage.getItem(TOKEN);
    }
    return null;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(AUTH_USER);
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem(AUTH_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean {
  constructor(private message: string) { }
}
