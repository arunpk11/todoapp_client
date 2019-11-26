import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from 'src/app.constants';

export const AUTH_USER = 'authUser';
export const TOKEN = 'token';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private httpClient: HttpClient) { }
  executeAuthService(username, password) {
    const basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);
    const headers = new HttpHeaders({
        Authorization: basicAuthHeader
    });
    return this.httpClient.get<AuthenticationBean>(`${API_URL}/basicauth`, {headers}).pipe(
      map (
        data => {
          sessionStorage.setItem(AUTH_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeader);
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
  constructor(private message: string) {}
}
