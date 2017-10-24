import { Injectable } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable()
export class AuthService {

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
        
        localStorage.setItem('userId', response.authResponse.userID);
        localStorage.setItem('accessToken', response.authResponse.accessToken);

        this.router.navigate(['/dashboard']);
      })
      .catch((error: any) => console.log(error));
  }
  
  logOut(): void {

    this.fb.getLoginStatus()
      .then((response) => {
        if (response.status == 'connected') {
          this.fb.logout()
            .then((response) => {
              this.router.navigate(['/']);
            })
            .catch((error: any) => console.log(error));
        } else {
          localStorage.removeItem('userId');
          localStorage.removeItem('accessToken');
          this.router.navigate(['/']);
        }
      });
  }

  getUser() {
    let user = {
      userId: localStorage.getItem('userId'),
      accessToken: localStorage.getItem('accessToken')
    }

    if (user.userId && user.accessToken) {
      return user;
    }

    return null;
  }
}
