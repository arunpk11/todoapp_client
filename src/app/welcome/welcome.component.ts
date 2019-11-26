import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = '';
  serviceMessage = '';
  // ActivatedRoute should be used when the route carries a parameter
  constructor(private route: ActivatedRoute, private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getMessage() {
   // this.welcomeDataService.executeHelloWorldBeanService().subscribe(
    this.welcomeDataService.executeHelloWorldBeanServiceWithParam(this.name).subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );
    // console.log(this.welcomeDataService.executeHelloWorldBeanService().subscribe());
  }

  handleSuccessResponse(response) {
    this.serviceMessage = response.message;
    // console.log(response.message);
  }

  handleErrorResponse(error) {
    this.serviceMessage = error.error.message;
    // console.log(response.message);
  }

}
