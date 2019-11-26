import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 // isUserLogged: boolean= false;
  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService ) { }


  ngOnInit() {
    // if we write the below code in onInit(), then it will be assigned once and stay as is. Hence no refresh will happen on menu bar.
    // So this is not a best practice. Hence call this method in html
    // this.isUserLogged = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
