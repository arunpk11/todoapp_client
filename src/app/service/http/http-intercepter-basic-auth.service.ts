import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';
import { JWTAuthenticationService } from '../jwtauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    // private basicAuthService: BasicAuthenticationService
    private jwtAuthService: JWTAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token = this.jwtAuthService.getAuthToken();
    const username = this.jwtAuthService.getAuthUser();
    // console.log('Token : ' + token);
    // console.log('User : ' + username);
    if (token && username) {
      request = request.clone({
        setHeaders: {
          Authorization: token
        }
      });
    }
    return next.handle(request);
  }
}
