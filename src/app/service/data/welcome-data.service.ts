import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { API_URL } from 'src/app.constants';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.httpClient.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
  }

  executeHelloWorldBeanServiceWithParam(name) {
    return this.httpClient.get<HelloWorldBean>(`${API_URL}/hello-world-bean/${name}`);
  }
}

export class HelloWorldBean {
  constructor(public message: string) {}
}
