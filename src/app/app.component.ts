import { Component } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private fb: FacebookService) {
    let initParams: InitParams = {
      appId: '1528884584098427',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);
  }

  loginWithFacebook(): void {
    this.fb.login()
      .then((response: LoginResponse) => console.log(response))
      .catch((error: any) => console.log(error));
  }
}
