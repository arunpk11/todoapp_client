import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { JWTAuthenticationService } from './jwtauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    private jwtAuthService: JWTAuthenticationService,
    private router: Router
    ) { }
  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // console.log( 'is User Logged in : ' + this.hardcodedAuthenticationService.isUserLoggedIn());
    if (this.jwtAuthService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
