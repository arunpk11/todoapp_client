import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { JWTAuthenticationService } from '../service/jwtauthentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string ;
  password: string;
  errorMessage = 'Invalid Credentials';
  isInvalidLogin = false;
  // Router should be used to route from one page to another
  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService,
    private jwtAuthenticationService: JWTAuthenticationService
    ) { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
      this.isInvalidLogin = false;
    } else {
      this.isInvalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    this.basicAuthenticationService.executeAuthService(this.username, this.password).subscribe(
      data => {
        console.log('Passed');
        this.router.navigate(['welcome', this.username]);
        this.isInvalidLogin = false;
      },
      error => {
        console.log('Failed');
        this.isInvalidLogin = true;
      }
    );
  }

  handleJwtAuthLogin() {
    console.log(this.username);
    console.log(this.password);
    this.jwtAuthenticationService.executeAuthService(this.username, this.password).subscribe(
      data => {
        console.log('Passed');
        this.router.navigate(['welcome', this.username]);
        this.isInvalidLogin = false;
      },
      error => {
        console.log('Failed');
        this.isInvalidLogin = true;
      }
    );
  }
}
