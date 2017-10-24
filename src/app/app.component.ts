import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb: FacebookService, private router: Router) {
    let initParams: InitParams = {
      appId: environment.appId,
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);
  }

  loginWithFacebook(): void {
    this.fb.login()
      .then((response: LoginResponse) => {
        this.router.navigate(['/dashboard']);
      })
      .catch((error: any) => console.log(error));
  }

  logOut(): void {
    this.fb.logout()
      .then((response) => {
        this.router.navigate(['/']);
      })
      .catch((error: any) => console.log(error));
  }
}
