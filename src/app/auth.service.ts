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

    let options = {
      scope: 'public_profile,email,manage_pages'
    }

    this.fb.login(options)
      .then((response: LoginResponse) => {
        
        localStorage.setItem('userId', response.authResponse.userID);
        localStorage.setItem('accessToken', response.authResponse.accessToken);

        this.fb.api('/me?fields=id,name,email')
          .then((response) => {
            localStorage.setItem('name', response.name);
            this.router.navigate(['/dashboard']);
          })
          .catch((error) => console.log(error));
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
          this.router.navigate(['/']);
          localStorage.clear();
        }
      });
  }

  getUser() {
    let user = {
      name: localStorage.getItem('name'),
      userId: localStorage.getItem('userId'),
      accessToken: localStorage.getItem('accessToken')
    }

    if (user.userId && user.accessToken) {
      return user;
    }

    return null;
  }
}
